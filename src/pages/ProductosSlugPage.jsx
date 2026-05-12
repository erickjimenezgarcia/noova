import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ASESORES = [
  { nombre: "Asesor 1", telefono: "51999999991" },
  { nombre: "Asesor 2", telefono: "51999999992" },
];

const PRODUCTOS = {
  sonda_hilo_caliente: {
    imagenes: ["/productos/1.jpg", "/productos/2.jpg", "/productos/3.jpg", "/productos/4.jpg", "/productos/5.jpg"],
    titulo: "Sonda de hilo caliente (digital) - con Bluetooth® incl. sensor de humedad y temperatura",
    modelo: "Modelo 0635 1571",
    descripcion: "Para mediciones en canales de ventilación: Con la sonda de hilo caliente es posible medir la velocidad de flujo, el caudal volumétrico, la temperatura y la humedad del aire (con el analizador adecuado). Los valores medidos se transfieren directamente a su analizador a través de Bluetooth, así la medición es mucho más cómoda.",
    categoria: "EQUIPOS TESTO",
    caracteristicas: {
      titulo: "Sonda de hilo caliente con Bluetooth incl. sensor de humedad y temperatura",
      subtitulo: "Características:",
      items: [
        "Menú de medición claramente estructurado para el caudal volumétrico, así como la determinación paralela de la velocidad de flujo, el caudal volumétrico, la temperatura y la humedad del aire.",
        "Resultados de medición exactos entre 0 y +50 m/s y una compensación automática de la presión absoluta",
        "Conexión Bluetooth entre el analizador y la sonda con tecla práctica en la empuñadura para guardar distintos valores medidos.",
        "Concepto de calibración inteligente.",
        "Los valores medidos de la sonda de hilo caliente se transfieren a su analizador vía Bluetooth incluso a una distancia de 20 m.",
        "Protección del sensor integrada: Cuando no utilice la sonda de hilo caliente, la tapa de protección giratoria protege el sensor de flujo contra carga mecánica.",
      ],
    },
    data: [
      {
        titulo: "Datos Técnicos Generales",
        datos: [
          { label: "Nombre", value: "Sonda de hilo caliente" },
          { label: "Marca", value: "Testo" },
          { label: "Modelo", value: "0635 1571" },
        ],
      },
      {
        titulo: "NTC",
        datos: [
          { label: "Rango", value: "-20 hasta +70 °C" },
          { label: "Exactitud", value: "±0,5 ºC (0 hasta +70 ºC)\n±0,8 ºC (-20 hasta 0 ºC)" },
          { label: "Resolución", value: "0,1 °C" },
        ],
      },
      {
        titulo: "Humedad - capacitivo",
        datos: [
          { label: "Rango", value: "5 hasta 95 %HR" },
          { label: "Exactitud", value: "±3 %HR (10 hasta 35 %HR)\n±2 %HR (35 hasta 65 %HR)\n±3 %HR (65 hasta 90 %HR)\n±5 %HR (Resto rango)\nestabilidad a largo plazo: ±1 %HR / año\n±0,06 %HR/K (k=1)\nHystéresis: ±1,0 %HR" },
          { label: "Resolución", value: "0,1 %HR" },
        ],
      },
    ],
  },
};

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── PARTE 1: imagen principal + detalles ──────────────────────────────────────
function Parte1({ producto }) {
  const [idx, setIdx] = useState(0);
  const total = producto.imagenes.length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Título y modelo */}
      <h1 className="text-xl font-bold mb-1" style={{ color: "#1a6e8e" }}>
        {producto.titulo}
      </h1>
      <p className="text-sm text-gray-500 mb-8">{producto.modelo}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Galería */}
        <div>
          {/* Imagen principal */}
          <div
            className="border border-gray-200 rounded flex items-center justify-center mb-3"
            style={{ height: 380 }}
          >
            <img
              src={producto.imagenes[idx]}
              alt={producto.titulo}
              className="max-h-full max-w-full object-contain p-4"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 flex-wrap">
            {producto.imagenes.map((img, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="border rounded overflow-hidden transition-all"
                style={{
                  width: 70,
                  height: 70,
                  borderColor: i === idx ? "#1a6e8e" : "#e5e7eb",
                  borderWidth: i === idx ? 2 : 1,
                  padding: 2,
                  background: "white",
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Detalles */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Detalles</h2>
          <h3 className="text-base font-semibold text-gray-700 mb-2">Descripción del producto</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {producto.descripcion}
          </p>
          <p className="text-sm mb-6">
            <span className="font-bold text-gray-700">CATEGORÍA: </span>
            <span className="text-gray-500">{producto.categoria}</span>
          </p>

          {/* Botones asesores */}
          <div className="flex gap-3 flex-wrap">
            {ASESORES.map((a) => (
              <a
                key={a.nombre}
                href={`https://wa.me/${a.telefono}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full px-5 py-2 text-sm font-medium border transition-colors"
                style={{
                  borderColor: "#1a6e8e",
                  color: "#1a6e8e",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1a6e8e";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a6e8e";
                }}
              >
                <WhatsAppIcon />
                {a.nombre}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PARTE 2: características ──────────────────────────────────────────────────
function Parte2({ caracteristicas }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-lg font-bold text-gray-800 mb-1">
        {caracteristicas.titulo}
      </h2>
      <p className="text-sm font-semibold text-gray-700 mb-4">
        {caracteristicas.subtitulo}
      </p>
      <ul className="flex flex-col gap-3">
        {caracteristicas.items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="mt-0.5 flex-shrink-0" style={{ color: "#e0a020" }}>✔</span>
            <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── PARTE 3: datos técnicos ───────────────────────────────────────────────────
function Parte3({ data }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold mb-4 " style={{ color: "#1a6e8e" }} >
            Datos técnicos
        </h2>
      {data.map((grupo, gi) => (
        <div key={gi} className="mb-10">
          {/* Encabezado del grupo */}
          <div
            className="px-4 py-2 mb-0 rounded-t"
            style={{ background: "#d6e4ea" }}
          >
            <span className="text-sm font-semibold text-gray-700">
              {grupo.titulo}
            </span>
          </div>

          {/* Filas */}
          <table className="w-full text-sm border-collapse">
            <tbody>
              {grupo.datos.map((fila, fi) => (
                <tr
                  key={fi}
                  className="border-b"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <td
                    className="py-3 px-4 font-semibold text-gray-700 align-top"
                    style={{ width: "35%" }}
                  >
                    {fila.label}
                  </td>
                  <td className="py-3 px-4 text-gray-600 align-top whitespace-pre-line">
                    {fila.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default function ProductosSlugPage() {
  const { slug } = useParams();
  const producto = PRODUCTOS[slug];

  if (!producto)
    return <p className="text-center py-20 text-gray-500">Producto no encontrado.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Parte1 producto={producto} />
        <div className="border-t border-gray-100" />
        <Parte2 caracteristicas={producto.caracteristicas} />
        <div className="border-t border-gray-100" />
        <Parte3 data={producto.data} />
      </main>
      <Footer />
    </div>
  );
}