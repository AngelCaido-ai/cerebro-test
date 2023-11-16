import {SearchInput} from "../../../../shared/ui";
import {Balance} from "../../../../features/balance/ui";
import {Dispatch} from "react";
import {LanguageSwitcher} from "../../../../features/languageSwitcher/ui";
import {useTranslation} from "react-i18next";

interface Props {
  setTitle: Dispatch<string>;
}

export const Header = ({setTitle}: Props) => {

  const { t } = useTranslation();

  return (
    <div className="pb-2">
      <LanguageSwitcher/>
      <div className="flex justify-center items-center">
        <SearchInput onChange={setTitle} placeholder={t("enter-coin-name")}/>
        <Balance/>
      </div>
    </div>
  );
};
