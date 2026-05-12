import { useState, useEffect } from "react";
import HeroBanner from "../components/layout/HeroBanner";
import { Link } from "react-router-dom";

const SLIDES = [
  { img: "/contactanos.png", title: "Nuestros Productos" },
];

const valores = [
  {
    distribuidor: "GLS",
    productos: [
      {
        id: 1,
        imagenes: ["/productos/1.jpg", "/productos/2.jpg", "/productos/3.jpg"],
        titulo: "Bombeo U.E.A. Kani",
        descripcion: "Bombeo U.E.A. Kani es un bombeo de alta calidad",
        codigo: "BOMBEO-KANI",
        url: "/productos/sonda_hilo_caliente",
      },
      {
        id: 2,
        imagenes: ["/productos/4.jpg","/productos/2.jpg", "/productos/3.jpg"],
        titulo: "Bombeo U.E.A. Kolpa",
        descripcion: null,
        codigo: "BOMBEO-KOLPA",
      },
      {
        id: 5,
        imagenes: ["/productos/4.jpg"],
        titulo: "Bombeo U.E.A. Kolpa",
        descripcion: null,
        codigo: "BOMBEO-KOLPA",
      },
      {
        id: 6,
        imagenes: ["/productos/4.jpg"],
        titulo: "Bombeo U.E.A. Kolpa",
        descripcion: null,
        codigo: "BOMBEO-KOLPA",
      },
    ],
  },
  {
    distribuidor: "Testo",
    productos: [
      {
        id: 3,
        imagenes: ["/productos/5.jpg", "/productos/6.jpg", "/productos/7.jpg"],
        titulo: "Testo U.E.A. Kani",
        descripcion: "Testo U.E.A. Kani es un bombeo de alta calidad",
        codigo: "BOMBEO-KANI-TESTO",
      },
      {
        id: 4,
        imagenes: ["/productos/8.jpg"],
        titulo: "Bombeo U.E.A. Kolpa",
        descripcion: null,
        codigo: "BOMBEO-KOLPA-TESTO",
      },
      {
        id: 8,
        imagenes: ["/productos/4.jpg"],
        titulo: "Bombeo U.E.A. Kolpa",
        descripcion: null,
        codigo: "BOMBEO-KOLPA",
      },
    ],
  },
];


function ProductCard({ producto }) {
  const [idx, setIdx] = useState(0);
  const total = producto.imagenes.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="flex flex-col items-center">
      
      {/* Caja de imagen con flechas contenidas adentro */}
      <div className="relative w-full overflow-hidden bg-white" style={{ height: 260 }}>
        
        <img
          src={producto.imagenes[idx]}
          alt={producto.titulo}
          className="absolute inset-0 w-full h-full object-contain p-8"
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-500 hover:text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-lg transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-500 hover:text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-lg transition"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex gap-2 mt-3 mb-3">
          {producto.imagenes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="rounded-full transition-colors p-0"
              style={{
                width: 10, height: 10,
                background: i === idx ? "#1a6e8e" : "#ccc",
                border: "none", cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      <h3 className="text-center font-bold text-lg mb-2 mt-2" style={{ color: "#1a6e8e" }}>
        {producto.titulo}
      </h3>
      {producto.descripcion && (
        <p className="text-center text-sm text-gray-500 mb-2">{producto.descripcion}</p>
      )}
      <p className="text-center text-sm text-gray-500 mb-4">Código: {producto.codigo}</p>
      <Link to={producto.url} onClick={(e) => e.stopPropagation()}>
      <button
        className="rounded-full px-8 py-3 text-sm font-semibold tracking-wider transition-colors"
        style={{ border: "2px solid #1a6e8e", color: "#1a6e8e", background: "none", cursor: "pointer" }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#1a6e8e"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1a6e8e"; }}
      >
        MÁS INFORMACIÓN
      </button>
      </Link>
    </div>
  );
}

function SeccionDistribuidor({ grupo }) {
  return (
    <section className="py-10 px-6">
      <div
        className="mx-auto"
        style={{ maxWidth: 1100  }}
      >
        <h2
          className="text-2xl  font-bold mb-8"
          style={{ color: "#1a6e8e" }}
        >
          {grupo.distribuidor}
        </h2>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {grupo.productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BodyProductos() {  

  return (
    <>      
      <HeroBanner slides={SLIDES} />
      {valores.map((grupo) => (
        <SeccionDistribuidor key={grupo.distribuidor} grupo={grupo} />
      ))}
    </>
  );
}