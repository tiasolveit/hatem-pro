'use server';

import { createAdminClient } from '@/utils/supabase/server';
import { sendTelegramMessage } from '@/utils/telegram';

export async function submitOrder(orderData: any) {
    const supabase = await createAdminClient();

    // Insert order
    const { data, error } = await supabase
        .from('orders')
        .insert({
            name: orderData.name,
            email: orderData.email,
            phone: orderData.phone,
            company: orderData.company,
            building_type: orderData.buildingType,
            timeline: orderData.timeline,
            project_description: orderData.projectDescription,
            special_requirements: orderData.specialRequirements,
            selected_materials: orderData.selectedMaterials,
            package: orderData.package,
            status: 'pending',
            language: orderData.lang
        })
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    // Send Telegram notification
    await sendTelegramMessage(`
🏗 <b>New HatemPro Order</b>
📦 Package: ${orderData.package}
👤 Client: ${orderData.name}
📧 Email: ${orderData.email}
📞 Phone: ${orderData.phone}
🏢 Company: ${orderData.company || 'N/A'}
🆔 Order ID: ${data.id.slice(0, 8)}
`);

    return { success: true, orderId: data.id };
}