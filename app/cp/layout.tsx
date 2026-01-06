export default function CpLayout({
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
                {children}
            </body>
        </html>
    );
}
