import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import ExpandingCards from "../utils/ExpandingCards";

const Works = () => {
  const { t } = useTranslation();

  return (
    <div className="" id="works">
      <div className="hidden lg:flex flex-row relative">
        <div className="flex w-5/6 flex-col bg-05 h-96 max-h-[300px] xl:max-h-[440px] max-w-[800px] 2xl:max-w-[1200px]">
          <ExpandingCards />
        </div>
        <div className="text-4xl -right-1 bottom-8 absolute xl:text-5xl xl:-right-0 xl:bottom-10 sections-border-half font-medium text-04 tracking-[.10em] -rotate-90">
          {t("works title")}
        </div>
      </div>
      <div className="bg-01 flex flex-col justify-between p-5 w-full lg:hidden">
        <div className="text-5xl font-extrabold pb-5 text-04 tracking-[1rem] lg:tracking-[.10em]">
          {t("works title")}
        </div>
        <div className="bg-05">
          <ExpandingCards />
        </div>
      </div>
    </div>
  );
};

export default Works;
