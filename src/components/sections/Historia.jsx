"use client";
import { useEffect, useRef, useState } from "react";

function StatItem({ prefix = "", target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const start = performance.now();
          const easeOut = (t) => 1 - Math.pow(1 - t, 3);
          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.round(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="w-full sm:flex-1 text-center px-8 py-10">
      <div className="text-5xl md:text-6xl font-extrabold text-white leading-none">
        {prefix}{count}
      </div>
      <p
        className="mt-3 text-xs tracking-widest uppercase text-white/70 leading-snug"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}

const cards = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    title: "Servicios",
    items: [
      "Ventilación de minas subterráneas",
      "Bombeo y drenaje de aguas subterráneas",
      "Asesoría minera",
    ],
    href: "/servicios",
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    title: "Proyectos",
    items: [
      "Ventilación U.M. Untaca - Coripuno S.A.C.",
      "Bombeo U.M. Yauricocha - Sierra Metals INC.",
      "Precención de Incendios U.M. Cerro Lindo - Nexa Resources S.A.A.",
    ],
    href: "/proyectos",
  },
  {
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    title: "Productos",
    items: [
      "Ductos y accesorios de Ventilación",
      "Equipos TESTO",
      "Comisub",
    ],
    href: "/productos",
  },
];

function ServiceCard({ image, title, items, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md"
      style={{
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(26,58,92,0.25)"
          : "0 4px 16px rgba(0,0,0,0.10)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Cuerpo */}
      <div
        className="flex flex-col flex-1 p-6 font-extrabold"
        style={{
          background: hovered
            ? "linear-gradient(135deg, #1a3a5c 0%, #1e5fa8 100%)"
            : "#ffffff",
          transition: "background 0.3s ease",
        }}
      >
        <h3
          className="text-lg font-extrabold tracking-wide uppercase text-center mb-4 "
          style={{ color: hovered ? "#ffffff" : "#1a3a5c" }}
        >
          {title}
        </h3>

        <ul className="flex-1 space-y-2 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: hovered ? "#d0e8ff" : "#374151" }}>
              <span
                className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: hovered ? "#facc15" : "#1e5fa8",
                  color: hovered ? "#1a3a5c" : "#ffffff",
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <a
            href={href}
            className="px-6 py-2 rounded-full font-bold text-sm"
            style={{
              background: "#facc15",
              color: "#1a3a5c",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Ver más →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Historia() {
  return (
    <section id="historia" className="bg-neutral-50">
      {/* Stats con imagen de fondo */}
      <div
        className="relative flex flex-col sm:flex-row flex-wrap justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative z-10 w-full flex flex-col sm:flex-row justify-center">
          <StatItem target={14} label="Años<br/>Experiencia" />
          <StatItem prefix="+" target={65} label="Proyectos<br/>Completados" />
          <StatItem prefix="+" target={180} label="Clientes<br/>Satisfechos" />
        </div>
      </div>

      {/* Cards */}
      <div className="bg-[#3a3a3a] py-16 px-6">
        <h2 className="text-center text-white font-extrabold text-2xl md:text-3xl tracking-wide uppercase mb-12">
          Descubre nuestras soluciones de<br />
          <span className="text-white">consultoría y construcción</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <ServiceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}