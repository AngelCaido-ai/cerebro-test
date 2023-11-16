import React from 'react';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../locales";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex gap-2">
      <label htmlFor="language">{t("select-language")}</label>
      <select id="language" onChange={handleChangeLanguage}>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
