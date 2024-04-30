import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="w-full mt-10">
      <nav className="flex flex-row xl:py-4">
        <ul className="flex w-auto justify-evenly uppercase">
          <li className="mr-4 li-border-half">{t("about")}</li>
          <li className="mx-4 li-border-half">{t("skills")}</li>
          <li className="mx-4 li-border-half">{t("works")}</li>
          <li className="mx-4 li-border-half">{t("education")}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
