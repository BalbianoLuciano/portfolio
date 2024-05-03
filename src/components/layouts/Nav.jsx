import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Nav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full lg:p-10">
      <nav className="flex flex-row relative lg:py-4">
        {/* Componente de menú de hamburguesa con SVG y checkbox */}
        <label className="hamburger lg:hidden pt-2 pl-2 absolute cursor-pointer">
          <input type="checkbox" onClick={toggleMenu} checked={isOpen} />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16" ></path>
          </svg>
        </label>
        {/* Menú original que se oculta en tamaños menores a lg */}
        <ul className={`${isOpen ? "flex" : "hidden"} pt-4 flex-col h-96 lg:h-auto absolute lg:static z-10 bg-white shadow-lg lg:shadow-none lg:bg-opacity-0 lg:flex lg:flex-row w-auto justify-evenly uppercase lg:uppercase`}>
          <li className="mx-6 mt-4 lg:mt-0 lg:mr-4 li-border-half">
            <a href="#about">{t("about")}</a>
          </li>
          <li className="mx-6 lg:mx-4 li-border-half">
            <a href="#works">{t("works")}</a>
          </li>
          <li className="mx-6 lg:mx-4 li-border-half">
            <a href="#skills">{t("skills")}</a>
          </li>
          <li className="mx-6 lg:mx-4 li-border-half">
            <a href="#education">{t("education")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
