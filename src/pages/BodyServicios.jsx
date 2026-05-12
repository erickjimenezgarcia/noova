import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

const catalogos = [
  {
    id: 1,
    img: "/servicios/equipos.png",
    titulo: "Catálogo de Equipos",
    url: "/servicios/equipos",
  },
  {
    id: 2,
    img: "/servicios/equipos.png",
    titulo: "Catálogo de Calibración de Equipos",
    url: "/servicios/calibracion",
  },
  {
    id: 3,
    img: "/servicios/equipos.png",
    titulo: "Catálogo de ductos",
    url: "/servicios/ductos",
  },
  {
    id: 4,
    img: "/servicios/equipos.png",
    titulo: "Consultoría de ductos",
    url: "/servicios/ductos",
  },
  {
    id: 5,
    img: "/servicios/equipos.png",
    titulo: "Catálogo de ductos",
    url: "/servicios/ductos",
  },
  {
    id: 6,
    img: "/servicios/equipos.png",
    titulo: "Catálogo de ductos",
    url: "/servicios/ductos",
  }
];


function CatalogoCard({ cat }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center"
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(cat.url)}  // ← toda la card navega
    >
      <div className="w-full rounded overflow-hidden relative" style={{ height: 200 }}>
        <img
          src={cat.img}
          alt={cat.titulo}
          className="w-full h-full object-cover"
          style={{
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            transition: "opacity 0.4s ease",
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      <p className="text-center font-bold text-base mt-4 mb-3 text-gray-800">
        {cat.titulo}
      </p>

      <Link to={cat.url} onClick={(e) => e.stopPropagation()}>
        <button
          className="rounded font-semibold px-7 py-2 text-sm"
          style={{
            transition: "background 0.3s ease, color 0.3s ease",
            background: hovered ? "#f0c040" : "#1a6e8e",
            color: hovered ? "#1a3a4a" : "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Ver catálogo
        </button>
      </Link>
    </div>
  );
}

export default function BodyServicios() {
  return (
    <section className="py-16 px-6 h-full" style={{ background: "#f3f4f6" }}>
      <div
        className="grid mx-auto gap-8"
        style={{
          maxWidth: 960,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {catalogos.map((cat) => (
          <CatalogoCard key={cat.id} cat={cat} />
        ))}
      </div>
    </section>
  );
}