import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="" id="about">
      <div className="hidden lg:flex flex-row relative">
        <div className="flex w-5/6 flex-col justify-end px-5 xl:px-10 py-7 xl:py-14 h-96 bg-05 max-h-[200px] xl:max-h-[300px] max-w-[800px] 2xl:max-w-[1200px]">
          <div className="text-sm xl:text-lg font-normal roles-border-half text-right text-00">
            {t("description")}
          </div>
        </div>
        <div className="text-4xl -right-[35px] bottom-16 xl:text-5xl xl:-right-10 xl:bottom-20 absolute sections-border-half font-medium text-04 tracking-[.10em] -rotate-90">
          {t("about me")}
        </div>
      </div>
      <div className="bg-04 flex flex-col justify-between p-5 w-full h-[250px] lg:hidden">
        <div className="text-5xl font-extrabold tracking-[1rem] text-01">
          {t("about me")}
        </div>
        <div className="text-xs font-normal text-right text-01">
          {t("description")}
        </div>
      </div>
    </div>
  );
};

export default About;
