import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import bn_lang from './translation/bn/translation.json';
import en_lang from './translation/en/translation.json';
import ch_lang from './translation/ch/translation.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'en',
    resources: {
      en: {
        translation: en_lang,
      },
      bn: {
        translation: bn_lang,
      },
      ch: {
        translation: ch_lang,
      },
    },
  });

export default i18n;
