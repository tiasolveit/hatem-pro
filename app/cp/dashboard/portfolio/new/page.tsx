'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createProject } from './actions';

export default function NewProjectPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        setError('');

        try {
            await createProject(formData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Submission failed');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Add New Project</h1>
                <Link
                    href="/cp/dashboard/portfolio"
                    className="text-sm text-gray-600 hover:text-gray-900"
                >
                    ← Back to Portfolio
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
                <form action={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Project Title *</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full border rounded-lg px-4 py-2"
                            placeholder="Luxury Retail Facade"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            name="description"
                            rows={3}
                            className="w-full border rounded-lg px-4 py-2"
                            placeholder="Describe the project..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Category *</label>
                            <select name="category" required className="w-full border rounded-lg px-4 py-2">
                                <option value="">Select category</option>
                                <option value="Retail">Retail</option>
                                <option value="Office">Office</option>
                                <option value="Residential">Residential</option>
                                <option value="Hospitality">Hospitality</option>
                                <option value="Industrial">Industrial</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Material *</label>
                            <input
                                type="text"
                                name="material"
                                required
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Aluminum Composite"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Area</label>
                            <input
                                type="text"
                                name="area"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="85 m²"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Waste Reduced</label>
                            <input
                                type="text"
                                name="waste_reduced"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="22%"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Thumbnail Image *</label>
                        <input
                            type="file"
                            name="thumbnail"
                            accept="image/*"
                            required
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <p className="text-xs text-gray-500 mt-1">Preview image for the project card (recommended: 800x600px)</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Video Walkthrough (MP4, max 10s) *</label>
                        <input
                            type="file"
                            name="video"
                            accept="video/mp4"
                            required
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <p className="text-xs text-gray-500 mt-1">10-second MP4 video showcase</p>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Creating...' : 'Create Project'}
                        </button>
                        <Link
                            href="/cp/dashboard/portfolio"
                            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}