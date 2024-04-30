import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full mt-10">
      <nav className="flex flex-row xl:py-4">
        <ul className="flex w-auto justify-evenly uppercase">
          <li className="mr-4 li-border-half">
            <a href="#about">{t("about")}</a>
          </li>
          <li className="mx-4 li-border-half">
            <a href="#works">{t("works")}</a>
          </li>
          <li className="mx-4 li-border-half">
            <a href="#skills">{t("skills")}</a>
          </li>
          <li className="mx-4 li-border-half">
            <a href="#education">{t("education")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;