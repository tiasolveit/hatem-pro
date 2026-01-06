'use client';
import {
    FileText,
    Home,
    LogOut,
    Package,
    Settings,
    Users
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/cp/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
        { href: '/cp/dashboard/orders', label: 'Orders', icon: <Package className="w-5 h-5" /> }, // ← Changed
        { href: '/cp/dashboard/portfolio', label: 'Portfolio', icon: <FileText className="w-5 h-5" /> },
        { href: '/cp/clients', label: 'Clients', icon: <Users className="w-5 h-5" /> },
        { href: '/cp/dashboard/contact', label: 'Contact', icon: <Settings className="w-5 h-5" /> },
    ];

    const handleLogout = () => {
        // Clear cookie and redirect
        document.cookie = 'admin_token=; max-age=0; path=/';
        window.location.href = '/cp';
    };

    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
            <h2 className="text-2xl font-bold mb-8">HatemPro Admin</h2>

            <nav className="space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${pathname === item.href
                            ? 'bg-indigo-600 text-white'
                            : 'hover:bg-gray-800 text-gray-300'
                            }`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300 mt-8 w-full"
            >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
            </button>
        </aside>
    );
}