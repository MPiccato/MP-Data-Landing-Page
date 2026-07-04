'use client';

import React, { useState } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  imageAlt: string;
  bgGradient: string;
}

export default function CarruselLandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos simulados con la estética y contexto de tu marca MP Data
  const slides: CarouselItem[] = [
    {
      id: 1,
      badge: "Recomendado",
      title: "Isotipo Cuadrado",
      subtitle: "Optimizado para Redes Sociales",
      description: "Formato 400x400 px ideal para los perfiles circulares de Facebook, X (Twitter) y GitHub. Evita que el logo se corte.",
      imageAlt: "Isotipo MP",
      bgGradient: "from-orange-500/20 via-neutral-900 to-neutral-950"
    },
    {
      id: 2,
      badge: "Versátil",
      title: "Logotipo Completo",
      subtitle: "Estructuras Amplias y Web",
      description: "Formato 500x500 px que incluye la palabra 'Data' con márgenes de seguridad óptimos para contenedores cuadrados.",
      imageAlt: "Logotipo Completo MP Data",
      bgGradient: "from-blue-600/10 via-neutral-900 to-neutral-950"
    },
    {
      id: 3,
      badge: "Siguiente Nivel",
      title: "Diseño Glassmorphic",
      subtitle: "Estilo Apple Avanzado",
      description: "Interfaces ultra limpias con desenfoques profundos, bordes de cristal fino y tipografías perfectamente ajustadas.",
      imageAlt: "Diseño Interfaz Apple",
      bgGradient: "from-purple-600/10 via-neutral-900 to-neutral-950"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 select-none">
      {/* Contenedor principal del Carrusel */}
      <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-neutral-950">
        
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slide.bgGradient} flex flex-col justify-end p-6 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                index === currentIndex 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {/* Contenido de texto estilo Apple */}
              <div className="max-w-xl space-y-2 md:space-y-3 z-10">
                {slide.badge && (
                  <span className="inline-block text-[10px] md:text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-400/10 px-2.5 py-1 rounded-full border border-orange-400/20">
                    {slide.badge}
                  </span>
                )}
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-lg font-medium text-neutral-400 tracking-tight">
                  {slide.subtitle}
                </p>
                <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Elemento gráfico abstracto simulando el logo / preview */}
              <div className="absolute right-6 top-6 md:right-16 md:top-1/2 md:-translate-y-1/2 w-24 h-24 md:w-48 md:h-48 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center shadow-inner group">
                <div className="text-2xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  {slide.id === 1 ? 'MP' : slide.id === 2 ? 'MPD' : ''}
                </div>
                {/* Guía punteada simulando el recorte circular de las redes sociales */}
                {slide.id === 1 && (
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Navegación (Flechas Glassmorphic) */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-2 z-20">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl text-white hover:bg-white/[0.12] active:scale-95 transition-all duration-200"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl text-white hover:bg-white/[0.12] active:scale-95 transition-all duration-200"
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Indicadores de posición (Dots) abajo */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}