'use client';

import { Trash2 } from 'lucide-react';
import { deleteProject } from './actions';

type Project = {
    id: string;
    title: string;
    category: string;
    material: string;
    created_at: string;
};

export default function PortfolioTable({ projects }: { projects: Project[] }) {
    const handleDelete = async (id: string) => {
        if (confirm('Delete this project? This cannot be undone.')) {
            try {
                await deleteProject(id);
                window.location.reload();
            } catch (error) {
                console.error('Delete failed:', error);
                alert('Delete failed');
            }
        }
    };

    return (
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium">{project.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                    {project.category}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{project.material}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {new Date(project.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center gap-1"
                                >
                                    <Trash2 className="h-4 w-4" /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}