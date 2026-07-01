import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
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
    </div>
  );
}
