
import React from 'react';
import { Service, NavLink, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Solución', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#portfolio' },
  { name: 'Garantía', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Automatización de Facturación y Glosas',
    description: 'Elimine las fugas de dinero. Automatizo la conciliación de cuentas y la detección de glosas antes de que ocurran.',
    fullDetails: [
      'Validación automática de RIPS y facturación electrónica.',
      'Sistemas de alerta temprana para auditoría médica.',
      'Integración directa con pasarelas de pago y ERPs.',
      'Reportes de rentabilidad en tiempo real por servicio.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.546 1.16 3.74.324 3.74-1.39V9.182c0-1.714-2.194-2.55-3.74-1.39l-.879.659m7.5 0a4.875 4.875 0 11-9.75 0 4.875 4.875 0 019.75 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Control Autónomo de Inventarios',
    description: 'Cero faltantes, cero desperdicios. Implemento sistemas que gestionan sus suministros críticos por usted.',
    fullDetails: [
      'Predicción de demanda basada en historial clínico.',
      'Automatización de pedidos a proveedores con firma digital.',
      'Control de caducidad y trazabilidad de alto costo.',
      'Optimización de espacio y rotación de activos.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Admisión Digital y Autoservicio',
    description: 'Recupere el tiempo de su personal. Automatizo el ingreso del paciente desde la cita hasta el consultorio.',
    fullDetails: [
      'Kioscos de admisión y validación de derechos automática.',
      'Agendamiento inteligente que reduce el ausentismo.',
      'Telemedicina integrada con flujo de facturación directa.',
      'Encuestas de satisfacción y NPS automatizados.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Herramienta de Facturación para busquedas de contratos 100% Autónomo',
    category: 'Ingeniería de Procesos',
    description: 'Reduje en un 80% el tiempo de búsqueda de contratos y facturación para una IPS.',
    imageUrl: './ConveniosApp.jpg',
    technicalDetails: [
      'Arquitectura de microservicios en Python optimizada para concurrencia.',
      'Integración con APIS REST para la digitalización.',
      'Implementación Homologador de codigos segun las actualizaciones del ministerio de salud.',
    ]
  },
  {
    id: 2,
    title: 'Asistencia de salud mental para pacientes',
    category: 'Salud Mental',
    description: 'Arya es tu compañera de bienestar: una voz amiga que te escucha sin juicios y te acompaña con sencillez en cada paso hacia tu paz interior.',
    imageUrl: './Arya.png',
    technicalDetails: [
      'Motor de Empatía Basado en LLM.',
      'Visualización Biofílica de Crecimiento Orgánico',
      'Arquitectura "Local-First" con Cifrado Simétrico',
      'Motor de Orquestación de Cuidado Circadiano'
    ]
  },
];
