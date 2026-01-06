'use client';

import { updateOrderStatus } from './actions';

export default function StatusSelect({ orderId, currentStatus }: { orderId: string, currentStatus: string }) {
    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        await updateOrderStatus(orderId, e.target.value);
        // Optional: refresh or show success
    };

    return (
        <select
            defaultValue={currentStatus}
            onChange={handleChange}
            className="border rounded-lg px-3 py-1 text-sm"
        >
            <option value="pending">Pending</option>
            <option value="in_design">In Design</option>
            <option value="ready">Ready</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
        </select>
    );
}