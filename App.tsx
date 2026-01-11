
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="antialiased font-sans selection:bg-hospital-400 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <footer className="py-20 bg-hospital-950 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <a href="#home" className="text-3xl font-black text-white tracking-tighter">
              EDUARDO<span className="text-hospital-400">GOMEZ</span>
            </a>
          </div>
          <p className="text-hospital-400/40 text-sm font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} Diseño de Alto Impacto • Ingeniería & Salud
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
