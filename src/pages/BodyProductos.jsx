import { useState, useEffect } from "react";
import HeroBanner from "../components/layout/HeroBanner";

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
      },
      {
        id: 2,
        imagenes: ["/productos/4.jpg"],
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
    <div className="flex flex-col items-center w-80">
      {/* Carrusel */}
      <div className="relative flex items-center justify-center w-full" style={{ minHeight: 280 }}>
        <button
          onClick={prev}
          className="absolute left-0 text-3xl text-gray-400 hover:text-gray-600 px-2" 
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ‹
        </button>

        <img
          src={producto.imagenes[idx]}
          alt={producto.titulo}
          className="object-contain"
          style={{ width: 200, height: 240 }}
        />

        <button
          onClick={next}
          className="absolute right-0 text-3xl text-gray-400 hover:text-gray-600 px-2" 
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-3 mb-4"> 
        {producto.imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="rounded-full transition-colors"
            style={{
              width: 10, 
              height: 10, 
              background: i === idx ? "#1a6e8e" : "#ccc",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      <h3
        className="text-center font-bold text-lg mb-2"
        style={{ color: "#1a6e8e" }}
      >
        {producto.titulo}
      </h3>
      {producto.descripcion && (
        <p className="text-center text-sm text-gray-500 mb-2">
          {producto.descripcion}
        </p>
      )}
      <p className="text-center text-sm text-gray-500 mb-4"> 
        Código: {producto.codigo}
      </p>

      <button
        className="rounded-full px-8 py-3 text-sm font-semibold tracking-wider transition-colors" 
        style={{
          border: "2px solid #1a6e8e",
          color: "#1a6e8e",
          background: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1a6e8e";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "none";
          e.currentTarget.style.color = "#1a6e8e";
        }}
      >
        MÁS INFORMACIÓN
      </button>
    </div>
  );
}

function SeccionDistribuidor({ grupo }) {
  return (
    <section className="py-10 px-6">
      <div
        className="mx-auto"
        style={{ maxWidth: 860 }}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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