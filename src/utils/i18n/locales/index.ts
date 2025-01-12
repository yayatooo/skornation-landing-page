import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLang from './en/en.json';
import khLang from './kh/kh.json';

// Function to extract namespaces dynamically
const extractNamespaces = (translations: Record<string, any>) => {
  return Object.keys(translations).reduce((acc, key) => {
    acc[key] = translations[key];
    return acc;
  }, {} as Record<string, any>);
};

const resources = {
  en: {
    ...extractNamespaces(enLang), // Dynamically load all namespaces for English
  },
  kh: {
    ...extractNamespaces(khLang), // Dynamically load all namespaces for Khmer
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    ns: Object.keys(enLang), // Dynamically set namespaces
    defaultNS: 'translation', // Default namespace
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;