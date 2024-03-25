import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex flex-row mt-10">
        <img src="images/paracv.jpg" alt="Profile" className="w-400 h-400" />
        <div className="flex flex-col pl-4">
          <h1 className="text-9xl font-extrabold text-05 tracking-[.20em]">
            {t("hi")}
          </h1>
          <h2 className="text-9xl h1-border-half font-extrabold text-05 tracking-[.20em] z-10">
            {t("everyone")}
          </h2>
        </div>
      </div>
      <div className="flex flex-row relative">
        <div className="flex w-5/6 flex-col justify-end px-10 py-14 bg-05 max-w-[800px]">
          <div className="mt-24 text-4xl font-black roles-border-half text-right text-00 tracking-[3.6px] max-md:mt-10 max-md:max-w-full">
            {t("role1")}
            <br />
            {t("role2")}
            <br />
            <div className="flex justify-end space-x-8 mt-5">
              <div>
                <i className="bi bi-github"></i>
              </div>
              <div>
                <i className="bi bi-instagram"></i>
              </div>
              <div>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="text-6xl absolute -right-24 bottom-36 sections-border-half font-medium text-04 tracking-[.10em] -rotate-90">
          {t("introduction")}
        </div>
      </div>
    </div>
  );
};

export default Index;
