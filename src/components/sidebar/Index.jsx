import React, { useState, useEffect } from 'react';
import jobs from "../utils/jobs.json";

const Sidebar = () => {
  // Estado para manejar el ancho de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Añadir un listener al tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calcula la altura en px basada en el número de trabajos, ajusta según necesidad
  const lineHeight = jobs.length * (windowWidth >= 1280 ? 252 : 198); 
  const itemTopOffset = windowWidth >= 1280 ? 280 : 220; 

  return (
    <div className="bg-gray-800 text-white px-3 py-8 xl:px-5 xl:py-16 space-y-4 h-full overflow-hidden">
      <div className="flex flex-col gap-10 px-4 mt-96">
        <button
          onClick={() => { /* Lógica de navegación a Contacto */ }}
          className="bg-06 text-2xl xl:text-3xl 2xl:text-4xl hover:bg-02 border-2 border-06 hover:text-06 hover:border-2 text-00 py-4 px-2"
        >
          contact me
        </button>
        <button
          onClick={() => { /* Lógica para descargar el CV */ }}
          className="px-2 py-4 text-2xl xl:text-3xl 2xl:text-4xl text-06 bg-02 border-2 border-06 hover:bg-06 hover:text-00 transition-colors"
        >
          download cv
          <i className="bi bi-download w-6 pl-2"></i>
        </button>
      </div>

      <div className="relative border-gray-700 h-full">
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 border-l-4 border-06" 
          style={{ height: `${lineHeight}px`, margin: '120px 0' }}
        ></div>
        {jobs.map((job, index) => (
          <div 
            key={index}
            className={`absolute w-1/2 px-4 py-2 ${index % 2 === 0 ? '-right-2 xl:-right-5 text-left' : '-left-2 xl:-left-5 text-right'}`}
            style={{ top: `${itemTopOffset * index + 100}px` }}
          >
            <div className={`absolute ${index % 2 === 0 ? 'right-[132px] xl:right-[180px] 2xl:right-[222px] monitor:right-[287px]' : 'left-[132px] xl:left-[180px] 2xl:left-[222px] monitor:left-[287px]'} w-6 h-6 bg-06 border-2 border-02`}></div>
            <h2 className={`xl:text-xl 2xl:text-3xl font-semibold ${index % 2 === 0 ? 'sections-border-timeline-first-half' : 'sections-border-timeline-second-half'}`}>{job.title}</h2>
            <p className={`xl:text-lg 2xl:text-3xl ${index % 2 === 0 ? '' : 'mt-6'}`}>{job.date}</p>
            <p className="text-sm 2xl:text-lg text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;