
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${isScrolled || isMenuOpen
            ? 'bg-white py-3 shadow-md border-b border-hospital-100'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[160]">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tighter text-hospital-900"
            onClick={() => setIsMenuOpen(false)}
          >
            EDUARDO<span className="text-hospital-500">GOMEZ</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-hospital-900/60 hover:text-hospital-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-bold text-white bg-hospital-900 rounded-xl hover:bg-hospital-700 transition-all shadow-md"
              >
                Consultoría Gratis
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-hospital-900 hover:text-hospital-500 transition-colors bg-hospital-50 rounded-lg border border-hospital-100 shadow-sm"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-white z-[140] md:hidden transition-all duration-500 ease-in-out flex flex-col pt-24 px-6 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
        >
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-black text-hospital-900 border-b border-hospital-50 pb-4 hover:text-hospital-500 transition-all transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={`mt-12 transform transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-10 py-5 text-xl font-bold text-white bg-hospital-900 rounded-2xl shadow-xl active:scale-95 transition-all"
            >
              Agendar Diagnóstico
            </a>
            <p className="mt-8 text-center text-hospital-400 text-sm font-medium uppercase tracking-widest">
              Consultoría Especializada
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
