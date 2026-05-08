import { useState, useEffect } from "react";

export default function HeroBanner({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(1); }
          to   { transform: scale(1.1); }
        }
        .zoom-active { animation: zoomIn 6s ease-in-out forwards; }
      `}</style>

      <section className="relative w-full h-72 md:h-96 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className={`w-full h-full object-cover ${i === current ? "zoom-active" : ""}`}
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
            <div className="absolute inset-0 flex items-center justify-center px-12 md:px-24">
              <div className="flex flex-col items-center">
                <h1
                  className="text-3xl md:text-4xl font-black uppercase text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {slide.title}
                </h1>
                <div className="mt-2 h-1 w-32 rounded" style={{ backgroundColor: "#f0c040" }} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}