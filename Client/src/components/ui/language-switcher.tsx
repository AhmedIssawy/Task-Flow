import React from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectCurrentLanguage, setLanguage } from '@/store/slices/languageSlice'
import { Button } from './button'

export const LanguageSwitcher: React.FC = () => {
    const dispatch = useAppDispatch()
    const currentLanguage = useAppSelector(selectCurrentLanguage)

    const handleToggle = () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en'
        dispatch(setLanguage(newLanguage))
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="flex items-center gap-2 min-w-[80px] bg-[#E5EDF5] dark:bg-[#21364A] border-none rounded-xl text-white"
            aria-label="Toggle language"
        >
            <span className="font-medium">
                {currentLanguage === 'en' ? 'عربي' : 'EN'}
            </span>    </Button>
    )
}

export default LanguageSwitcher


