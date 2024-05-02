import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Nav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full mt-10">
      <nav className="flex flex-row lg:py-4">
        {/* Botón del menú de hamburguesa solo visible en pantallas menores a lg */}
        <button className="hidden lg:hidden md:inline-block sm:inline-block xs:inline-block" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>
        {/* Menú original que se oculta en tamaños menores a lg */}
        <ul className={`${isOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row w-auto justify-evenly uppercase lg:uppercase`}>
          <li className="mr-4 lg:mr-4 li-border-half">
            <a href="#about">{t("about")}</a>
          </li>
          <li className="mx-4 lg:mx-4 li-border-half">
            <a href="#works">{t("works")}</a>
          </li>
          <li className="mx-4 lg:mx-4 li-border-half">
            <a href="#skills">{t("skills")}</a>
          </li>
          <li className="mx-4 lg:mx-4 li-border-half">
            <a href="#education">{t("education")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
