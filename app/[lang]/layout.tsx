import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '../globals.css'

export default async function LangLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const isRTL = lang === 'ar'

    return (
        <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
            <body className={`bg-neutral-950 text-neutral-100 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                <div className="min-h-screen flex flex-col">
                    <Navbar lng={lang} />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}