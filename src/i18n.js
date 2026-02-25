import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const language = localStorage.getItem('language') || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    lng: language,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

// Set the document language and direction on initialization
document.documentElement.lang = language;
document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

export default i18n;
