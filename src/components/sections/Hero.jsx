import { useState, useEffect } from "react";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const styles = `
    @keyframes cardSlideOut {
      from {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
      to {
        transform: translateX(100%) scale(1.08);
        opacity: 0;
      }
    }

    .card-out {
      animation: cardSlideOut 2000ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `;

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      // sin texto
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Construimos el futuro",
      subtitle: "con excelencia",
      description:
        "Empresa especializada en proyectos de construcción residencial, comercial e industrial.",
      button: { label: "Ver proyectos", link: "#proyectos" },
    },    
    {
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      title: "Calidad y confianza",
      subtitle: "con excelencia",
      description: "Más de 20 años construyendo proyectos de alto nivel.",
      button: { label: "Contáctanos", link: "#contacto" },
    },
  ];

  // autoplay - reinicia cada vez que cambia el slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      const nextIndex = (current + 1) % slides.length;
      setNextSlide(nextIndex);
      setTimeout(() => {
        setCurrent(nextIndex);
        setIsTransitioning(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, slides.length]);

  const slide = slides[current];

  return (
    <>
      <style>{styles}</style>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">

      {/* Fondo dinámico - Efecto baraja */}
      <div className="absolute inset-0">
        {/* Imagen de atrás (siguiente seleccionada) */}
        <img
          src={slides[nextSlide].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Imagen de adelante (actual) */}
        <img
          key={current}
          src={slide.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${
            isTransitioning ? 'card-out' : ''
          }`}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-primary-900/80" />
      </div>

      {/* CONTENIDO */}
      {slide.title && (
        <>
        <div className={`relative z-10 text-white px-6 max-w-5xl mx-auto w-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-2xl text-left">
          
          {/* Subtítulo pequeño */}
<p className="text-sm md:text-base uppercase tracking-wider text-white/70 mb-2">
  {slide.subtitle || ""}
</p>

{/* Título principal */}
<h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
  {slide.title}
</h1>

{/* Línea decorativa */}
<div className="w-20 h-1 bg-yellow-400 mb-6"></div>

{/* Descripción */}
{slide.description && (
  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
    {slide.description}
  </p>
)}

{/* Botón estilo outline */}
{slide.button && (
  <a
    href={slide.button.link}
    className="inline-block border border-white/40 px-8 py-3 rounded-full text-white
               hover:bg-white hover:text-primary-800 transition-all duration-300"
  >
    {slide.button.label}
  </a>
          )}
        </div>
        </div>
        </>
      )}

      {/* INDICADORES */}
      <div className="absolute bottom-8 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setNextSlide(i);
              setTimeout(() => {
                setCurrent(i);
                setIsTransitioning(false);
              }, 800);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
    </>
  );
}
