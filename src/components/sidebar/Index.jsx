import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import jobs from "../utils/jobs.json";

// Registrar ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Sidebar = () => {
  // Estado para manejar el ancho de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cvLinkEsp = "https://drive.google.com/uc?export=download&id=1v9OoFEk2b0cjp8lDIzwQonS2MOOxgsWI"; // Enlace de descarga directa para la versión ESP
  const cvLinkEng = "https://drive.google.com/uc?export=download&id=1x4nQwLLzswhbMSTWsezYg6IPeX6oBZ2K"; // Enlace de descarga directa para la versión ENG

  // Añadir un listener al tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth scroll para el botón "Contact me"
  useEffect(() => {
    const contactButton = document.querySelector(".contact-button");

    contactButton.addEventListener("click", (e) => {
      e.preventDefault();
      const targetElement = document.getElementById("contact");

      if (targetElement) {
        gsap.to(window, {
          scrollTo: { y: targetElement.offsetTop, offsetY: 70 }, // Ajuste de desplazamiento si es necesario
          duration: 1.5,
          ease: "power2.out",
        });
      }
    });

    return () => {
      contactButton.removeEventListener("click", null);
    };
  }, []);

  // Calcula la altura en px basada en el número de trabajos, ajusta según necesidad
  const lineHeight = jobs.length * (windowWidth >= 1280 ? 252 : 198);
  const itemTopOffset = windowWidth >= 1280 ? 280 : 220;

  return (
    <div className="text-white px-3 py-8 xl:px-5 xl:py-16 space-y-4 h-full overflow-hidden">
      <div className="flex flex-col gap-5 px-4">
        <a
          href="#contact"
          className="contact-button bg-05 text-2xl text-center xl:text-3xl 2xl:text-4xl hover:bg-00 hover:text-07 border-2 border-05 hover:border-2 text-00 py-4 px-2"
        >
          contact me
        </a>

        <div className="flex flex-col gap-5">
          <a
            href={cvLinkEsp}
            download="Luciano_Balbiano_CV_ESP.pdf"
            className="px-1 py-2 text-xl text-center text-06 bg-02 border-2 border-06 hover:bg-07 hover:text-00 transition-colors"
          >
            Descargar CV (Español)
            <i className="bi bi-download w-6 pl-2"></i>
          </a>
          <a
            href={cvLinkEng}
            download="Luciano_Balbiano_CV_ENG.pdf"
            className="px-1 py-2 text-xl text-center text-06 bg-02 border-2 border-06 hover:bg-07 hover:text-00 transition-colors"
          >
            Download CV (English)
            <i className="bi bi-download w-6 pl-2"></i>
          </a>
        </div>
      </div>

      <div className="relative border-gray-700 h-full">
         <div
          className="absolute left-1/2 transform -translate-x-1/2 border-l-4 border-06"
          style={{ height: `${lineHeight}px`, margin: "120px 0" }}
        ></div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`absolute w-1/2 px-4 py-2 ${
              index % 2 === 0
                ? "-right-2 xl:-right-5 text-left"
                : "-left-2 xl:-left-5 text-right"
            }`}
            style={{ top: `${itemTopOffset * index + 100}px` }}
          >
            <div
              className={`absolute ${
                index % 2 === 0
                  ? " right-full"
                  : "left-full"
              } w-6 h-6 bg-06 border-2 border-02`}
            ></div>
            <h2
              className={`xl:text-xl 2xl:text-3xl font-semibold ${
                index % 2 === 0
                  ? "sections-border-timeline-first-half"
                  : "sections-border-timeline-second-half"
              }`}
            >
              {job.title}
            </h2>
            <p
              className={`xl:text-lg 2xl:text-3xl ${
                index % 2 === 0 ? "" : "mt-6"
              }`}
            >
              {job.date}
            </p>
            <p className="text-sm 2xl:text-lg text-gray-300">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
