'use server';

import { createAdminClient } from '@/utils/supabase/server';

export async function deleteProject(id: string) {
    const supabase = await createAdminClient();

    const { error } = await supabase
        .from('portfolio')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return { success: true };
}