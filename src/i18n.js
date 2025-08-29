import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import traducaoPTBR from './locales/traducao-ptbr.json'
import translationEN from './locales/translation-en.json'

const resources = {
  ptbr: { translation: traducaoPTBR },
  en: { translation: translationEN },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ptbr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
