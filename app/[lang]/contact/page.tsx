"use client"
import { useTranslations } from '@/hooks/useTranslations'
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
    const t = useTranslations()

    const socialLinks = [
        { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/hatempro', color: 'text-blue-400' },
        { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/hatempro', color: 'text-pink-400' },
        { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/hatempro', color: 'text-blue-500' },
        { icon: MessageSquare, label: 'WhatsApp', url: 'https://wa.me/213123456789', color: 'text-green-400' },
    ]

    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="heading-1 mb-4">{t.contact.title}</h1>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            {t.contact.description} Contact us directly or through our social channels.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="heading-2 mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-lg bg-blue-900/30 flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{t.contact.info.phone}</h3>
                                        <p className="text-neutral-400">+213 123 456 789</p>
                                        <p className="text-sm text-neutral-500">Mon-Fri, 9am-6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-lg bg-blue-900/30 flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{t.contact.info.email}</h3>
                                        <p className="text-neutral-400">contact@hatempro.com</p>
                                        <p className="text-sm text-neutral-500">Response within 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-lg bg-blue-900/30 flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{t.contact.info.location}</h3>
                                        <p className="text-neutral-400">Algeria, DZ</p>
                                        <p className="text-sm text-neutral-500">Remote services available worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h2 className="heading-2 mb-8">Connect With Us</h2>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900/50 transition-colors group"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <social.icon className={`h-8 w-8 mb-3 ${social.color}`} />
                                            <span className="font-medium">{social.label}</span>
                                            <span className="text-sm text-neutral-500 mt-1 group-hover:text-neutral-400">
                                                Follow / Message
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 p-6 border border-neutral-800 rounded-xl bg-neutral-900/30">
                                <h3 className="font-semibold mb-3">Quick Response</h3>
                                <p className="text-neutral-400 text-sm mb-4">
                                    For fastest response, message us on WhatsApp or call during business hours.
                                </p>
                                <Link
                                    href="https://wa.me/213123456789"
                                    target="_blank"
                                    className="inline-flex items-center text-green-400 hover:text-green-300"
                                >
                                    <MessageSquare className="h-5 w-5 mr-2" />
                                    Chat on WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}