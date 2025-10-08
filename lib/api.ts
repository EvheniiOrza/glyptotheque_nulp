import supabase from '../src/utils/supabaseClient';

export async function getAllSculptures() {
    const { data, error } = await supabase.from('sculptures').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
}

export async function getSculptureById(id: string) {
    const { data, error } = await supabase.from('sculptures').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
