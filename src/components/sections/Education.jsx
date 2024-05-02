import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import certificatesContent from "../utils/certificatesContent.json";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="" id="education">
      <div className="flex flex-col-reverse lg:flex-row lg:relative">
        <div className="flex w-full lg:w-5/6 flex-col justify-center p-5 bg-00 lg:bg-05 max-h-max lg:max-h-[255px] xl:max-h-[300px] max-w-[800px] 2xl:max-w-[1200px]">
          {certificatesContent.map((certificate) => (
            <div
              key={certificate.id}
              className="flex items-center justify-between my-2 bg-07 lg:bg-00 p-4 shadow-md"
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
                  <h3 className="text-xs text-00 lg:text-07 xl:text-base">
                    {t(certificate.title)}
                  </h3>
                  <h3 className="text-xs text-00 lg:text-07 xl:text-base">
                    {t(certificate.subtitle)}
                  </h3>
                </div>
              </div>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-00 xl:px-2 xl:py-1 2xl:px-4 2xl:py-2 px-2 py-1 text-xs bg-07 text-00 lg:text-06 lg:bg-00 border-2 lg:border-06  hover:bg-06 hover:text-00 transition-colors"
              >
                {t("view certificate")}
                <i className="bi bi-download pl-2"></i>
              </a>
            </div>
          ))}
        </div>
        <div className="text-5xl lg:text-4xl pt-5 px-5 lg:p-0 bg-00 lg:bg-opacity-0 lg:absolute xl:text-5xl xl:-right-[50px] xl:bottom-[90px] lg:-right-[40px] lg:bottom-[70px] sections-border-half font-extrabold lg:font-medium text-04 tracking-[1rem] lg:tracking-[.10em] lg:-rotate-90">
          {t("education title")}
        </div>
      </div>
    </div>
  );
};

export default Education;
