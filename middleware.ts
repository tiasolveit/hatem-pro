import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createClient } from './utils/supabase/server';

export async function middleware(request: NextRequest) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const adminToken = request.cookies.get('admin_token')?.value;

    // In middleware.ts
    if (request.nextUrl.pathname.startsWith('/cp')) {
        if (request.nextUrl.pathname === '/cp') {
            return NextResponse.next();
        }

        const adminToken = request.cookies.get('admin_token')?.value;

        if (!adminToken) {
            return NextResponse.redirect(new URL('/cp', request.url));
        }

        const supabase = await createClient();
        const { data: session } = await supabase
            .from('admin_sessions')
            .select('*')
            .eq('token', adminToken)
            .gt('expires_at', new Date().toISOString())
            .single();

        if (!session) {
            return NextResponse.redirect(new URL('/cp', request.url));
        }

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cp/:path*']
};