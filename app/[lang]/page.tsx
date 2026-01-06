// app/page.tsx
"use client"

import { useTranslations } from '@/hooks/useTranslations'
import {
  ArrowRight,
  Box,
  CheckCircle,
  Clock,
  Cpu,
  FileOutput,
  Layers,
  Sparkles,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Home() {
  const t = useTranslations()
  const params = useParams()
  const lang = params.lang as string

  // Services for facade engineering
  const services = [
    {
      icon: Layers,
      title: "3D Design & Modeling",
      description: t.services.items[0].description,
      color: "from-blue-500 to-cyan-400",
      href: `/${lang}/services`
    },
    {
      icon: Cpu,
      title: "CNC Optimization",
      description: t.services.items[1].description,
      color: "from-purple-500 to-pink-400",
      href: `/${lang}/services`
    },
    {
      icon: Box,
      title: "Material Analysis",
      description: t.services.items[2].description,
      color: "from-green-500 to-emerald-400",
      href: `/${lang}/services`
    },
    {
      icon: FileOutput,
      title: "Production Drawings",
      description: t.services.items[3].description,
      color: "from-orange-500 to-red-400",
      href: `/${lang}/services`
    }
  ]

  // Process steps preview
  const processSteps = t.process.steps.slice(0, 3).map((step, index) => ({
    ...step,
    number: index + 1
  }))

  // Stats for facade engineering
  const stats = [
    {
      icon: TrendingUp,
      value: "30%",
      label: "Material Optimization",
      description: "Average waste reduction"
    },
    {
      icon: Clock,
      value: "24h",
      label: "Fast Response",
      description: "Initial concept delivery"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "CNC Ready",
      description: "Fabrication-compatible files"
    },
    {
      icon: Sparkles,
      value: "500+",
      label: "Projects",
      description: "Successfully delivered"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - Same as your existing */}
      <section className="relative overflow-hidden section-padding border-b border-neutral-800">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-transparent to-cyan-900/10" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6">
                <span className="h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                {t.hero.tagline}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t.hero.title}<span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{t.hero.highlight}</span> {t.hero.subtitle}
              </h1>

              <p className="text-xl text-neutral-400 mb-8 max-w-2xl">
                {t.hero.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-10">
                {t.hero.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" />
                    <span className="text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${lang}/order`}
                  className="group inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-blue-500/25"
                >
                  {t.nav.getConcept}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/${lang}/portfolio`}
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-lg font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  {t.nav.portfolio}
                </Link>
              </div>
            </div>

            {/* 3D Facade Visualization Placeholder */}
            <div className="relative h-125 rounded-2xl overflow-hidden bg-linear-to-br from-neutral-900 to-neutral-800 border border-neutral-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Layers className="h-8 w-8 text-blue-400" />
                  </div>
                  <p className="text-neutral-400">3D Facade Preview</p>
                  <p className="text-sm text-neutral-500 mt-1">Interactive visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-neutral-800/30 border border-neutral-700/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-500/10 to-cyan-500/10 mb-4">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-neutral-300">{stat.label}</div>
                <div className="text-xs text-neutral-500 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-neutral-400">{t.services.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-r ${service.color} mb-6`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-800 flex items-center text-blue-400 text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-neutral-900/30 section-padding border-y border-neutral-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.process.title}</h2>
            <p className="text-xl text-neutral-400">{t.process.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${lang}/process`}
              className="inline-flex items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 px-8 py-3 text-white font-medium hover:bg-blue-500/20 transition-colors"
            >
              View Full Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">{t.portfolio.title}</h2>
              <p className="text-xl text-neutral-400">{t.portfolio.description}</p>
            </div>
            <Link
              href={`/${lang}/portfolio`}
              className="inline-flex items-center mt-6 md:mt-0 text-blue-400 hover:text-blue-300 font-medium"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Project Categories Quick Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            {t.portfolio.categories.slice(0, 4).map((category, index) => (
              <Link
                key={index}
                href={`/${lang}/portfolio?category=${category.toLowerCase()}`}
                className="px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-colors text-sm font-medium"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-neutral-400">Facade Projects</div>
            </div>
            <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-bold text-white mb-2">30+</div>
              <div className="text-neutral-400">Material Types</div>
            </div>
            <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-neutral-400">CNC Ready Files</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-900/20 via-transparent to-cyan-900/20 section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
              Ready to Start
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Fabrication-Ready</span> 3D Design
            </h2>

            <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
              Submit your facade project details and receive CNC-ready 3D models with optimized material usage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/order`}
                className="group inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-blue-500/25"
              >
                {t.nav.getConcept}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-lg font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                {t.nav.contact}
              </Link>
            </div>

            <p className="text-sm text-neutral-500 mt-8">
              Average delivery: 3-5 days • Unlimited revisions • 100% CNC compatible
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}