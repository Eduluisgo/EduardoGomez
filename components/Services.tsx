import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <section id="services" className="py-16 bg-hospital-50 border-y border-hospital-200">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-hospital-900 mb-2 tracking-tight">Especialidades Técnicas</h2>
            <p className="text-lg text-hospital-700/70 font-medium">Automatización de alto impacto diseñada para la continuidad operativa.</p>
          </div>
          <a href="#contact" className="text-hospital-600 font-bold hover:underline flex items-center gap-2">
            Consultar caso específico
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl border border-hospital-200 hover:border-hospital-500 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-hospital-50 text-hospital-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-hospital-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-hospital-900 mb-3">{service.title}</h3>
              <p className="text-hospital-700/70 text-base mb-6 flex-grow">{service.description}</p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto inline-flex items-center gap-2 text-hospital-900 font-bold text-xs uppercase tracking-widest hover:text-hospital-600 transition-colors"
              >
                Auditar este flujo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Transition appear show={!!selectedService} as={Fragment}>
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
            <div className="fixed inset-0 bg-hospital-950/40 backdrop-blur-sm" />
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-2xl transition-all">
                  {selectedService && (
                    <>
                      <div className="p-6 border-b border-hospital-100 flex justify-between items-center bg-hospital-900 text-white">
                        <Dialog.Title as="h3" className="text-xl font-bold leading-6">
                          {selectedService.title}
                        </Dialog.Title>
                        <button onClick={closeModal} className="text-white/60 hover:text-white outline-none focus:ring-2 focus:ring-white/50 rounded-md">
                          <span className="sr-only">Cerrar</span>
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                      <div className="p-8">
                        <p className="text-xs font-bold text-hospital-400 uppercase tracking-widest mb-4">Puntos de Optimización:</p>
                        <ul className="space-y-3">
                          {selectedService.fullDetails?.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-hospital-800 font-medium text-sm">
                              <span className="w-1.5 h-1.5 bg-hospital-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={closeModal}
                          className="w-full mt-8 py-3 bg-hospital-100 text-hospital-900 font-bold rounded-lg hover:bg-hospital-200 transition-all focus:ring-2 focus:ring-hospital-400 outline-none"
                        >
                          Cerrar Detalles
                        </button>
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

export default Services;
