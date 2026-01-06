"use client"
import PortfolioGrid from '@/components/PortfolioGrid'
import { useTranslations } from '@/hooks/useTranslations'
import { Filter } from 'lucide-react'
import { useState } from 'react'

export default function PortfolioPage() {
    const t = useTranslations()
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)

    // Debug: log when filters change
    console.log('Filters:', { selectedCategory, selectedMaterial })

    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="heading-1 mb-4">{t.portfolio.title}</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        {t.portfolio.description}
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold flex items-center">
                            <Filter className="h-5 w-5 mr-2" />
                            {t.portfolio.filter}
                        </h2>
                        <div className="text-sm text-neutral-400">
                            <span className="text-white font-semibold">12</span> {t.portfolio.projects}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {t.portfolio.categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full border transition-colors ${selectedCategory === cat ? 'border-blue-500 text-blue-400 bg-blue-900/20' : 'border-neutral-700 hover:border-blue-500 hover:text-blue-400'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {t.portfolio.materials.map((mat) => (
                            <button
                                key={mat}
                                onClick={() => setSelectedMaterial(mat === selectedMaterial ? null : mat)}
                                className={`px-4 py-2 rounded-full border transition-colors ${selectedMaterial === mat ? 'border-green-500 text-green-400 bg-green-900/20' : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'}`}
                            >
                                {mat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pass filter states to PortfolioGrid */}
                <PortfolioGrid
                    t={t.portfolio}
                    selectedCategory={selectedCategory}
                    selectedMaterial={selectedMaterial}
                />
            </div>
        </div>
    )
}