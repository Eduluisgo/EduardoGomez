
import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-hospital-900 py-12 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:max-w-md">
            <h3 className="text-white text-xl font-bold leading-tight mb-2">¿Por qué confiar en mi servicio?</h3>
            <p className="text-hospital-300 text-sm font-light">La dualidad técnica y administrativa que su institución necesita.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-hospital-400/10 rounded-lg">
                <svg className="w-6 h-6 text-hospital-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <p className="text-hospital-100 text-sm leading-relaxed">
                <span className="block font-bold text-white mb-1">Hablo ambos idiomas</span>
                Entiendo los retos de los ingenieros y las prioridades de los directores médicos.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-hospital-400/10 rounded-lg">
                <svg className="w-6 h-6 text-hospital-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-hospital-100 text-sm leading-relaxed">
                <span className="block font-bold text-white mb-1">Visión de 360°</span>
                Conozco el software por dentro y la administración hospitalaria por fuera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
