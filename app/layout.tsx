"use client";

import "./globals.css";
import LogoMP from "../public/assets/MP-Logo.jpg"
import Image from "next/image";
import React, { useState } from 'react';







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    
    <html
      lang="en"
    >
      <header className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4 pointer-events-none">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <div className="backdrop-blur-xl bg-white/[0.06] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
            
            {/* Logo o Isotipo en el menú */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <Image
                  src={LogoMP}
                  alt="Logo MP Data"
                  width={80}
                  height={100}
                  priority
                />
              
           </div>

            {/* Menú de Navegación Escritorio */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-md font-medium text-[#1d1d1f]/70 hover:text-[#0071e3] transition-colors">Inicio</a>
              <a href="#logos" className="text-md font-medium text-[#1d1d1f]/70 hover:text-[#0071e3] transition-colors">Perfil del Autor</a>
              <a href="#proyectos" className="text-md font-medium text-[#1d1d1f]/70 hover:text-[#0071e3] transition-colors">Informes</a>
              <a href="#contacto" className="text-md font-medium text-[#1d1d1f]/70 hover:text-[#0071e3] transition-colors">Contacto</a>
            </nav>

            {/* Botón CTA */}
            <div className="hidden md:block">
              <a href="#contacto" className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-md font-medium px-4 py-1.5 rounded-full shadow-sm transition-all hover:shadow duration-200">
                Suscribirse
              </a>
            </div>

            {/* Botón de Menú Móvil */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#1d1d1f] focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú Desplegable Móvil */}
          {isMobileMenuOpen && (
            <div className="mt-2 mx-2 md:hidden backdrop-blur-2xl bg-white/90 border border-white/50 rounded-2xl p-4 shadow-xl animate-fade-in-down">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[#1d1d1f]/80 py-1">Inicio</a>
                <a href="#logos" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[#1d1d1f]/80 py-1">Perfil del autor</a>
                <a href="#proyectos" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[#1d1d1f]/80 py-1">Informes</a>
                <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[#1d1d1f]/80 py-1">Contacto</a>
                <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#0071e3] text-white text-center text-sm font-medium py-2 rounded-xl">Suscribirse</a>
              </nav>
            </div>
          )}
        </div>
      </header>
      <body >{children}</body>

      {/* 4. FOOTER SIMPLE */}
      <footer id="contacto" className="bg-white border-t border-[#e5e5e7]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-md text-[#86868b] space-y-4 md:space-y-0">
          <div>
            <p>© 2026 MP Data. Todos los derechos reservados.</p>
          </div>
          <div className="flex  md:mb-0 space-x-16">
            <a href="#" className="hover:text-[#0071e3] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#0071e3] transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-[#0071e3] transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </html>
  );
}
