import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import FormField from "../utils/FormField";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="p-5">
      <h3 className="text-7xl xl:text-8xl 2xl:text-9xl h1-border-half mb-10 xl:mb-20 tracking-[1rem] lg:tracking-[.10em] font-black text-05">
        {t("contact")}
      </h3>
      <form className="space-y-12 mt-4 max-w-[550px] xl:max-w-[700px] 2xl:max-w-[850px]">
        <FormField id="fullName" label="fullName" type="text" placeholder="fullName" />
        <FormField id="email" label="email" type="email" placeholder="email" />
        <FormField id="message" label="message" type="textarea" placeholder="message" rows={5} />
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-16 border-2 w-full border-05 text-lg font-medium text-05 hover:bg-05 hover:text-00"
        >
          {t("send")}
          <i class="bi bi-send-fill pl-2"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;