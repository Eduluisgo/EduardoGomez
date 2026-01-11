
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-5/12 relative">
            {/* Marco decorativo eliminado para una estética más limpia */}
            <img
              src="./1.png"
              alt="Eduardo Gomez"
              className="w-full h-auto rounded-2xl shadow-xl relative z-10 border border-hospital-100"
            />
          </div>

          <div className="w-full md:w-7/12">
            <h2 className="text-4xl font-black text-hospital-900 mb-6 leading-tight">
              ¿Por qué confiarme sus procesos críticos?
            </h2>
            <div className="space-y-6 text-hospital-800/80 text-lg leading-relaxed">
              <p>
                La mayoría de los ingenieros se enfocan en el código. Yo me enfoco en su <strong className="text-hospital-900 font-bold underline decoration-hospital-400">cuenta de resultados</strong>.
              </p>
              <p>
                He dedicado años a entender la complejidad de la gestión hospitalaria y los procesos institucionales. No soy un programador más; soy un <strong className="text-hospital-900">arquitecto de soluciones</strong> que entiende que cada minuto perdido en un proceso manual es dinero que su institución deja de ganar.
              </p>
              <p>
                Mi compromiso es simple: entregarle sistemas que no necesiten supervisión constante para que usted pueda enfocarse en lo que realmente importa: <strong className="text-hospital-900 font-bold">crecer y servir mejor</strong>.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-4 bg-hospital-50 rounded-xl border border-hospital-100">
                  <p className="text-3xl font-black text-hospital-600">ROI</p>
                  <p className="text-xs font-bold text-hospital-900 uppercase tracking-widest mt-1">Impacto Directo</p>
                </div>
                <div className="p-4 bg-hospital-50 rounded-xl border border-hospital-100">
                  <p className="text-3xl font-black text-hospital-600">0%</p>
                  <p className="text-xs font-bold text-hospital-900 uppercase tracking-widest mt-1">Error Tolerado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
