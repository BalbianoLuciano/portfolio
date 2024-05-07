import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Index = () => {
  const { t } = useTranslation();
  const cvLink = "https://drive.google.com/uc?export=download&id=1rvwYSxSlqNP2W1hKr0rTKfBvFtRAVB6D"; // Enlace modificado para descarga directa

  return (
    <div className="" id="home">
      <div className="hidden lg:block">
        <div className="flex flex-row mt-8 xl:mt-10">
          <img
            src="images/cvpro.jpeg"
            alt="Profile"
            className="w-150 h-150 xl:w-400 xl:h-400"
          />
          <div className="flex flex-col pl-4">
            <h1 className="text-7xl tracking-[.20em] xl:text-8xl 2xl:text-9xl font-extrabold text-05 2xl:tracking-[.35em]">
              {t("hi")}
            </h1>
            <h2 className="text-7xl tracking-[.20em] xl:text-8xl 2xl:text-9xl h1-border-half font-extrabold text-05 2xl:tracking-[.35em] z-10">
              {t("everyone")}
            </h2>
          </div>
        </div>
        <div className="flex flex-row relative">
          <div className="flex w-5/6 flex-col justify-end px-5 py-7 xl:px-10 xl:py-14 max-h-[200px] xl:max-h-[300px] bg-05 max-w-[800px] 2xl:max-w-[1200px]">
            <div className="mt-24 text-xl xl:text-4xl font-black roles-border-half text-right text-00 tracking-[3.6px] max-md:mt-10 max-md:max-w-full">
              {t("role1")}
              <br />
              {t("role2")}
              <br />
              <div className="flex justify-end space-x-2 xl:space-x-8 mt-2 xl:mt-5">
                <a href="https://github.com/BalbianoLuciano" target="_blank">
                  <i className="bi bi-github text-3xl text-00 hover:text-03 cursor-pointer"></i>
                </a>
                <a
                  href="https://www.instagram.com/luciano_balbiano/"
                  target="_blank"
                >
                  <i className="bi bi-instagram text-3xl text-00 hover:text-03 cursor-pointer"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/luciano-balbiano/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin text-3xl text-00 hover:text-03 cursor-pointer"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-4xl xl:text-5xl tracking-[.20em] absolute -right-[75px] bottom-[105px] xl:-right-[100px] xl:bottom-36 sections-border-half font-medium text-04 -rotate-90">
            {t("introduction")}
          </div>
        </div>
      </div>
      <div className="lg:hidden relative">
        <img
          src="images/cvpro.jpeg"
          alt="Profile"
          className="w-64 h-54 absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="text-4xl tracking-[.20em] -translate-x-7 top-[30rem]  absolute font-medium text-04 -rotate-90">
          {t("introduction")}
        </div>
        <div className="flex flex-row">
          <div className="w-4/12 h-[700px]"></div>
          <div className="bg-04 w-8/12 h-[700px] flex flex-col items-start justify-end gap-2 px-2 pb-8">
            <h1 className="text-4xl tracking-[.20em] text-00 font-extrabold">
              {t("hi")}
            </h1>
            <h2 className="text-4xl tracking-[.20em] text-00 h1-border-half font-extrabold">
              {t("everyone")}
            </h2>
            <div>
              <p className="text-00 text-xl">
                {t("role1")} <br />
                {t("role2")}
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <a href="https://github.com/BalbianoLuciano">
                <i className="bi bi-github text-2xl text-00 hover:text-03 cursor-pointer"></i>
              </a>
              <a href="https://www.instagram.com/luciano_balbiano/">
                <i className="bi bi-instagram text-2xl text-00 hover:text-03 cursor-pointer"></i>
              </a>
              <a href="https://www.linkedin.com/in/luciano-balbiano/">
                <i className="bi bi-linkedin text-2xl text-00 hover:text-03 cursor-pointer"></i>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#contact"
                className="bg-05 text-xl text-center hover:bg-00 hover:text-07 border-2 border-05 hover:border-2 text-00 py-2 px-1"
              >
                contact me
              </a>

              <a
                href={cvLink}
                download="Luciano_Balbiano_CV.pdf" // Asegúrate de que el nombre del archivo es el deseado
                className="px-1 py-2 text-xl text-06 bg-02 border-2 border-06 hover:bg-07 hover:text-00 transition-colors"
              >
                download cv
                <i className="bi bi-download w-6 pl-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
