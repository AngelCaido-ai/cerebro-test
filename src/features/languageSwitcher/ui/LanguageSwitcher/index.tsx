import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../locales";
import {ChangeEvent} from "react";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    await changeLanguage(selectedLanguage);
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
