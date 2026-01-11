
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 bg-white border-b border-hospital-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-hospital-600 bg-hospital-50 rounded-md border border-hospital-200">
            Donde la ingenieria y la salud van de la mano.
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-hospital-900 leading-tight mb-6 tracking-tight">
            Transformo el caos de tus procesos <br />
            <span className="text-hospital-500">manuales en una maquinaria digital eficiente.</span>
          </h1>

          <p className="text-xl md:text-2xl text-hospital-800/80 mb-8 max-w-2xl leading-relaxed">
            Elimino los cuellos de botella que le hacen perder tiempo y dinero. Diseño flujos de trabajo autónomos que garantizan una operación <span className="font-bold text-hospital-900">escalable, sin errores y sin fricciones.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-hospital-900 text-white font-bold rounded-lg hover:bg-hospital-800 transition-all text-center uppercase tracking-widest text-xs"
            >
              Solicitar Auditoría de Procesos
            </a>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-green-700 uppercase">Consultoría Abierta - 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
