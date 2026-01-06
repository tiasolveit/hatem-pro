'use server';

import { createAdminClient } from '@/utils/supabase/server';

export async function updateOrderStatus(orderId: string, status: string) {
    const supabase = await createAdminClient();

    const { error } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', orderId);

    if (error) throw error;
    return { success: true };
}