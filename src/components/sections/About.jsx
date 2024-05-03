import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="" id="about">
      <div className="flex flex-col-reverse lg:flex-row lg:relative">
        <div className="flex w-full shadow-sm lg:w-5/6 flex-col justify-between lg:justify-end px-5 xl:px-10 py-7 xl:py-14 lg:h-96 bg-04 lg:max-h-[200px] xl:max-h-[300px] max-w-[800px] 2xl:max-w-[1200px]">
          <div className="text-xs lg:text-sm xl:text-lg font-normal roles-border-half text-right text-00">
            {t("description")}
          </div>
        </div>
        <div className="text-5xl text-00 bg-04 lg:bg-opacity-0 p-5 lg:p-0 lg:text-4xl lg:-right-[35px] lg:bottom-16 xl:text-5xl xl:-right-10 xl:bottom-20 lg:absolute sections-border-half font-extrabold lg:font-medium lg:text-04 tracking-[1rem] lg:tracking-[.10em] lg:-rotate-90">
          {t("about me")}
        </div>
      </div>
    </div>
  );
};

export default About;
