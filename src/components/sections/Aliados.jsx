"use client";
import { useRef, useState, useEffect } from "react";

const LOGO = "/logo_constructor.avif";

const NACIONALES = [
  { nombre: "Nexa Resources", logo: LOGO },
  { nombre: "Minera Bateas", logo: LOGO },
  { nombre: "Minera Aguilar", logo: LOGO },
  { nombre: "MARSA", logo: LOGO },
  { nombre: "Austria Duvaz", logo: LOGO },
  { nombre: "Buenaventura", logo: LOGO },
];

const INTERNACIONALES = [
  { nombre: "Dia Bras Mexicana", logo: LOGO },
  { nombre: "Trafigura", logo: LOGO },
  { nombre: "AngloGold Ashanti", logo: LOGO },
  { nombre: "Cerro Negro", logo: LOGO },
];

const ALIADOS = [
  { nombre: "Testo", logo: LOGO },
  { nombre: "Noovaduct", logo: LOGO },
  { nombre: "VumA", logo: LOGO },
];

function Carrusel({ items }) {
  const ITEM_W = 200;
  const VISIBLE = 5; // cuántos se ven a la vez
  const GAP = 32;

  // Asegura suficientes items para llenar
  const minRepeat = Math.ceil((VISIBLE * 2) / items.length) + 1;
  const lista = Array.from({ length: minRepeat }, () => items).flat();

  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragMoved = useRef(0);

  const stepW = ITEM_W + GAP;
  const totalW = items.length * stepW;

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setOffset((o) => {
      const next = o + stepW;
      return next >= totalW ? next - totalW : next;
    });
    setTimeout(() => setAnimating(false), 600);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setOffset((o) => {
      const prev = o - stepW;
      return prev < 0 ? prev + totalW : prev;
    });
    setTimeout(() => setAnimating(false), 600);
  };

  // Auto avance cada 3 segundos
  useEffect(() => {
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer);
  }, [animating]);

  // Drag
  const onMouseDown = (e) => { setDragging(true); startX.current = e.clientX; dragMoved.current = 0; };
  const onMouseMove = (e) => { if (!dragging) return; dragMoved.current = e.clientX - startX.current; };
  const onMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragMoved.current < -50) goNext();
    else if (dragMoved.current > 50) goPrev();
  };
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; dragMoved.current = 0; };
  const onTouchMove = (e) => { dragMoved.current = e.touches[0].clientX - startX.current; };
  const onTouchEnd = () => { if (dragMoved.current < -50) goNext(); else if (dragMoved.current > 50) goPrev(); };

  const containerW = VISIBLE * ITEM_W + (VISIBLE - 1) * GAP;

  return (
    <div className="flex justify-center">
      <div
        style={{ width: containerW, overflow: "hidden", cursor: dragging ? "grabbing" : "grab" }}
        className="select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex items-center"
          style={{
            gap: GAP,
            transform: `translateX(-${offset}px)`,
            transition: animating ? "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)" : "none",
          }}
        >
          {lista.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: ITEM_W, height: 120, padding: "12px 20px" }}
            >
              <img
                src={item.logo}
                alt={item.nombre}
                draggable={false}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
              <span
                style={{ display: "none" }}
                className="text-[#1a3a5c] font-bold text-xs tracking-wide text-center"
              >
                {item.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Seccion({ titulo, items, velocidad }) {
  return (
    <div className="mb-14">
      <h3 className="text-3xl md:text-4xl text-center text-[#1a3a5c] font-black text-xl md:text-2xl tracking-widest uppercase mb-8">
        {titulo}
      </h3>
      <Carrusel items={items} velocidad={velocidad} />
    </div>
  );
}

export default function Aliados() {
  return (
    <section id="aliados" className="py-16">
      <Seccion titulo="Clientes Nacionales" items={NACIONALES} velocidad={0.4} />
      <Seccion titulo="Clientes Internacionales" items={INTERNACIONALES} velocidad={0.35} />
      <Seccion titulo="Aliados Comerciales" items={ALIADOS} velocidad={0.3} />
    </section>
  );
}