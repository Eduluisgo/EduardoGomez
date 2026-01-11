
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 border-l-4 border-hospital-900 pl-6">
          <h2 className="text-4xl font-black text-hospital-900 mb-1 tracking-tight">Resultados Implementados</h2>
          <p className="text-lg text-hospital-700/60 font-medium tracking-tight">Ingeniería aplicada a problemas operativos reales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-2xl border border-hospital-100 bg-hospital-50 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-hospital-900 text-[10px] font-black rounded-md uppercase tracking-widest border border-hospital-200">{project.category}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-hospital-900 mb-3 group-hover:text-hospital-600 transition-colors">{project.title}</h3>
                <p className="text-hospital-700 text-base leading-relaxed mb-6 font-medium">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-hospital-900 font-black text-xs uppercase tracking-[0.15em] group-hover:gap-4 transition-all hover:text-hospital-600 outline-none focus:ring-2 focus:ring-hospital-400 rounded-sm"
                >
                  Ver Detalle Técnico
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))}

          {/* Tarjeta de 'Más Proyectos' simulada */}
          <div className="rounded-2xl border-2 border-dashed border-hospital-200 bg-hospital-50/50 flex flex-col items-center justify-center p-8 text-center h-full min-h-[400px] hover:border-hospital-300 hover:bg-hospital-50 transition-all group cursor-help">
            <div className="w-16 h-16 bg-hospital-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-hospital-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-hospital-900 mb-2">+5 Proyectos Confidenciales</h3>
            <p className="text-hospital-600/70 font-medium text-sm max-w-xs mx-auto mb-6">
              Desarrollos de alto impacto protegidos por acuerdos de no divulgación (NDA) en el sector asegurador y farmacéutico.
            </p>
            <span className="text-xs font-bold text-hospital-400 bg-white px-4 py-2 rounded-full border border-hospital-100 shadow-sm uppercase tracking-widest">
              Consultar en Reunión Privada
            </span>
          </div>
        </div>
      </div>

      <Transition appear show={!!selectedProject} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-hospital-950/60 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-2xl transition-all border border-hospital-100">
                  {selectedProject && (
                    <>
                      <div className="relative h-48 sm:h-64">
                        <img
                          src={selectedProject.imageUrl}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-hospital-900/90 to-transparent flex flex-col justify-end p-8">
                          <span className="text-hospital-400 text-xs font-bold tracking-widest uppercase mb-2">{selectedProject.category}</span>
                          <Dialog.Title as="h3" className="text-2xl sm:text-3xl font-black text-white leading-tight">
                            {selectedProject.title}
                          </Dialog.Title>
                        </div>
                        <button
                          onClick={closeModal}
                          className="absolute top-4 right-4 p-2 bg-black/20 text-white hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>

                      <div className="p-8 sm:p-10">
                        <div className="mb-8">
                          <h4 className="text-sm font-bold text-hospital-900 uppercase tracking-widest mb-3 border-l-4 border-hospital-400 pl-3">Impacto De Negocio</h4>
                          <p className="text-hospital-700 text-lg leading-relaxed font-medium">
                            {selectedProject.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-hospital-900 uppercase tracking-widest mb-4 border-l-4 border-hospital-400 pl-3">Stack Tecnológico & Estrategia</h4>
                          <ul className="grid grid-cols-1 gap-4">
                            {selectedProject.technicalDetails?.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-hospital-50 border border-hospital-100 hover:border-hospital-200 transition-colors">
                                <div className="p-2 bg-white rounded-lg text-hospital-400 shadow-sm">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <span className="text-hospital-800 font-medium text-sm leading-relaxed mt-1">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-10 pt-6 border-t border-hospital-100 flex justify-end">
                          <button
                            onClick={closeModal}
                            className="px-8 py-3 bg-hospital-900 text-white font-bold rounded-lg hover:bg-hospital-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            Entendido
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Portfolio;
