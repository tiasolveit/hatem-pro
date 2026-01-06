"use client"
import OrderForm from '@/components/OrderForm'
import { useTranslations } from '@/hooks/useTranslations'
import { Calculator, Check, FileText, Send, Sparkles } from 'lucide-react'

export default function OrderPage() {
    const t = useTranslations()

    const pricingPackages = t.pricing.packages.map((pkg, index) => ({
        ...pkg,
        color: index === 0 ? "border-neutral-700" : index === 1 ? "border-blue-500" : "border-amber-500",
        buttonColor: index === 0 ? "bg-neutral-700 hover:bg-neutral-600" : index === 1 ? "bg-blue-600 hover:bg-blue-700" : "bg-amber-600 hover:bg-amber-700",
        popular: index === 1
    }))

    return (
        <div className="section-padding">
            <div className="container-custom">
                <h1 className="heading-1 text-center mb-4">{t.order.title}</h1>
                <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
                    {t.order.description}
                </p>
                <OrderForm t={{ ...t.order, packages: t.pricing.packages }} />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-12 mb-16">
                    <div className="text-center p-4 border border-neutral-800 rounded-lg">
                        <Calculator className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                        <div className="text-2xl font-bold">30%</div>
                        <div className="text-sm text-neutral-400">{t.order.stats.materialSaved}</div>
                    </div>
                    <div className="text-center p-4 border border-neutral-800 rounded-lg">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-green-400" />
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-sm text-neutral-400">{t.order.stats.cncReady}</div>
                    </div>
                    <div className="text-center p-4 border border-neutral-800 rounded-lg">
                        <Send className="h-8 w-8 mx-auto mb-2 text-cyan-400" />
                        <div className="text-2xl font-bold">7 Days</div>
                        <div className="text-sm text-neutral-400">{t.order.stats.avgDelivery}</div>
                    </div>
                </div>

                {/* Pricing Packages */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 mb-4">{t.pricing.title}</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            {t.pricing.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative border rounded-2xl p-8 ${pkg.color} bg-neutral-900/30 ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <div className="flex items-center gap-1 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                                            <Sparkles className="h-3 w-3" />
                                            {t.pricing.popular}
                                        </div>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{pkg.price}</span>
                                    <span className="text-neutral-400 ml-2">/project</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 shrink-0" />
                                            <span className="text-neutral-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 text-neutral-400 text-sm">
                        <p>Need a custom package? <a href="#contact" className="text-blue-400 hover:text-blue-300">Contact us</a> for a tailored quote.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}