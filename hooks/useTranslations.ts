"use client"
import { getTranslations } from '@/lib/translations'
import { useParams } from 'next/navigation'

export function useTranslations() {
    const params = useParams()
    const lang = params.lang as 'en' | 'ar'
    return getTranslations(lang)
}