"use client"
import { useTranslations } from '@/hooks/useTranslations'
import { Box, Cpu, FileCode, Scan } from 'lucide-react'

export default function ServicesPage() {
    const t = useTranslations()

    // Map icons to service items
    const icons = [Cpu, FileCode, Scan, Box]

    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="heading-1 mb-4">{t.services.title}</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        {t.services.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.services.items.map((service, index) => {
                        const Icon = icons[index]
                        return (
                            <div key={index} className="border border-neutral-800 rounded-2xl p-6 hover:bg-neutral-900/50 transition-colors">
                                <div className="h-12 w-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-neutral-400 text-sm">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}