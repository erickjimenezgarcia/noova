import { useParams } from "react-router-dom";
import { Download } from "lucide-react";
import PdfFlipbook from "../components/layout/PdfFlipbook";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/layout/HeroBanner";
import { useState } from "react";


const PROYECTOS = {
  glore: {
    img: "/proyectos/yauricocha.jpg",
    titulo: "Estudio Integral de Prefactibilidad Técnica y Económica del Sistema de Bombeo y Drenaje U.M. Acumulación Yauricocha",
    secciones: [
      { id: "a", texto: "Rediseño del sistema de bombeo y drenaje de la U.M. Acumulación Yauricocha a un nivel de estudio de ingeniería de prefactibilidad con el propósito de unificar las minas Central y Cachi Cachi a través del Cx 5000 en el Nv 1070." },
      { id: "b", texto: "Levantamiento de campo a detalle de la red de bombeo y drenaje, caracterización del sistema actual e identificación de los puntos críticos de la operación minera." },
      { id: "c", texto: "Modelamiento hidráulico del sistema de drenaje y simulación de escenarios para la proyección de caudales en función al plan de minado." },
      { id: "d", texto: "Evaluación técnico-económica de las alternativas de solución propuestas, incluyendo análisis de costos de capital (CAPEX) y costos operativos (OPEX)." },
      { id: "e", texto: "Elaboración del informe final de prefactibilidad con recomendaciones para la fase de ingeniería básica y criterios de diseño para la implementación del nuevo sistema." },
    ],
    detalles: {
      empresa: "Sierra Metals Inc.",
      mina: "U.M. Yauricocha",
      ubicacion: "Alis, Yauyos, Lima, Perú",
      fecha: "Julio 2021",
      videoId: "yRPf2_1yUeU",
    },    
  },
  mineria: {
    titulo: "Catálogo de Calibración de Equipos",
    subtitulo:"Servicio integral del Sistema de ventilación, teniendo como principales objetivos optimizar el sistema actual y ofrecer oportunidades de diseño. Sin perder el enfoque de la productividad, seguridad, sensibilidad financiera y salud de los trabajadores en general.",
    
  },
  quenuales: {
    titulo: "Catálogo de Ductos",
    subtitulo:"Servicio integral del Sistema de ventilación, teniendo como principales objetivos optimizar el sistema actual y ofrecer oportunidades de diseño. Sin perder el enfoque de la productividad, seguridad, sensibilidad financiera y salud de los trabajadores en general.",
    img: "/contactanos.png",
  },
};

const SLIDES = [
  {
    img: "/contactanos.png",
    title: "Proyectos",

  },
];


function VideoModal({ videoId, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#111] rounded-xl overflow-hidden w-[90%] max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a]">
          <span className="text-white/70 text-sm">Video del proyecto</span>
          <button
            onClick={onClose}
            className="text-white bg-white/10 hover:bg-white/20 rounded-full w-7 h-7 flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>
        <div className="relative pb-[56.25%] h-0">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProyectosSlugPage() {
  const { slug } = useParams();
  const proyecto = PROYECTOS[slug];
  const [modalAbierto, setModalAbierto] = useState(false);
  const [lightboxAbierto, setLightboxAbierto] = useState(false);



  if (!proyecto) return <p className="text-center py-20">Proyecto no encontrado.</p>;

  const { img, titulo, secciones, detalles } = proyecto;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mb-16 mt">
        <HeroBanner slides={SLIDES} />

        {/* Imagen del proyecto - fila 1 */}
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center gap-3">
          <img
            src={img}
            alt="Imagen del proyecto"
            className="w-full h-auto object-contain rounded-lg cursor-pointer shadow-md"
            onClick={() => setLightboxAbierto(true)}
          />
        </div>

        {/* Contenido - fila 2 */}
        <div className="max-w-6xl mx-auto border-t-4 border-orange-500 grid grid-cols-1 lg:grid-cols-[1fr_280px]">

          {/* Columna izquierda: título + secciones */}
          <div className="p-8 lg:border-r border-gray-200">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-800 mb-6 max-w-xl leading-snug">
              {titulo}
            </h2>
            <div className="flex flex-col gap-4">
              {secciones.map(({ id, texto }) => (
                <div key={id} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-medium mt-0.5">
                    {id}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: detalles */}
          <div className="bg-orange-500 p-6 flex flex-col gap-0">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/60 border-b border-white/25 pb-3 mb-4">
              Detalles del proyecto
            </p>
            <div className="flex flex-col gap-4 flex-1">
              {[
                { label: "Empresa", value: detalles.empresa },
                { label: "Mina", value: detalles.mina },
                { label: "Ubicación", value: detalles.ubicacion },
                { label: "Fecha", value: detalles.fecha },
              ].map(({ label, value }) => (
                <div key={label} className="border-t border-white/20 pt-4 first:border-0 first:pt-0">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-0.5">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              ))}

              <div className="border-t border-white/20 pt-4 mt-auto">
                <button
                  onClick={() => setModalAbierto(true)}
                  className="w-full bg-white/15 hover:bg-white/25 border border-white/40 text-white text-sm font-medium py-2.5 rounded-md flex items-center justify-center gap-2 transition"
                >
                  ▶ Ver video del proyecto
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {modalAbierto && (
        <VideoModal
          videoId={detalles.videoId}
          onClose={() => setModalAbierto(false)}
        />
      )}

      {lightboxAbierto && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center gap-4 p-6"
    onClick={() => setLightboxAbierto(false)}
  >
    <button
      className="absolute top-4 right-5 text-white/60 hover:text-white text-3xl leading-none"
      onClick={() => setLightboxAbierto(false)}
    >
      ✕
    </button>
    <img
      src={img}
      alt="Imagen del proyecto"
      className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
    <p className="text-white/70 text-sm text-center max-w-xl">{titulo}</p>
  </div>
)}
    </div>
  );
}