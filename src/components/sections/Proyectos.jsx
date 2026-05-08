"use client";
import { useState, useEffect } from "react";

const PROYECTOS = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    titulo: "Proyecto de Ventilación U.M Yaruchahua – Glore Peru S.A.C",
    fecha: "Marzo 2020",
    cliente: "GLORE PERU S.A.C",
    href: "#",
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    titulo: "Proyecto de Bombeo U.M Aguilar – Compañía Minera Aguilar S.A",
    fecha: "Mayo 2018",
    cliente: "Minera Aguilar",
    href: "#",
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    titulo: "Proyecto de Bombeo U.M Santander – Glencore Trevali",
    fecha: "Mayo 2018",
    cliente: "LosQuenuales",
    href: "#",
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    titulo: "Proyecto de Ventilación U.M San Vicente – Pan American Silver Bolivia S.A",
    fecha: "Septiembre 2015",
    cliente: "Pan American Silver",
    href: "#",
  },
  {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    titulo: "Proyecto de Drenaje U.M Cerro Lindo – Nexa Resources S.A.A",
    fecha: "Enero 2020",
    cliente: "Nexa Resources",
    href: "#",
  },
  {
    id: 6,
    imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    titulo: "Proyecto de Ventilación U.M Coripuno – Coripuno S.A.C",
    fecha: "Julio 2019",
    cliente: "Coripuno S.A.C",
    href: "#",
  },
  {
    id: 7,
    imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    titulo: "Proyecto de Bombeo U.M Yauricocha – Sierra Metals INC",
    fecha: "Marzo 2021",
    cliente: "Sierra Metals",
    href: "#",
  },
  {
    id: 8,
    imagen: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    titulo: "Proyecto Integral U.M Atacocha – Milpo S.A.A",
    fecha: "Noviembre 2017",
    cliente: "Milpo S.A.A",
    href: "#",
  },
];

function usePerPage() {
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

function ProyectoCard({ imagen, titulo, fecha, cliente, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={href}
        className="relative block overflow-hidden rounded-sm h-75"
      >
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(10,30,60,0.45)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#1a3a5c]/90 px-3 py-2 text-center">
          <p className="text-white/70 text-[10px] tracking-widest uppercase">{fecha}</p>
          <p className="text-white font-bold text-xs truncate">{cliente}</p>
        </div>
      </a>

      <div className="mt-3 mb-2">
        <a
          href={href}
          className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-white"
          style={{
            background: hovered ? "#1e5fa8" : "#1a3a5c",
            transition: "background 0.2s ease",
          }}
        >
          Ver Proyecto
        </a>
      </div>

      <a href={href}>
        <p
          className="text-sm font-semibold uppercase leading-snug cursor-pointer"
          style={{
            color: hovered ? "#1e5fa8" : "#1a1a1a",
            transition: "color 0.2s ease",
          }}
        >
          {titulo}
        </p>
      </a>
    </div>
  );
}

export default function Proyectos() {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  // Resetear página al cambiar perPage para evitar páginas vacías
  useEffect(() => { setPage(0); }, [perPage]);

  const totalPages = Math.ceil(PROYECTOS.length / perPage);
  const visible = PROYECTOS.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="proyectos" className="py-5 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-[#1a3a5c] font-extrabold text-2xl md:text-3xl tracking-widest uppercase ">
          Nuestros Proyectos
        </h2>

        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-9 h-9 border border-neutral-300 flex items-center justify-center text-neutral-500 hover:border-[#1a3a5c] hover:text-[#1a3a5c] disabled:opacity-30 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-9 h-9 border border-neutral-300 flex items-center justify-center text-neutral-500 hover:border-[#1a3a5c] hover:text-[#1a3a5c] disabled:opacity-30 transition-colors"
          >
            ›
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((p) => (
            <ProyectoCard key={p.id} {...p} />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="w-2.5 h-2.5 rounded-full transition-colors"
              style={{ background: i === page ? "#1a3a5c" : "#d1d5db" }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}