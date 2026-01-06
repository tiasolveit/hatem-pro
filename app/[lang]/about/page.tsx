"use client"
import { useTranslations } from '@/hooks/useTranslations'
import { Award, Clock, Target, Users } from 'lucide-react'

export default function AboutPage() {
    const t = useTranslations()

    const stats = [
        { icon: Award, value: "50+" },
        { icon: Users, value: "30+" },
        { icon: Clock, value: "5+" },
        { icon: Target, value: "100%" },
    ]

    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="heading-1 mb-4">{t.about.title}</h1>
                    <p className="text-neutral-400 max-w-3xl mx-auto">
                        {t.about.description}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 border border-neutral-800 rounded-xl">
                            <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                            <div className="text-3xl font-bold mb-2">{stat.value}</div>
                            <div className="text-neutral-400">{t.about.stats[index].label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="heading-2 mb-6 text-center">{t.about.missionTitle}</h2>
                    <div className="space-y-4 text-neutral-300">
                        {t.about.missionTexts.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}