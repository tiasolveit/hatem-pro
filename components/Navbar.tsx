"use client"
import { getTranslations } from '@/lib/translations'
import { Briefcase, Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ lng = 'en' }: { lng?: string }) => {
    const [isOpen, setIsOpen] = useState(false)
    const t = getTranslations(lng as 'en' | 'ar')

    const navItems = [
        { label: t.nav.portfolio, href: '/portfolio' },
        { label: t.nav.services, href: '/services' },
        { label: t.nav.process, href: '/process' },
        { label: t.nav.about, href: '/about' },
        { label: t.nav.contact, href: '/contact' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-lg">
            <div className="container-custom">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href={`/${lng}`} className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-cyan-500">
                            <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Hatem<span className="gradient-text">Pro</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={`/${lng}${item.href}`}
                                className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href={`/${lng}/order`}
                            className="group relative rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            <span className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>Get a Concept</span>
                            </span>
                        </Link>
                        {/* Add Language Switcher */}
                        <LanguageSwitcher currentLang={lng} />
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white md:hidden"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute left-0 right-0 top-20 border-t border-neutral-800 bg-neutral-900 p-4 md:hidden">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={`/${lng}${item.href}`}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href={`/${lng}/order`}
                                className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 text-center text-sm font-semibold text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a Concept
                            </Link>
                            {/* Mobile Language Switcher */}
                            <div className="pt-4 border-t border-neutral-800">
                                <LanguageSwitcher currentLang={lng} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar