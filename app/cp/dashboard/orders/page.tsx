import { createAdminClient } from '@/utils/supabase/server';
import Link from 'next/link';
import StatusSelect from './StatusSelect';

export default async function OrdersPage() {
    const supabase = await createAdminClient();

    const { data: orders } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Orders</h1>
                <Link href="/cp/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                    ← Back to Dashboard
                </Link>
            </div>

            {!orders?.length ? (
                <p className="text-gray-500">No orders yet.</p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white p-6 rounded-xl shadow border">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-lg">{order.name || 'Unnamed'}</h3>
                                    <p className="text-gray-600 text-sm">{order.email}</p>
                                    <p className="text-sm mt-1">Package: <span className="font-medium">{order.package}</span></p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {new Date(order.created_at).toLocaleDateString()}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <StatusSelect orderId={order.id} currentStatus={order.status} />

                                    <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                        order.status === 'ready' ? 'bg-blue-100 text-blue-800' :
                                            order.status === 'in_design' ? 'bg-yellow-100 text-yellow-800' :
                                                order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                    'bg-gray-100 text-gray-800'
                                        }`}>
                                        {order.status.replace('_', ' ')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}