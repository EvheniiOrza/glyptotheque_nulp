// utils/createStorageBuckets.ts
import supabase from './supabaseClient'

export async function createStorageBuckets() {
    try {
        // Перевірити чи існує бакет
        const { data: buckets, error: listError } = await supabase
            .storage
            .listBuckets()

        if (listError) {
            console.error('Помилка при отриманні списку бакетів:', listError)
            throw listError
        }

        const qrcodesBucket = buckets?.find(bucket => bucket.name === 'qrcodes')

        if (!qrcodesBucket) {
            // Створення бакету через REST API
            const { data, error: createError } = await supabase
                .storage
                .createBucket('qrcodes', {
                    public: true,
                    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'],
                    fileSizeLimit: 2097152, // 2MB
                })

            if (createError) {
                console.error('Помилка при створенні бакету:', createError)
                throw createError
            }
            console.log('✅ Бакет "qrcodes" створено')
        } else {
            console.log('✅ Бакет "qrcodes" вже існує')
        }

        // Налаштування політик через SQL
        await setupStoragePolicies()

        return { success: true }
    } catch (error) {
        console.error('❌ Помилка при створенні бакетів:', error)
        return { success: false, error }
    }
}

async function setupStoragePolicies() {
    try {
        // Виконати SQL для налаштування політик
        const { error } = await supabase.rpc('exec_sql', {
            sql_query: `
                -- Дозволити всім операції з бакетом qrcodes
                DROP POLICY IF EXISTS "Allow all operations on qrcodes" ON storage.objects;
                CREATE POLICY "Allow all operations on qrcodes" ON storage.objects
                FOR ALL USING (bucket_id = 'qrcodes');
            `
        })

        if (error) {
            console.log('Спробуємо альтернативний метод...')
            // Альтернативний підхід
            await setupPoliciesAlternative()
        } else {
            console.log('✅ Політики storage налаштовано')
        }
    } catch (error) {
        console.log('Налаштування політик через SQL не вдалося, використовуємо альтернативний метод')
        await setupPoliciesAlternative()
    }
}

async function setupPoliciesAlternative() {
    try {
        // Проста перевірка доступу
        const testFile = new Blob(['test'], { type: 'text/plain' })
        const { error: uploadError } = await supabase.storage
            .from('qrcodes')
            .upload('test-access.txt', testFile, {
                upsert: true
            })

        if (uploadError) {
            console.warn('⚠️ Бакет не повністю публічний. Перевірте налаштування в Supabase Dashboard.')
        } else {
            // Видалити тестовий файл
            await supabase.storage
                .from('qrcodes')
                .remove(['test-access.txt'])
            console.log('✅ Бакет публічний - файли можна завантажувати')
        }
    } catch (error) {
        console.warn('⚠️ Потрібно вручну налаштувати політики в Supabase Dashboard')
    }
}