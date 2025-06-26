import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import enCommon from '../locales/en/common.json'
import arCommon from '../locales/ar/common.json'

const resources = {
    en: {
        common: enCommon,
    },
    ar: {
        common: arCommon,
    },
}

// Initialize i18n instance immediately
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        defaultNS: 'common',
        ns: ['common'], debug: process.env.NODE_ENV === 'development',
        react: {
            useSuspense: false,
        },
        load: 'languageOnly', // Load only language without region
        cleanCode: true, // Clean language codes
        keySeparator: '.', // Ensure key separator is explicit
        nsSeparator: ':',  // Namespace separator
    })

export default i18n
