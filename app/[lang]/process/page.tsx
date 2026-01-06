"use client"
import { useTranslations } from '@/hooks/useTranslations'
import { CheckCircle, MessageSquare, Package, Scan, Settings, Zap } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProcessPage() {
    const t = useTranslations()
    const params = useParams()
    const lang = params.lang as string

    // Map icons to steps
    const icons = [MessageSquare, Settings, Scan, Package, CheckCircle, Zap]

    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="heading-1 mb-4">{t.process.title}</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        {t.process.description}
                    </p>
                </div>

                {/* Process Steps */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.process.steps.map((step, index) => {
                            const Icon = icons[index]
                            return (
                                <div key={index} className="relative">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>

                                    {/* Card */}
                                    <div className="border border-neutral-800 rounded-2xl p-6 h-full bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
                                        <div className="h-12 w-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                                            <Icon className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                        <p className="text-neutral-400 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h2 className="heading-2 mb-6">{t.process.cta.title}</h2>
                    <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                        {t.process.cta.description}
                    </p>
                    <Link
                        href={`/${lang}/order`}
                        className="inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-blue-500/25"
                    >
                        {t.nav.getConcept}
                    </Link>
                </div>
            </div>
        </div>
    )
}