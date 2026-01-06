import { createAdminClient } from '@/utils/supabase/server';
import Link from 'next/link';
import PortfolioTable from './PortfolioTable';

export default async function PortfolioPage() {
    const supabase = await createAdminClient();

    const { data: projects } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Portfolio Projects</h1>
                <div className="flex gap-4">
                    <Link
                        href="/cp/dashboard/portfolio/new"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        + Add Project
                    </Link>
                    <Link
                        href="/cp/dashboard"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        ← Back to Dashboard
                    </Link>
                </div>
            </div>

            <PortfolioTable projects={projects || []} />
        </div>
    );
}