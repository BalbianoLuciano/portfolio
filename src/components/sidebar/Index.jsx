import React from 'react';
import jobs from "../utils/jobs.json";

const Sidebar = () => {
  // Calcular la altura de la línea basándose en el número de trabajos

  return (
    <div className="bg-gray-800 text-white p-4 space-y-4 h-full">
      <div className="relative border-gray-700 h-full">
        {/* Línea blanca central ajustada para empezar y terminar con los trabajos */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 border-l-4 h-[3190px] my-96 border-06"
        ></div>
        {jobs.map((job, index) => (
          <div 
            key={index}
            className={`absolute w-1/2 px-4 py-2 ${index % 2 === 0 ? '-right-5 text-left' : '-left-5 text-right'}`}
            style={{ top: `${10 + index * 10}%` }} // Controla la posición vertical de cada trabajo
          >
            {/* Punto en la línea de tiempo */}
            <div className={`absolute ${index % 2 === 0 ? 'right-[288px]' : 'left-[288px]'} w-6 h-6 bg-06 border-2 border-02`}></div>
            <h2 className={`text-3xl font-semibold ${index % 2 === 0 ? 'sections-border-timeline-first-half' : 'sections-border-timeline-second-half'}`}>{job.title}</h2>
            <p className={`text-3xl ${index % 2 === 0 ? '' : 'mt-6'}`}>{job.date}</p>
            <p className="text-large text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;