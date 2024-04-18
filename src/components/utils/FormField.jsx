import React from "react";
import "./118n";
import { useTranslation } from "react-i18next";
import "../../styles/global.css";

const FormField = ({ id, label, type, placeholder, rows }) => {
    const { t } = useTranslation();
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-05">
          {t(label)}
        </label>
        {type !== 'textarea' ? (
          <input
            placeholder={t(placeholder)}
            type={type}
            id={id}
            name={id}
            autoComplete={id}
            required
            className="mt-1 block w-full px-3 py-2 border border-05 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        ) : (
          <textarea
            placeholder={t(placeholder)}
            id={id}
            name={id}
            rows={rows || 3}
            required
            className="mt-1 block w-full px-3 py-2 border border-05 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        )}
      </div>
    );
};

export default FormField;