// Landing page responsiveness validation
'use client'
import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'

export const ResponsiveValidator = () => {
    const { isRTL, locale } = useLanguage()

    return (
        <div className={`fixed bottom-4 ${isRTL ? 'left-4' : 'right-4'} z-50 bg-black/80 text-white p-2 rounded text-xs`}>
            <div>Locale: {locale}</div>
            <div>RTL: {isRTL ? 'Yes' : 'No'}</div>
            <div className="block sm:hidden">Mobile</div>
            <div className="hidden sm:block md:hidden">Tablet</div>
            <div className="hidden md:block lg:hidden">Desktop</div>
            <div className="hidden lg:block">Large</div>
        </div>
    )
}
