import React from "react";
import socialLinks from "../utils/socialLinks.json";

const Footer = () => {
  // Definir los detalles de las redes sociales incluyendo nombres y URLs

  return (
    <div className="text-center font-outfit space-y-5 p-10 mt-20">
      {/* Primera línea: Enlaces a secciones */}
      <div className="text-xl pb-4">
        {["Home", "About", "Works", "Tech Skills", "Education"].map((section) => (
          <a href={`#${section.toLowerCase()}`} className="px-2 text-05 font-bold hover:text-02">
            {section}
          </a>
        ))}
      </div>

      {/* Segunda línea: Redes sociales con efecto de crecimiento y enlaces personalizados */}
      <div className="flex justify-center space-x-10">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="bg-02 flex justify-center items-center w-8 h-8 xl:w-16 xl:h-16 rounded-full transition-transform duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`bi bi-${item.name} text-06 text-base xl:text-custom`}></i>
          </a>
        ))}
      </div>

      {/* Tercera línea: Contacto */}
      <div className="flex justify-center text-dark items-center space-x-4 py-4">
        <div className="flex items-center">
          <i className="bi bi-envelope-fill pr-2"></i>
          <span>balbiano06@gmail.com</span>
        </div>
        <div className="border-l-2 border-02 h-6 mx-4"></div>
        <div className="flex items-center">
          <i className="bi bi-telephone-fill pr-2"></i>
          <span>(+54) 3735-411941</span>
        </div>
      </div>

      {/* Cuarta línea: Derechos reservados */}
      <div className="text-sm py-4 text-dark">
        © BalbianoLuciano™ 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
