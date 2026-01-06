"use client"
import { Box, Expand, Ruler, Scissors } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const projects = [
    {
        id: 1,
        title: 'Luxury Retail Facade',
        category: 'Retail',
        material: 'Aluminum Composite',
        area: '85 m²',
        wasteReduced: '22%',
        imageColor: 'bg-linear-to-br from-blue-900/30 to-cyan-900/30',
    },
    {
        id: 2,
        title: 'Corporate Office Entrance',
        category: 'Office',
        material: 'Stainless Steel',
        area: '120 m²',
        wasteReduced: '18%',
        imageColor: 'bg-linear-to-br from-neutral-900/30 to-blue-900/30',
    },
    {
        id: 3,
        title: 'Boutique Hotel Front',
        category: 'Hospitality',
        material: 'Perforated Metal',
        area: '65 m²',
        wasteReduced: '30%',
        imageColor: 'bg-linear-to-br from-cyan-900/30 to-blue-900/30',
    },
    {
        id: 4,
        title: 'Modern Apartment Building',
        category: 'Residential',
        material: 'Glass & Aluminum',
        area: '200 m²',
        wasteReduced: '15%',
        imageColor: 'bg-linear-to-br from-violet-900/30 to-blue-900/30',
    },
    {
        id: 5,
        title: 'Shopping Mall Entrance',
        category: 'Retail',
        material: 'Curved Steel',
        area: '150 m²',
        wasteReduced: '25%',
        imageColor: 'bg-linear-to-br from-emerald-900/30 to-cyan-900/30',
    },
    {
        id: 6,
        title: 'Tech Company HQ',
        category: 'Office',
        material: 'Corten Steel',
        area: '180 m²',
        wasteReduced: '20%',
        imageColor: 'bg-linear-to-br from-orange-900/30 to-rose-900/30',
    },
]

const PortfolioGrid = ({
    t,
    selectedCategory = 'All',
    selectedMaterial = null
}: {
    t: {
        viewDetails: string
        view3D: string
        stats: {
            area: string
            wasteSaved: string
            cncReady: string
        }
    }
    selectedCategory?: string
    selectedMaterial?: string | null
}) => {
    const params = useParams()
    const lang = params.lang as string

    // Filter projects
    const filteredProjects = projects.filter(project => {
        if (selectedCategory !== 'All' && project.category !== selectedCategory) return false
        if (selectedMaterial && project.material !== selectedMaterial) return false
        return true
    })

    return (
        <div>
            {/* Results count */}
            <div className="mb-6 text-neutral-400">
                Showing {filteredProjects.length} of {projects.length} projects
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                        {/* Image/Preview */}
                        <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-32 w-32 border-2 border-white/20 rounded-lg rotate-45"></div>
                                <div className="absolute h-32 w-32 border-2 border-white/10 rounded-lg -rotate-45"></div>
                            </div>
                            <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80">
                                <Expand className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                                        <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300">
                                            {project.category}
                                        </span>
                                        <span>{project.material}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-800">
                                <div className="text-center">
                                    <Ruler className="h-5 w-5 mx-auto mb-2 text-blue-400" />
                                    <div className="font-semibold">{project.area}</div>
                                    <div className="text-xs text-neutral-400">{t.stats.area}</div>
                                </div>
                                <div className="text-center">
                                    <Scissors className="h-5 w-5 mx-auto mb-2 text-green-400" />
                                    <div className="font-semibold">{project.wasteReduced}</div>
                                    <div className="text-xs text-neutral-400">{t.stats.wasteSaved}</div>
                                </div>
                                <div className="text-center">
                                    <Box className="h-5 w-5 mx-auto mb-2 text-cyan-400" />
                                    <div className="font-semibold">CNC</div>
                                    <div className="text-xs text-neutral-400">{t.stats.cncReady}</div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-6 flex gap-3">
                                <Link
                                    href={`/${lang}/portfolio/${project.id}`}
                                    className="flex-1 text-center py-2.5 rounded-lg border border-neutral-700 hover:border-blue-500 hover:text-blue-400 transition-colors"
                                >
                                    {t.viewDetails}
                                </Link>
                                <button className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                                    {t.view3D}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-12 border border-neutral-800 rounded-2xl">
                    <p className="text-neutral-400 mb-4">No projects found matching your filters.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    )
}

export default PortfolioGrid