import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from 'locales/en.json';
import { isDev } from './env';

i18n.use(LanguageDetector).init({
  debug: isDev,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
  resources: { en },
});

export default i18n;
