import React from "react";
import "../utils/118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";
import FormField from "../utils/FormField";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-9xl h1-border-half mb-20 tracking-widest font-black text-05">
        {t("contact")}
      </h3>
      <form className="space-y-12 mt-4 max-w-[800px]">
        <FormField id="fullName" label="fullName" type="text" placeholder="fullName" />
        <FormField id="email" label="email" type="email" placeholder="email" />
        <FormField id="message" label="message" type="textarea" placeholder="message" rows={5} />
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-16 border-2 border-05 text-lg font-medium text-05 hover:bg-05 hover:text-00"
        >
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default Contact;