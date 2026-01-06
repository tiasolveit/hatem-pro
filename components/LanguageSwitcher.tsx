"use client"
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = ({ currentLang }: { currentLang: string }) => {
    const router = useRouter()
    const pathname = usePathname()

    const switchLanguage = (lang: string) => {
        // Replace /en/... with /ar/... or vice versa
        const newPath = pathname.replace(/^\/(en|ar)/, `/${lang}`)
        router.push(newPath)
    }

    return (
        <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-neutral-400" />
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium ${currentLang === 'en' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'}`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('ar')}
                className={`px-3 py-1 rounded text-sm font-medium ${currentLang === 'ar' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'}`}
            >
                AR
            </button>
        </div>
    )
}

export default LanguageSwitcher