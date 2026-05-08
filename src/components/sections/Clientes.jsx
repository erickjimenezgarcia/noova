"use client";
import { useState, useRef } from "react";

const TESTIMONIOS = [
  {
    id: 1,
    texto: '"NOOVA S.A.C es una empresa que brinda servicios de estudios de diseños de sistemas ventilación en minas subterráneas en forma muy técnica y profesional, en Colquisiri han realizado tres estudios del diseño de sistemas de ventilación en forma adecuada, correcta, muy técnica y profesional".',
    nombre: "Ing. Juan Romero Belon",
    cargo: "Gerente de Operaciones",
    empresa: "Compañía Minera Colquisiri S.A.",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    id: 2,
    texto: '"NOOVA ha demostrado su compromiso con tecnología vanguardista al asociarse con Testo. Esta alianza destaca la importancia crucial de la seguridad y bienestar de los trabajadores en el entorno minero".',
    nombre: "José Nakamura",
    cargo: "Gerente General",
    empresa: "Instruments Lab S.A.C.",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: 3,
    texto: '"Endeavour Silver Corp en México ha recurrido a los servicios de NOOVA obteniendo un rendimiento sobresaliente al proporcionar soluciones y recomendaremos el servicio de esta empresa para abordar cualquier tipo de tarea".',
    nombre: "Ing. María Torres",
    cargo: "Jefa de Proyectos",
    empresa: "Nexa Resources S.A.A",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

// Clones: [último, ...originales, primero]
const slides = [
  TESTIMONIOS[TESTIMONIOS.length - 1],
  ...TESTIMONIOS,
  TESTIMONIOS[0],
];

export default function Clientes() {
  const [actual, setActual] = useState(1); // empieza en 1 (saltando el clon)
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [animate, setAnimate] = useState(true);
  const startX = useRef(0);
  const moved = useRef(0);
  const transitioning = useRef(false);

  const goTo = (index, withAnim = true) => {
    setAnimate(withAnim);
    setActual(index);
  };

  const prev = () => {
    if (transitioning.current) return;
    transitioning.current = true;
    goTo(actual - 1);
  };

  const next = () => {
    if (transitioning.current) return;
    transitioning.current = true;
    goTo(actual + 1);
  };

  const handleTransitionEnd = () => {
    transitioning.current = false;
    // Llegó al clon del último → salta al último real sin animación
    if (actual === 0) {
      goTo(TESTIMONIOS.length, false);
    }
    // Llegó al clon del primero → salta al primero real sin animación
    if (actual === slides.length - 1) {
      goTo(1, false);
    }
  };

  const onMouseDown = (e) => {
    setDragging(true);
    startX.current = e.clientX;
    moved.current = 0;
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    moved.current = e.clientX - startX.current;
    setDragOffset(moved.current);
  };

  const onMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
    setDragOffset(0);
    if (moved.current < -50) next();
    else if (moved.current > 50) prev();
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    moved.current = 0;
  };

  const onTouchMove = (e) => {
    moved.current = e.touches[0].clientX - startX.current;
    setDragOffset(moved.current);
  };

  const onTouchEnd = () => {
    setDragOffset(0);
    if (moved.current < -50) next();
    else if (moved.current > 50) prev();
  };

  // Índice real para los dots (actual - 1, wraparound)
  const dotActivo = (actual - 1 + TESTIMONIOS.length) % TESTIMONIOS.length;

  return (
    <section
      id="clientes"
      className="relative py-6 overflow-hidden select-none"
      style={{ background: "#0e4a6e", cursor: dragging ? "grabbing" : "grab" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Patrón topográfico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q25,60 50,100 Q75,140 100,100 Q125,60 150,100 Q175,140 200,100" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M0,130 Q25,90 50,130 Q75,170 100,130 Q125,90 150,130 Q175,170 200,130" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M0,70 Q25,30 50,70 Q75,110 100,70 Q125,30 150,70 Q175,110 200,70" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M0,160 Q25,120 50,160 Q75,200 100,160 Q125,120 150,160 Q175,200 200,160" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M0,40 Q25,0 50,40 Q75,80 100,40 Q125,0 150,40 Q175,80 200,40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)"/>
        </svg>
      </div>

      <h2 className="relative z-10 text-center font-extrabold text-white text-2xl md:text-3xl tracking-widest uppercase mb-6 pointer-events-none">
        Testimonios de Clientes
      </h2>

      <div className="relative z-10 pointer-events-none">
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${actual * 100}% + ${dragOffset}px))`,
            transition: dragging || !animate
              ? "none"
              : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((t, i) => {
            const isActive = i === actual;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-full flex flex-col items-center text-center px-6 md:px-32 lg:px-64"
                style={{
                  opacity: isActive ? 1 : 0.35,
                  transform: isActive ? "scale(1)" : "scale(0.95)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  filter: isActive ? "none" : "blur(1px)",
                }}
              >
                <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl">
                  {t.texto}
                </p>
                <div
                  className="w-28 h-28 rounded-xl overflow-hidden mb-4 flex-shrink-0"
                  style={{ border: "3px solid #38bdf8", boxShadow: "0 0 0 4px rgba(56,189,248,0.25)" }}
                >
                  <img src={t.foto} alt={t.nombre} className="w-full h-full object-cover" />
                </div>
                <p className="text-white font-extrabold text-lg md:text-xl tracking-widest uppercase mb-1">{t.nombre}</p>
                <p className="text-[#38bdf8] font-bold text-sm md:text-base tracking-widest uppercase mb-1">{t.cargo}</p>
                <p className="text-[#facc15] text-sm md:text-base">{t.empresa}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex justify-center gap-3 pointer-events-auto mt-4">
        {TESTIMONIOS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background: dotActivo === i ? "#facc15" : "rgba(255,255,255,0.35)",
              transform: dotActivo === i ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}