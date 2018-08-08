import i18n from 'i18next';
import i18nextReactNative from 'i18next-react-native-language-detector';
import en from 'locales/en.json';
import ch from 'locales/ch.json';
import { isDev } from './env';

i18n.use(i18nextReactNative).init({
  debug: isDev,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
  resources: { en, ch },
});

export default i18n;
