import { useState, useEffect } from "react";
import HeroBanner from "../components/layout/HeroBanner";

const SLIDES = [
  {
    img: "/contactanos.png",
    title: "Contáctanos",
  },
];

export default function BodyContactanos() {
  

  return (
    <>
      
      <HeroBanner slides={SLIDES} />

     
      <section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    
      <div className="flex flex-col gap-6 pt-4">
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
        >
          ¡Contáctanos! Si desea contactarse con nosotros, tenga en cuenta estos
          números telefónicos y correos electrónicos.
        </p>

       
        <div className="flex items-start gap-3">
          <svg viewBox="0 0 24 24" fill="#0d3d6b" className="w-5 h-5 flex-shrink-0 mt-0.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm leading-relaxed" style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}>
            Jr. Cristóbal de Peralta Norte 110, Of. 702. Santiago de Surco, Lima – Perú
          </span>
        </div>

       
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="#0d3d6b" className="w-5 h-5 flex-shrink-0">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="text-sm font-semibold" style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}>
            (+51) 944 269 338
          </span>
        </div>

        
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="#0d3d6b" className="w-5 h-5 flex-shrink-0">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <a
            href="mailto:info@noovasac.com"
            className="text-sm font-semibold transition-colors duration-200 hover:text-[#0d3d6b]"
            style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
          >
            info@noovasac.com
          </a>
        </div>
      </div>

      
      <div>
        <form className="flex flex-col gap-4">

          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase" style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0d3d6b] transition-colors bg-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase" style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
              Empresa
            </label>
            <input
              type="text"
              placeholder="Nombre de tu empresa"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0d3d6b] transition-colors bg-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

         
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase" style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0d3d6b] transition-colors bg-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

        
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase" style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="+51 999 999 999"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0d3d6b] transition-colors bg-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase" style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
              Asunto
            </label>
            <select
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0d3d6b] transition-colors bg-white"
              style={{ color: "#555", fontFamily: "'Montserrat', sans-serif" }}
            >
              <option value="">Selecciona un asunto</option>
              <option value="pumpsim">Capacitación Pumpsim</option>
              <option value="testo">Capacitación Testo</option>
              <option value="ventsim">Capacitación Ventsim</option>
              <option value="bombeo_drenaje">Consultoría de Bombeo y Drenaje</option>
              <option value="ventilacion">Consultoría de Ventilación</option>
              <option value="otros">Otros</option>
            </select>
          </div>

        
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase" style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
              Mensaje
            </label>
            <textarea
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0d3d6b] transition-colors resize-none bg-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          
          <div className="flex flex-col gap-3 mt-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-[#0d3d6b] w-4 h-4 flex-shrink-0" />
              <span className="text-xs leading-relaxed" style={{ color: "#555", fontFamily: "'Montserrat', sans-serif" }}>
                He leído y aceptado las{" "}
                <a
                  href="https://noovasac.com/politica-de-privacidad/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline hover:text-[#0d3d6b]"
                  style={{ color: "#0d3d6b" }}
                >
                  Políticas de Privacidad
                </a>
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-[#0d3d6b] w-4 h-4 flex-shrink-0" />
              <span className="text-xs leading-relaxed" style={{ color: "#555", fontFamily: "'Montserrat', sans-serif" }}>
                Autorizo el envío de publicidad e información comercial
              </span>
            </label>
          </div>

          
          <button
            type="submit"
            className="mt-3 py-3 px-12 rounded-full text-white font-bold uppercase text-sm tracking-wider transition-all duration-200 hover:opacity-90 hover:shadow-lg self-center"
            style={{ backgroundColor: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}
          >
            Enviar mensaje
          </button>

        </form>
      </div>
    </div>

    {/* Lema final */}
    <div className="mt-16 pt-8 border-t border-gray-200 text-center">
      <p
        className="text-base italic font-semibold"
        style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}
      >
        "En Noova, el Compromiso Social es pieza fundamental de nuestros valores corporativos."
      </p>
    </div>

  </div>
</section>
    </>
  );
}