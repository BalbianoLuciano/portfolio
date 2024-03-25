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
      <nav className="flex flex-row py-4">
        <ul className="flex w-auto justify-evenly uppercase">
          <li className="mr-4 li-border-half">{t("about")}</li>
          <li className="mx-4 li-border-half">{t("skills")}</li>
          <li className="mx-4 li-border-half">{t("works")}</li>
          <li className="mx-4 li-border-half">{t("education")}</li>
        </ul>
        {/* Botones para cambiar el idioma */}
        <button className="px-1" onClick={() => changeLanguage("en")}>EN</button>
        <span>/</span>
        <button className="px-1" onClick={() => changeLanguage("es")}>ES</button>
      </nav>
    </header>
  );
};

export default Nav;
