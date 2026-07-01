"use client"
import React, { useState } from 'react';
import LogoMP from "../../public/assets/MP-Logo.jpg"
import Image from "next/image";
export default function PersonalWeb() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3] selection:text-white">
      
      {/* 1. NAVBAR FLOTANTE ESTILO APPLE (GLASSMORPHISM) */}
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

      {/* 2. HERO / SECCIÓN PRINCIPAL */}
      <main className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        <section id="inicio" className="text-center space-y-4 my-12">

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] max-w-xl mx-auto leading-tight">
            Información para la toma de decisiones<br />
            <span className="bg-gradient-to-r from-[#ff6b00] via-[#ff8c3a] to-[#1d1d1f] bg-clip-text text-transparent">Lenguaje sencillo para todos</span>
          </h2>
          
        </section>

        {/* 3. SECCIÓN RECOMENDACIÓN DE LOGOS (LAYOUT APPLE PREMIUM) */}
        <section id="logos" className="mt-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#d2d2d7] pb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Últimos Informes Públicos</h2>
              <p className="text-md text-[#86868b]">Notas de opinión</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Opción 1: Isotipo Cuadrado (Recomendada) */}
            <div className="bg-white border border-[#e5e5e7] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#fff1e6] text-[#ff6b00] text-xs font-semibold px-3 py-1 rounded-full">Recomendado para Perfil</span>
                  <span className="text-xs text-[#86868b] font-mono">400 x 400 px</span>
                </div>
                
                {/* Contenedor de Previsualización simulada del Isotipo */}
                <div className="w-full aspect-square max-w-[200px] mx-auto bg-[#f5f5f7] rounded-2xl flex items-center justify-center border border-[#e5e5e7] relative group">
                  {/* Círculo guía transparente para mostrar cómo recortan las redes */}
                  <div className="absolute inset-2 border border-dashed border-[#0071e3]/30 rounded-full flex items-center justify-center">
                    <span className="absolute bottom-2 text-[10px] text-[#0071e3]/60 font-medium">Margen Circular</span>
                  </div>
                  {/* Representación del Isotipo MP */}
                  <span className="text-5xl font-black text-[#ff6b00] tracking-tighter select-none transform transition-transform group-hover:scale-105">MP</span>
                </div>

                <div className="space-y-2 text-center md:text-left pt-2">
                  <h3 className="font-semibold text-lg text-[#1d1d1f]">Isotipo Centrado (Solo MP)</h3>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    Diseñado específicamente para las fotos de perfil circulares de **Facebook, X (Twitter) y GitHub**. El aire perimetral garantiza que las esquinas no se corten.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f5f5f7]">
                <button className="w-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#0071e3] text-xs font-medium py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Descargar activo (.png)</span>
                </button>
              </div>
            </div>

            {/* Opción 2: Logotipo Completo */}
            <div className="bg-white border border-[#e5e5e7] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#f5f5f7] text-[#86868b] text-xs font-semibold px-3 py-1 rounded-full">Uso General / Web</span>
                  <span className="text-xs text-[#86868b] font-mono">500 x 500 px</span>
                </div>
                
                {/* Contenedor de Previsualización simulada del Logotipo Completo */}
                <div className="w-full aspect-square max-w-[200px] mx-auto bg-[#f5f5f7] rounded-2xl flex items-center justify-center border border-[#e5e5e7] p-4 group">
                  <div className="flex items-center space-x-1">
                    <span className="text-3xl font-black text-[#ff6b00] tracking-tighter transition-transform group-hover:scale-105">MP</span>
                    <span className="text-2xl font-light text-[#86868b]">- Data</span>
                  </div>
                </div>

                <div className="space-y-2 text-center md:text-left pt-2">
                  <h3 className="font-semibold text-lg text-[#1d1d1f]">Logotipo con Texto (MP - Data)</h3>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    Ideal para cabeceras de sitios web, firmas de correo electrónico o documentos corporativos. Evitar su uso en avatares pequeños ya que el texto pierde legibilidad.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f5f5f7]">
                <button className="w-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] text-xs font-medium py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Descargar logotipo (.png)</span>
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 4. FOOTER SIMPLE */}
      <footer id="contacto" className="bg-white border-t border-[#e5e5e7] py-8 px-4 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-[#86868b] space-y-4 md:space-y-0">
          <div>
            <p>© 2026 MP Data. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#0071e3] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#0071e3] transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-[#0071e3] transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

    </div>
  );
}