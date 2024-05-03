import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import FormField from "../utils/FormField";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_zru1nsj', form.current, '8vtI4BRro5JaP6_Fi')
      .then((result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          setAlertVisible(true);
          form.current.reset();
          setTimeout(() => setAlertVisible(false), 5000); // Limpiar mensaje después de 5 segundos
      }, (error) => {
          console.log(error.text);
          setMessage('Failed to send the message, please try again.');
          setAlertVisible(true);
          setTimeout(() => setAlertVisible(false), 5000);
      });
  };

  return (
    <div id="contact" className="p-5 bg-05 lg:bg-opacity-0 pb-20 lg:pb-0">
      <h3 className="text-7xl xl:text-8xl 2xl:text-9xl h1-border-half mb-10 xl:mb-20 tracking-[1rem] lg:tracking-[.10em] font-black text-00 lg:text-05">
        {t("contact")}
      </h3>
      {message && alertVisible && (
        <div className={`fixed top-0 inset-x-0 z-50 text-center py-4 px-6 mb-4 text-lg text-white ${message.startsWith('Failed') ? 'bg-danger' : 'bg-success'}`}>
          <button onClick={() => setAlertVisible(false)} className="absolute right-2 top-2 text-2xl text-white">
            &times;
          </button>
          {message}
        </div>
      )}
      <form ref={form} className="space-y-12 mt-4 max-w-[550px] xl:max-w-[700px] 2xl:max-w-[850px]" onSubmit={sendEmail}>
        <FormField id="from_name" label="fullName" type="text" placeholder="fullName" />
        <FormField id="email_id" label="email" type="email" placeholder="email" />
        <FormField id="message" label="message" type="textarea" placeholder="message" rows={5} />
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-16 border-2 w-full lg:w-auto text-00 border-00 lg:border-05 text-lg font-medium lg:text-05 hover:bg-05 hover:text-00"
        >
          {t("send")}
          <i className="bi bi-send-fill pl-2"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
