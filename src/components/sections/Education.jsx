import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";
import certificatesContent from "../utils/certificatesContent.json";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="" id="education">
      <div className="flex flex-row relative">
        <div className="flex w-5/6 flex-col justify-center p-5 bg-05 max-h-[255px] xl:max-h-[300px] max-w-[800px] 2xl:max-w-[1200px]">
          {certificatesContent.map((certificate) => (
            <div
              key={certificate.id}
              className="flex items-center justify-between my-2 bg-00 p-4 shadow-md"
            >
              <div className="flex items-center">
                {certificate.icon.endsWith(".png") ? (
                  <img
                    src={certificate.icon}
                    alt=""
                    width="50px"
                    className="mr-1 xl:mr-4"
                  />
                ) : (
                  // Si no es PNG, asumimos que es SVG o algún otro formato manejado de manera diferente
                  <div
                    dangerouslySetInnerHTML={{ __html: certificate.icon }}
                    className="mr-1 xl:mr-4"
                  />
                )}
                <div className="flex flex-col">
                  <h3 className="text-xs xl:text-base">
                    {t(certificate.title)}
                  </h3>
                  <h3 className="text-xs xl:text-base">
                    {t(certificate.subtitle)}
                  </h3>
                </div>
              </div>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="xl:px-2 xl:py-1 2xl:px-4 2xl:py-2 px-2 py-1 text-xs text-06 bg-00 border-2 border-06 hover:bg-06 hover:text-00 transition-colors"
              >
                {t("view certificate")}
                <i className="bi bi-download pl-2"></i>
              </a>
            </div>
          ))}
        </div>
        <div className="text-4xl absolute xl:text-5xl xl:-right-[50px] xl:bottom-[90px] -right-[40px] bottom-[70px] sections-border-half font-medium text-04 tracking-[.10em] -rotate-90">
          {t("education title")}
        </div>
      </div>
    </div>
  );
};

export default Education;
