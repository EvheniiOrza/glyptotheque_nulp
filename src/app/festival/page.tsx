'use client'

import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { motion, AnimatePresence } from 'framer-motion'

const FestivalPage: React.FC = () => {
    const [expandedYear, setExpandedYear] = useState<string | null>(null)

    const videoArchive = {
        "2024": [
            {
                id: 1,
                title: "Львівський тиждень скульптури 2024",
                url: "https://youtu.be/YWVGXNys7Io?si=zsErjXQV5h33KFM1",
                thumbnail: "https://img.youtube.com/vi/YWVGXNys7Io/maxresdefault.jpg"
            },
            {
                id: 2,
                title: "Скульптурний маршрут 2024",
                url: "https://youtu.be/vfd0QPuXoEI?si=ZzRk28yRFB_FhiUA",
                thumbnail: "https://img.youtube.com/vi/vfd0QPuXoEI/maxresdefault.jpg"
            },
            {
                id: 3,
                title: "Відеоогляд фестивалю 2024",
                url: "https://youtu.be/VWtCkb3Ch5E?si=0PLxbLM3HAOU_dNP",
                thumbnail: "https://img.youtube.com/vi/VWtCkb3Ch5E/maxresdefault.jpg"
            }
        ],
        "2023": [
            {
                id: 5,
                title: "Перший фестиваль скульптури 2023",
                url: "https://youtu.be/0eb-_mStr4U?si=ZA4Kn7JoMlOf-GYb",
                thumbnail: "https://img.youtube.com/vi/0eb-_mStr4U/maxresdefault.jpg"
            }
        ],
        "2022":[
            {
                id: 4,
                title: "Львівський тиждень скульптури 2022",
                url: "https://youtu.be/EnRppMyYtms?si=ivP_CmbkcnZDkWCu",
                thumbnail: "https://img.youtube.com/vi/EnRppMyYtms/maxresdefault.jpg"
            }
        ]
    }

    const toggleYear = (year: string) => {
        setExpandedYear(expandedYear === year ? null : year)
    }

    return (
        <Layout>
            <main className="bg-gray-100 text-black min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-sans text-center mb-12 font-bold"
                        style={{ fontFamily: 'MursGotic - MassiveDemi, sans-serif' }}
                    >
                        ПРО ФЕСТИВАЛЬ
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-none shadow-lg p-8 mb-8"
                    >

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Виставку «Замилування» Ярослава Мотики можна оглянути у «Я Галерея Львів»(вул. Шота Руставелі, 8) з 4 вересня по 30 листопада 2025 року.</h2>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Виставку Ярослави Мотики можна відвідати у «Я Галерея Пентхаус» (вул. Зелена, 20) з 19 вересня по 30 листопада 2025 року.</h2>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-none shadow-lg p-8 mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Про фестиваль «Львівський тиждень скульптури»
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ідея провести фестиваль скульптури виникла в «Я Галерея» під час виставки «Нова львівська скульптура» восени 2022 року — на події-обговоренні, де мистецтвознавець, професор Академії мистецтв Орест Голубець запропонував організовувати хоча б один тиждень на рік, присвячений скульптурі, а Наталія Бунда з міської ради наголосила, що важливо не відкладати це «на майбутнє», а реалізувати ініціативу саме зараз, у час війни. Сформувавши ініціативну групу в партнерстві з Академією мистецтв, у старих майстернях провели першу виставку — «Хаос» під кураторством Павла Гудімова.
                            </p>
                            <p>
                                Наступного року фестиваль набув більшого розмаху: долучивши Обласну військову адміністрацію, провели більше заходів та встановили скульптури у публічному просторі міста. Головний проєкт відбувався в Палаці мистецтв і мав назву «Старе і нове / нове і старе». Також 2023 року було організовано «Скульптурний маршрут» з колекції Фонду Юрія Сташківа «ЧервонеЧорне», що викликав особливий резонанс навколо скульптури Василя Корчового «Впевнена». 2024 року Тиждень скульптури мав тему «Слід пам&#39;яті»: проєкти в «Ківші», Національному музеї імені Андрея Шептицького, «Я Галерея», Скансені та підсумкова конференція з однойменною назвою.
                            </p>
                            <p>
                                2025 року Тиждень скульптури має назву «Діалоги». Головний проєкт — «Гліптотека» — проходить у нового партнера фестивалю, Львівської політехніки. Нижче ви можете ознайомитися з детальною програмою та учасниками цьогорічного фестивалю.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-none shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Програма Львівського тижня скульптури 2025 «Діалоги»
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <div>
                                <h3 className="font-bold text-lg mb-2">З 9 вересня</h3>
                                <p>Встановлення двох об&#39;єктів німецького скульптора Георга Вольфа — «Давид» та «Quattro Curvi» — у співпраці з Jam Factory.</p>
                                <p className="mt-2">«Давид» — борець за свободу, символічна фігура, що наважується виступити проти велетня і перемагає його. Давид уособлює мужність і рішучість. Саме ці якості, разом із гнучкістю «меншого» супротивника, дозволяють перемогти повільного гіганта. Форма скульптури спрямована вгору з легким розширенням, що передає динаміку визволення та створює гру світла й тіні, посилюючи ефект відкритості.</p>
                                <p>Також — встановлення скульптури «Quattro Curvi» у Jam Factory.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">25 вересня – 30 жовтня</h3>
                                <p>Встановлення 15 скульптур-інтервенцій Дениса Шиманського.</p>
                                <p className="mt-2">Протягом вересня–жовтня автор планує встановити понад 15 «Діалогів». Це спеціальний маршрут містом Львова — від пам&#39;ятника Федорову до вокзалу, від площі Коліївщини до собору Святого Юра. Ви побачите «маленькі» втручання автора в середовище: фігури, що ведуть власний діалог із конкретною постаттю, пам&#39;ятником або храмом. Скульптури з&#39;являтимуться у місті протягом вересня–жовтня; стежити за «життям» проєкту можна на сторінці автора в Instagram.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">З 25 вересня</h3>
                                <p>Скульптурний маршрут 2.0 у Стрийському парку з колекції фонду Юрія Сташківа «ЧервонеЧорне».</p>
                                <p className="mt-2">Ми всі пам&#39;ятаємо про «Впевнену»; цьогоріч колекція знову потішить львів&#39;ян поповненням на верхній алеї парку — роботи українських і закордонних скульпторів.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">30 вересня</h3>
                                <p>Встановлення скульптури «Діалог» Володимира Семківа біля пам&#39;ятника ЗУНР.</p>
                                <p className="mt-2">«Ноги» прийдуть «провідати» пам&#39;ятники: провокативна скульптура-діалог — дві великі дерев&#39;яні стопи, що протягом Тижня скульптури переміщатимуться містом і «відвідуватимуть» різні монументи. Діалог (за Сократом) у своїй основі має конфлікт — питання, що формуються між об&#39;єктами, які провокує автор.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">31 вересня</h3>
                                <p>Перевезення старих, забутих у місті фрагментів скульптур минулого до Павільйону Спадщини на площі Петрушевича.</p>
                                <p>Встановлення скульптури «Книга пам&#39;яті» Івана Брезвина в сквері Бернардинського монастиря.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">10 жовтня – 10 листопада</h3>
                                <p>Відкриття виставки «Гліптотека» в Національному університеті «Львівська політехніка» (вул. Князя Романа).</p>
                                <p className="mt-2">Новий формат співпраці міста, мистецтва та навчальних закладів. Виставку можна відвідати протягом місяця: експонуються «скарби» Львівської політехніки (кафедра реставрації) у діалозі із сучасним мистецтвом. Матеріали підготовлено у співпраці з фахівцями Політехніки — Миколою Бевзом, Олегом Рибчинським, а також куратором Павлом Гудімовом та мистецтвознавицею Діаною Клочко.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">З 15 жовтня</h3>
                                <p>Встановлення об&#39;єкта «Бульбашка» Володимира Семківа навпроти Оперного театру.</p>
                                <p className="mt-2">Місце, що колись слугувало сценою для ідеологічних монументів — від «Адольф Гітлеррінг» до пам&#39;ятника Леніну, — сьогодні, по суті, перетворилося на «Бульбашку».</p>
                                <p>Також — встановлення скульптури «Зажата» біля театру Леся Курбаса.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">З 19 жовтня</h3>
                                <p>Встановлення скульптури «Дідо» + виставковий проєкт дизайн-студії Сергія Махноу Львівському скансені.</p>
                                <p className="mt-2">«Дідо» — сучасне переосмислення традиційної української кераміки у поєднанні з японською філософією.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">29 жовтня</h3>
                                <p>Відкриття виставки «Час невігласів» у просторі МОНО.</p>
                                <p className="mt-2">Конкурс молодої скульптури: про творчість, яку можуть реалізувати не лише фахові скульптори. Будь-яка молода людина віком 16–35 років може подати заявку, створити макет та взяти участь у виставці. Переможець отримає можливість встановити скульптуру в місті наступного року.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">З 30 жовтня</h3>
                                <p>Встановлення скульптури «Рука з двома великими пальцями» литовського скульптора Миколаса Саукоса на вул. Лесі Українки за підтримки Литовського інституту культури та Посольства Литви в Україні.</p>
                                <p>Встановлення інсталяції «Громовиця» Руслана Тремби на площі Митній, у співпраці з профтехучилищем МВПУАТБ (Міжрегіональне вище професійне училище автомобільного транспорту та будівництва).</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">31 жовтня</h3>
                                <p>Конференція партнерів та учасників «Скульптура в публічному просторі».</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">З листопада</h3>
                                <p>Встановлення скульптури-фонтану «Викрадення Європи» Ярослава Мотики у Стрийському парку.</p>
                                </div>
                        </div>
                    </motion.div>

                    {/* Video Archive Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-none shadow-lg p-8 mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Відеоархів Львівського тижня скульптури
                        </h2>

                        <div className="space-y-4">
                            {Object.entries(videoArchive).map(([year, videos]) => (
                                <div key={year} className="border border-gray-200 rounded-none overflow-hidden">
                                    <button
                                        onClick={() => toggleYear(year)}
                                        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                                    >
                                        <span className="text-xl font-bold text-gray-800">
                                            {year} рік
                                        </span>
                                        <motion.div
                                            animate={{ rotate: expandedYear === year ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gray-600"
                                        >
                                            ▼
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {expandedYear === year && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="bg-white"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                                                    {videos.map((video) => (
                                                        <motion.a
                                                            key={video.id}
                                                            href={video.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block group"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <div className="bg-gray-100 rounded-none overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                                                <div className="relative aspect-video">
                                                                    <img
                                                                        src={video.thumbnail}
                                                                        alt={video.title}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                                                        <div className="w-16 h-16 bg-red-600 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                                <path d="M8 5v14l11-7z"/>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="p-4">
                                                                    <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                                                                        {video.title}
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </main>
        </Layout>
    )
}

export default FestivalPage