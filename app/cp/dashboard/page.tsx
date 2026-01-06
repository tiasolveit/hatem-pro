import { createAdminClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Dashboard() {
    const supabase = await createAdminClient();

    const { data: orders } = await supabase
        .from('orders')
        .select('*');

    const total = orders?.length || 0;
    const pending = orders?.filter(o => o.status === 'pending').length || 0;
    const completed = orders?.filter(o => o.status === 'delivered' || o.status === 'ready').length || 0;
    const recent = orders?.slice(0, 5) || [];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
                    <p className="text-3xl font-bold text-indigo-600">{total}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-2">Pending</h2>
                    <p className="text-3xl font-bold text-yellow-600">{pending}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-2">Completed</h2>
                    <p className="text-3xl font-bold text-green-600">{completed}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
                {recent.length === 0 ? (
                    <p className="text-gray-500">No orders yet.</p>
                ) : (
                    <div className="space-y-3">
                        {recent.map((order) => (
                            <div key={order.id} className="flex justify-between items-center py-3 border-b">
                                <div>
                                    <p className="font-medium">{order.name || 'Unnamed'}</p>
                                    <p className="text-sm text-gray-600">{order.email}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`px-2 py-1 text-xs rounded-full ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                                'bg-gray-100 text-gray-800'
                                        }`}>
                                        {order.status}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {new Date(order.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <Link
                            href="/cp/dashboard/orders"
                            className="block text-center text-blue-600 hover:text-blue-800 mt-4"
                        >
                            View all orders →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}