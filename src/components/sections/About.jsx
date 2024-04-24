import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex flex-row relative">
        <div className="flex w-5/6 flex-col justify-end px-10 py-14 h-96 bg-05 max-h-[300px] max-w-[800px] 2xl:max-w-[1200px]">
          <div className="mt-24 text-l font-normal roles-border-half text-right text-00 max-md:mt-10 max-md:max-w-full">
            {t("description")}
          </div>
        </div>
        <div className="text-6xl absolute -right-16 bottom-28 sections-border-half font-medium text-04 tracking-[.10em] -rotate-90">
          {t("about me")}
        </div>
      </div>
    </div>
  );
};

export default About;
