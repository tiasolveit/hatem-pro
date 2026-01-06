import { getTranslations } from '@/lib/translations';
import PortfolioFilters from './PortfolioFilters';
import PortfolioGridWrapper from './PortfolioGridWrapper';

export default async function PortfolioPage({
    params,
    searchParams
}: {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ category?: string; material?: string }>;
}) {
    const { lang } = await params;
    const { category = 'All', material = null } = await searchParams;
    const t = getTranslations(lang as 'en' | 'ar');

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
                <PortfolioFilters
                    t={t.portfolio}
                    currentCategory={category}
                    currentMaterial={material}
                />

                {/* Grid */}
                <PortfolioGridWrapper
                    t={t.portfolio}
                    selectedCategory={category}
                    selectedMaterial={material}
                    lang={lang}
                />
            </div>
        </div>
    );
}