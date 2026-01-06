'use client';

import { useState } from 'react';
import { verifyAdminKey } from './actions';

export default function ControlPanelLogin() {
    const [key, setKey] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await verifyAdminKey(key);
        if (result.success) {
            // Redirect to dashboard
            window.location.href = '/cp/dashboard';
        } else {
            setError('Invalid access key');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Control Panel</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Access Key</label>
                        <input
                            type="password"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter secure key"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
}