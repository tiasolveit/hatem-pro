'use server';
import { createAdminClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function verifyAdminKey(key: string) {
    const adminKey = process.env.ADMIN_SECRET_KEY;

    if (key === adminKey) {
        const supabase = await createAdminClient();

        // Get or create a user for admin (optional)
        const { data: { user } } = await supabase.auth.getUser();

        let userId = user?.id;
        if (!userId) {
            // Create a placeholder user or use a default admin user ID
            // For simplicity, we'll use a fixed UUID or skip user reference
            userId = 'd3a8a86a-4320-4fac-9fc8-cf723a121610';
        }

        const token = `admin-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

        // Insert session
        const { error } = await supabase
            .from('admin_sessions')
            .insert({
                user_id: userId,
                token,
                expires_at: expiresAt.toISOString()
            });

        if (error) {
            console.error('Session insert error:', error);
            return { success: false };
        }

        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: expiresAt
        });

        return { success: true };
    }
    return { success: false };
}