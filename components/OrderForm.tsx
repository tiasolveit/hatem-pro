"use client"
import { supabase } from '@/lib/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Upload } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Schema for order form
const orderSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(5, "Phone is required"),
    company: z.string().optional(),
    buildingType: z.string().min(1, "Please select building type"),
    timeline: z.string().min(1, "Please select timeline"),
    projectDescription: z.string().min(10, "Please describe your project"),
    package: z.string().min(1, "Please select a package"),
    specialRequirements: z.string().optional(),
})

type OrderFormData = z.infer<typeof orderSchema>

const OrderForm = ({
    t,
    lang = 'en'
}: {
    t: {
        steps: Array<{ id: number, name: string }>
        projectInfo: string
        buildingType: string
        buildingTypes: string[]
        timeline: string
        timelines: string[]
        back: string
        continue: string
        customPackage: string
        submitOrder: string
        stats: {
            materialSaved: string
            cncReady: string
            avgDelivery: string
        }
        packages: Array<{
            name: string
            price: string
            features: string[]
        }>
        packageSelection: string
        selectPackage: string
        materials: {
            title: string
            label: string
            maxSelection: string
            maxError: string
            requiredError: string
            materialsList: string[]
            requirements: string
            requirementsPlaceholder: string
            upload: string
            uploadDescription: string
            uploadNote: string
            chooseFiles: string
            selectedFiles: string
            maxFilesError: string
        }
        contact: {
            title: string
            fullName: string
            email: string
            phone: string
            company: string
            projectDescription: string
            projectPlaceholder: string
            successTitle: string
            successMessage: string
            anotherRequest: string
        }
    }
    lang?: string
}) => {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
    const [materialError, setMaterialError] = useState<string>('')
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

    const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            buildingType: t.buildingTypes[0],
            timeline: t.timelines[0],
            package: '',
        }
    })

    const handleMaterialSelect = (material: string) => {
        setMaterialError('')
        if (selectedMaterials.includes(material)) {
            setSelectedMaterials(selectedMaterials.filter(m => m !== material))
        } else {
            if (selectedMaterials.length >= 3) {
                setMaterialError(t.materials.maxError)
                return
            }
            setSelectedMaterials([...selectedMaterials, material])
        }
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        if (files.length + uploadedFiles.length > 5) {
            alert(t.materials.maxFilesError)
            return
        }
        setUploadedFiles([...uploadedFiles, ...files])
    }

    const removeFile = (index: number) => {
        setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
    }

    const onSubmit = async (data: OrderFormData) => {
        // Validate materials on step 2
        if (step === 2 && selectedMaterials.length === 0) {
            setMaterialError(t.materials.requiredError)
            return
        }

        setIsSubmitting(true)
        setError(null)

        try {
            const { error } = await supabase.from('orders').insert({
                name: data.name,
                email: data.email,
                phone: data.phone,
                company: data.company,
                building_type: data.buildingType,
                timeline: data.timeline,
                project_description: data.projectDescription,
                special_requirements: data.specialRequirements,
                selected_materials: selectedMaterials.join(', '),
                package: data.package,
                status: 'pending',
                language: lang
            })

            if (error) throw error

            setSubmitSuccess(true)
            setStep(4)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Submission failed')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Handle step navigation
    const handleNextStep = () => {
        if (step === 2 && selectedMaterials.length === 0) {
            setMaterialError(t.materials.requiredError)
            return
        }
        setStep(step + 1)
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Steps */}
            <div className="mb-12">
                <div className="flex justify-between">
                    {t.steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step >= s.id ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                                {s.id}
                            </div>
                            <span className="mt-2 text-sm">{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                {step === 1 && (
                    <div>
                        <h3 className="heading-3 mb-6">{t.projectInfo}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.buildingType}</label>
                                <select
                                    {...register('buildingType')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                >
                                    {t.buildingTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.buildingType && <p className="text-red-400 text-sm mt-1">{errors.buildingType.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.timeline}</label>
                                <select
                                    {...register('timeline')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                >
                                    {t.timelines.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                                {errors.timeline && <p className="text-red-400 text-sm mt-1">{errors.timeline.message}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h3 className="heading-3 mb-6">{t.materials.title}</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.materials.label}</label>
                                <div className="flex flex-wrap gap-3">
                                    {t.materials.materialsList.map((mat) => (
                                        <button
                                            key={mat}
                                            type="button"
                                            onClick={() => handleMaterialSelect(mat)}
                                            className={`px-4 py-2 rounded-lg border transition-colors ${selectedMaterials.includes(mat) ? 'border-blue-500 bg-blue-900/30 text-blue-300' : 'border-neutral-700 hover:border-blue-500 hover:text-blue-400'}`}
                                        >
                                            {mat}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-sm text-neutral-500 mt-2">{t.materials.maxSelection}</p>
                                {materialError && <p className="text-red-400 text-sm mt-2">{materialError}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.materials.requirements}</label>
                                <textarea
                                    {...register('specialRequirements')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                    placeholder={t.materials.requirementsPlaceholder}
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.materials.upload}</label>
                                <div className="border-2 border-dashed border-neutral-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                                    <Upload className="h-10 w-10 mx-auto mb-4 text-neutral-500" />
                                    <p className="text-neutral-400 mb-2">{t.materials.uploadDescription}</p>
                                    <p className="text-sm text-neutral-500">{t.materials.uploadNote}</p>
                                    <input
                                        type="file"
                                        accept="image/*,.pdf"
                                        multiple
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        id="file-upload"
                                    />
                                    <label htmlFor="file-upload" className="inline-block mt-4 px-6 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 cursor-pointer">
                                        {t.materials.chooseFiles}
                                    </label>
                                </div>
                                {uploadedFiles.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-sm text-neutral-400 mb-2">{t.materials.selectedFiles}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {uploadedFiles.map((file, index) => (
                                                <div key={index} className="flex items-center bg-neutral-800 rounded px-3 py-1">
                                                    <span className="text-sm">{file.name}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFile(index)}
                                                        className="ml-2 text-red-400 hover:text-red-300"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="heading-3 mb-6">{t.contact.title}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.fullName}</label>
                                <input
                                    {...register('name')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
                                <input
                                    type="email"
                                    {...register('email')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.phone}</label>
                                <input
                                    {...register('phone')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                />
                                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t.contact.company}</label>
                                <input
                                    {...register('company')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">{t.contact.projectDescription}</label>
                                <textarea
                                    rows={4}
                                    {...register('projectDescription')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                    placeholder={t.contact.projectPlaceholder}
                                />
                                {errors.projectDescription && <p className="text-red-400 text-sm mt-1">{errors.projectDescription.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t.packageSelection}
                                </label>
                                <select
                                    {...register('package')}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3"
                                >
                                    <option value="" disabled>{t.selectPackage}</option>
                                    {t.packages.map((pkg) => (
                                        <option key={pkg.name} value={pkg.name}>
                                            {pkg.name} - {pkg.price}
                                        </option>
                                    ))}
                                    <option value="Custom">
                                        <option value="Custom">
                                            {t.customPackage}
                                        </option>
                                    </option>
                                </select>
                                {errors.package && <p className="text-red-400 text-sm mt-1">{errors.package.message}</p>}
                            </div>
                        </div>

                        {error && <p className="text-red-400 mt-4">{error}</p>}

                        <div className="mt-8 flex justify-between">
                            <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-neutral-700 rounded-lg">
                                {t.back}
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="ml-auto px-8 py-3 bg-blue-600 rounded-lg font-semibold disabled:opacity-50"
                            >
                                {isSubmitting ? (lang === 'ar' ? 'جاري الإرسال...' : 'Submitting...') : t.submitOrder}
                            </button>
                        </div>
                    </form>
                )}

                {step === 4 && submitSuccess && (
                    <div className="text-center py-8">
                        <div className="h-16 w-16 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                            <Send className="h-8 w-8 text-green-400" />
                        </div>
                        <h3 className="heading-3 mb-4">{t.contact.successTitle}</h3>
                        <p className="text-neutral-400 mb-6">
                            {t.contact.successMessage}
                        </p>
                        <button
                            onClick={() => {
                                setStep(1)
                                setSubmitSuccess(false)
                                setSelectedMaterials([])
                                setUploadedFiles([])
                            }}
                            className="px-8 py-3 bg-blue-600 rounded-lg font-semibold"
                        >
                            {t.contact.anotherRequest}
                        </button>
                    </div>
                )}

                {/* Navigation for steps 1 & 2 */}
                {(step === 1 || step === 2) && (
                    <div className="mt-8 flex justify-between">
                        {step > 1 && (
                            <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-neutral-700 rounded-lg">
                                {t.back}
                            </button>
                        )}
                        <button
                            onClick={handleNextStep}
                            className="ml-auto px-8 py-3 bg-blue-600 rounded-lg font-semibold"
                        >
                            {t.continue}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrderForm