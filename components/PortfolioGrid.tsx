"use client"
import { Box, Expand, Ruler, Scissors, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
type Project = {
    id: string;
    title: string;
    category: string;
    material: string;
    area: string;
    wasteReduced: string;
    thumbnail_url?: string;
    video_url?: string;
};

const PortfolioGrid = ({
    t,
    projects,
    selectedCategory = 'All',
    selectedMaterial = null,
    lang
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
    projects: Project[];
    selectedCategory?: string;
    selectedMaterial?: string | null;
    lang: string;
}) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Filter projects
    const filteredProjects = projects.filter(project => {
        if (selectedCategory !== 'All' && project.category !== selectedCategory) return false
        if (selectedMaterial && project.material !== selectedMaterial) return false
        return true
    })

    return (
        <div>
            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b border-gray-800">
                            <h3 className="text-xl font-semibold">Video Walkthrough</h3>
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="p-2 hover:bg-gray-800 rounded"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="p-4">
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-auto max-h-[70vh] rounded"
                            />
                        </div>
                    </div>
                </div>
            )}

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
                        {/* Thumbnail */}
                        <div className="h-48 relative overflow-hidden bg-gray-900">
                            {project.thumbnail_url ? (
                                <img
                                    src={project.thumbnail_url}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="h-full bg-linear-to-br from-gray-900/30 to-gray-800/30 flex items-center justify-center">
                                    <div className="h-32 w-32 border-2 border-white/20 rounded-lg rotate-45"></div>
                                    <div className="absolute h-32 w-32 border-2 border-white/10 rounded-lg -rotate-45"></div>
                                </div>
                            )}
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
                                <button
                                    onClick={() => project.video_url && setSelectedVideo(project.video_url)}
                                    disabled={!project.video_url}
                                    className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ▶ Play Video
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


