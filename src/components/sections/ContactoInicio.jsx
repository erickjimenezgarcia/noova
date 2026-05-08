export default function ContactoInicio() {
  return (
    <section id="contacto" className="relative overflow-hidden min-h-[500px] md:min-h-[600px]">

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto px-10 py-40 flex items-center relative z-10">
        
        {/* Texto izquierda */}
        <div className="max-w-md ">
          <h2 className="text-[#1a3a5c] font-extrabold text-3xl md:text-4xl mb-4">
            Contáctanos
          </h2>

          <p className="text-neutral-500 text-sm md:text-base mb-8 leading-relaxed">
            Contáctanos y uno de nuestros asesores se pondrá en contacto contigo lo antes posible.
          </p>

          <a
            href="#formulario"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "#1a3a5c" }}
          >
            Contactar <span>→</span>
          </a>
        </div>
      </div>

      {/* IMAGEN FUERA DEL CONTAINER */}
      <div className="absolute right-0 bottom-0 h-full w-[55%] hidden md:block">
        <img
          src="/Ingenieros_Contactanos.png"
          alt="Ingenieros"
          className="h-full w-full object-contain object-right-bottom"
        />
      </div>
    </section>
  );
}