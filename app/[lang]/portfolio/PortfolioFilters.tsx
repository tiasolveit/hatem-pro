'use client';

import { Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PortfolioFilters({
    t,
    currentCategory = 'All',
    currentMaterial = null
}: {
    t: any;
    currentCategory?: string;
    currentMaterial?: string | null;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get unique categories/materials from your data - you might need to pass these as props
    const categories = ['All', 'Retail', 'Office', 'Residential', 'Hospitality', 'Industrial'];
    const materials = ['Aluminum Composite', 'Stainless Steel', 'Perforated Metal', 'Glass & Aluminum', 'Curved Steel', 'Corten Steel'];

    const updateFilters = (category: string, material: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', category);
        if (material) {
            params.set('material', material);
        } else {
            params.delete('material');
        }
        router.push(`?${params.toString()}`);
    };

    const handleCategoryClick = (cat: string) => {
        updateFilters(cat, currentMaterial);
    };

    const handleMaterialClick = (mat: string) => {
        const newMat = currentMaterial === mat ? null : mat;
        updateFilters(currentCategory, newMat);
    };

    return (
        <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    {t.filter}
                </h2>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 mb-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-4 py-2 rounded-full border transition-colors ${currentCategory === cat ? 'border-blue-500 text-blue-400 bg-blue-900/20' : 'border-neutral-700 hover:border-blue-500 hover:text-blue-400'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Material filters */}
            <div className="flex flex-wrap gap-3">
                {materials.map((mat) => (
                    <button
                        key={mat}
                        onClick={() => handleMaterialClick(mat)}
                        className={`px-4 py-2 rounded-full border transition-colors ${currentMaterial === mat ? 'border-green-500 text-green-400 bg-green-900/20' : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'}`}
                    >
                        {mat}
                    </button>
                ))}
            </div>
        </div>
    );
}