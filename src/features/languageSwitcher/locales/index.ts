import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './langs/en.json';
import translationRU from './langs/ru.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

await i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = async (lng: "ru" | "en" | string) => {
  await i18n.changeLanguage(lng);
};

export default i18n;