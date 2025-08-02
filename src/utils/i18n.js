// src/utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../assets/locales/en.json';
import jp from '../assets/locales/jp.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      jp: { translation: jp }
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;