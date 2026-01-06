"use client"
import { useTranslations } from '@/hooks/useTranslations'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'; // Add this

const Hero = () => {
    const t = useTranslations()
    const params = useParams() // Get current language
    const lang = params.lang as string // Extract language code

    return (
        <section className="relative overflow-hidden section-padding">
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-transparent to-cyan-900/10" />

            <div className="container-custom relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6">
                            <span className="h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                            {t.hero.tagline}
                        </div>

                        <h1 className="heading-1 mb-6">
                            {t.hero.title}<span className="gradient-text">{t.hero.highlight}</span> {t.hero.subtitle}
                        </h1>

                        <p className="text-xl text-neutral-400 mb-8 max-w-2xl">
                            {t.hero.description}
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-3 mb-10">
                            {t.hero.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" />
                                    <span className="text-neutral-300">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={`/${lang}/order`} // Add language prefix
                                className="group inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-blue-500/25"
                            >
                                {t.nav.getConcept}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href={`/${lang}/portfolio`} // Add language prefix
                                className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-lg font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                            >
                                {t.nav.portfolio}
                            </Link>
                        </div>
                    </div>

                    {/* Right - 3D Viewer Placeholder */}
                    <div className="relative">
                        {/* Keep the same 3D viewer */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero