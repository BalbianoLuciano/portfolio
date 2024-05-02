import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="" id="home">
      <div className="hidden lg:block">
        <div className="flex flex-row mt-8 xl:mt-10">
          <img
            src="images/paracv.jpg"
            alt="Profile"
            className="w-150 h-150 xl:w-400 xl:h-400"
          />
          <div className="flex flex-col pl-4">
            <h1 className="text-7xl tracking-[.20em] xl:text-8xl 2xl:text-9xl font-extrabold text-05 2xl:tracking-[.25em]">
              {t("hi")}
            </h1>
            <h2 className="text-7xl tracking-[.20em] xl:text-8xl 2xl:text-9xl h1-border-half font-extrabold text-05 2xl:tracking-[.25em] z-10">
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
                <div>
                  <i className="bi bi-github hover:text-02 cursor-pointer"></i>
                </div>
                <div>
                  <i className="bi bi-instagram hover:text-02 cursor-pointer"></i>
                </div>
                <div>
                  <i className="bi bi-linkedin hover:text-02 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-4xl xl:text-5xl tracking-[.20em] absolute -right-[75px] bottom-[105px] xl:-right-[100px] xl:bottom-36 sections-border-half font-medium text-04 -rotate-90">
            {t("introduction")}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col items-center">
          <img
            src="images/paracv.jpg"
            alt="Profile"
            className="w-52 h-52"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl tracking-[.20em] font-extrabold text-07">
              {t("hi")}
            </h1>
            <h2 className="text-4xl tracking-[.20em] h1-border-half text-07 font-extrabold">
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
                <div>
                  <i className="bi bi-github hover:text-02 cursor-pointer"></i>
                </div>
                <div>
                  <i className="bi bi-instagram hover:text-02 cursor-pointer"></i>
                </div>
                <div>
                  <i className="bi bi-linkedin hover:text-02 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-4xl xl:text-5xl tracking-[.20em] absolute -right-[75px] bottom-[105px] xl:-right-[100px] xl:bottom-36 sections-border-half font-medium text-04 -rotate-90">
            {t("introduction")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
