import { useParams } from "react-router-dom";
import { Download } from "lucide-react";
import PdfFlipbook from "../components/layout/PdfFlipbook";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/layout/HeroBanner";
import ContactoInicio from "../components/sections/ContactoInicio";

const CATALOGOS = {
  equipos: {
    titulo: "Catálogo de Equipos",
    subtitulo:"Servicio integral del Sistema de ventilación, teniendo como principales objetivos optimizar el sistema actual y ofrecer oportunidades de diseño. Sin perder el enfoque de la productividad, seguridad, sensibilidad financiera y salud de los trabajadores en general.",
    img: "/contactanos.png",
    pdfUrl: "/pdfs/equipos.pdf",
    lcontacto:true
  },
  calibracion: {
    titulo: "Catálogo de Calibración de Equipos",
    subtitulo:"Servicio integral del Sistema de ventilación, teniendo como principales objetivos optimizar el sistema actual y ofrecer oportunidades de diseño. Sin perder el enfoque de la productividad, seguridad, sensibilidad financiera y salud de los trabajadores en general.",
    img: "/contactanos.png",
    pdfUrl: "/pdfs/equipos.pdf",
    lcontacto:true
  },
  ductos: {
    titulo: "Catálogo de Ductos",
    subtitulo:"Servicio integral del Sistema de ventilación, teniendo como principales objetivos optimizar el sistema actual y ofrecer oportunidades de diseño. Sin perder el enfoque de la productividad, seguridad, sensibilidad financiera y salud de los trabajadores en general.",
    img: "/contactanos.png",
    pdfUrl: "/pdfs/equipos.pdf",
    lcontacto:false
  },
};

export default function CatalogoPage() {
  const { slug } = useParams();
  const catalogo = CATALOGOS[slug];

  const SLIDES = [
  {
    img: catalogo.img,
    title: catalogo.titulo,

  },
];

  if (!catalogo) return <p className="text-center py-20">Catálogo no encontrado.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner slides={SLIDES} />
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">

          <p className="text-1xl text-gray-800 text-center">
            {catalogo.subtitulo}
          </p>

          <div className="w-full rounded-2xl overflow-hidden">
            <PdfFlipbook pdfUrl={catalogo.pdfUrl} />
          </div>

          <a
            href={catalogo.pdfUrl}
            download
            className="flex items-center gap-2 bg-primary-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition shadow-md"
          >
            <Download size={18} />
            Descargar PDF
          </a>

        </div>
        {catalogo.lcontacto && (
          <ContactoInicio />
        )}

      </main>
      <Footer />
    </div>
  );
}