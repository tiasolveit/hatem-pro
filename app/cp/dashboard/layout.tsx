import Sidebar from './Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body className="bg-gray-50">
                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}