import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Definición del esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es obligatorio (mínimo 2 caracteres)' }),
  institution: z.string().min(2, { message: 'La institución es obligatoria' }),
  email: z.string().email({ message: 'Formato de email inválido' }),
  challenge: z.string().min(10, { message: 'Cuéntanos un poco más sobre tu desafío (mínimo 10 caracteres)' })
});

// Inferencia del tipo de datos a partir del esquema
type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSendError(null);
    try {
      // Verificación de variables de entorno (útil para depuración)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn("Faltan variables de entorno de EmailJS. Simulando envío exitoso para desarrollo.");
        // Si no hay keys configuradas, simulamos éxito para no romper la UX en dev
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        reset();
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        data as unknown as Record<string, unknown>,
        publicKey
      );

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSendError('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctame directamente al email.');
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-heartbeat">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-hospital-900 mb-4">¡Solicitud Enviada!</h2>
          <p className="text-xl text-hospital-800/60 mb-8">Gracias por confiar en mi experiencia. Me pondré en contacto con usted pronto para agendar nuestro diagnóstico preliminar.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-8 py-3 bg-hospital-900 text-white font-bold rounded-lg hover:bg-hospital-800 transition-all focus:ring-4 focus:ring-hospital-400/50"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-extrabold text-hospital-900 mb-6 tracking-tight">Optimicemos su proceso hoy.</h2>
              <p className="text-xl text-hospital-800/60 font-light mb-12">
                Hablemos sobre cómo la automatización inteligente puede reducir sus costos operativos y elevar el estándar de atención.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-hospital-50 flex items-center justify-center border border-hospital-100">
                    <svg className="w-6 h-6 text-hospital-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-hospital-400 uppercase tracking-widest">Ubicación</p>
                    <span className="text-lg font-bold text-hospital-900">Cartagena de Indias / Remoto Global</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hospital-50 p-10 rounded-2xl border border-hospital-100 shadow-xl">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-hospital-900 uppercase tracking-wider">Nombre</label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-hospital-200 focus:ring-hospital-400'} rounded-lg focus:ring-2 outline-none transition-all`}
                      placeholder="Su nombre"
                    />
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-hospital-900 uppercase tracking-wider">Institución</label>
                    <input
                      type="text"
                      {...register('institution')}
                      className={`w-full px-4 py-3 bg-white border ${errors.institution ? 'border-red-500 focus:ring-red-200' : 'border-hospital-200 focus:ring-hospital-400'} rounded-lg focus:ring-2 outline-none transition-all`}
                      placeholder="Nombre del hospital o clínica"
                    />
                    {errors.institution && <p className="text-xs text-red-500 font-medium">{errors.institution.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-hospital-900 uppercase tracking-wider">Email Profesional</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-hospital-200 focus:ring-hospital-400'} rounded-lg focus:ring-2 outline-none transition-all`}
                    placeholder="email@institucion.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-hospital-900 uppercase tracking-wider">Desafío Principal</label>
                  <textarea
                    rows={4}
                    {...register('challenge')}
                    placeholder="Cuéntenos brevemente su necesidad operativa..."
                    className={`w-full px-4 py-3 bg-white border ${errors.challenge ? 'border-red-500 focus:ring-red-200' : 'border-hospital-200 focus:ring-hospital-400'} rounded-lg focus:ring-2 outline-none transition-all resize-none`}
                  ></textarea>
                  {errors.challenge && <p className="text-xs text-red-500 font-medium">{errors.challenge.message}</p>}
                </div>

                {sendError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {sendError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-hospital-400 text-white font-bold rounded-lg hover:bg-hospital-900 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Procesando...
                    </>
                  ) : (
                    'Solicitar Diagnóstico Preliminar'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
