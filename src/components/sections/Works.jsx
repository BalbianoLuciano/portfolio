import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";
import ExpandingCards from "../utils/ExpandingCards";

const Works = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex flex-row relative">
        <div className="flex w-5/6 flex-col bg-05 h-96 max-h-[440px] max-w-[800px]">
            <ExpandingCards />
        </div>
        <div className="text-6xl absolute -right-2 bottom-14 sections-border-half font-medium text-04 tracking-[.10em] -rotate-90">
          {t("works title")}
        </div>
      </div>
    </div>
  );
};

export default Works;
