export default function BodyNosotros() {

    const VALORES = [
        { label: "Seguridad",        icon: "/seguridad.png" },
        { label: "Responsabilidad",  icon: "/responsabilidad.png" },
        { label: "Compromiso",       icon: "/compromiso.png" },
        { label: "Innovación",       icon: "/innovacion.png" },
        { label: "Eficiencia",       icon: "/eficiencia.png" },
        { label: "Trabajo en equipo",icon: "/team.png" },
        { label: "Integridad",       icon: "/integridad.png" },
    ];

        // Layout: filas de 3 con la última centrada
        const ROW1 = VALORES.slice(0, 3);
        const ROW2 = VALORES.slice(3, 6);
        const ROW3 = VALORES.slice(6);

        function ValorCell({ valor, borderRight, borderBottom }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 px-6 gap-4 group transition-all duration-300"
      style={{
        borderRight: borderRight ? "1px solid #ddd" : "none",
        borderBottom: borderBottom ? "1px solid #ddd" : "none",
      }}
    >
      <img
        src={valor.icon}
        alt={valor.label}
        className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-125"
      />
      <span
        className="text-sm font-bold text-center text-[#333] transition-colors duration-300 group-hover:text-[#00B5B5]"
      >
        {valor.label}
      </span>
    </div>
  );
}

    return (
        <>
            <section className="bg-gray-50 py-10">

                {/* SECTOR 1: Acerca de Nosotros */}
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Columna izquierda: texto */}
                        <div className="flex flex-col items-center lg:items-start">
                            <h2
                                className="text-3xl font-black uppercase mb-4 text-center lg:text-left"
                                style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Acerca de Nosotros
                            </h2>

                            <p
                                className="text-sm leading-relaxed mb-10 text-center lg:text-justify"
                                style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
                            >
                                NOOVA SAC aporta años de experiencia a la ventilación de minas y
                                túneles, favoreciendo el óptimo ambiente de trabajo.
                            </p>

                            {/* Número 14 imagen */}
                            <div className="flex flex-col items-center justify-center w-full mb-10">
                                <img
                                    src="/aniosExp.png"
                                    alt="14 años de experiencia"
                                    className="h-40 object-contain"
                                />
                            </div>

                            <p
                                className="text-sm leading-relaxed text-center lg:text-justify"
                                style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Optimizando recursos, elevando eficiencia y garantizando la
                                seguridad en minas subterráneas. Trabajamos en colaboración con
                                nuestros clientes, estén donde estén, para ofrecer soluciones
                                sostenibles y personalizadas.
                            </p>
                        </div>

                        {/* Columna derecha: imagen */}
                        <div className="flex justify-center lg:justify-center">
                            <img
                                src="/nosotrosimg1.png"
                                alt="Equipo NOOVA"
                                className="w-full max-w-lg rounded-2xl object-cover shadow-lg transition-transform duration-100 hover:scale-95"
                            />
                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Columna izquierda: imagen */}
                    <div className="flex justify-center">
                        <img
                        src="/nosotrosimg2.png"
                        alt="Nuestra Historia"
                        className="w-full max-w-lg rounded-3xl object-cover shadow-lg transition-transform duration-300 hover:scale-95"
                        />
                    </div>

                    {/* Columna derecha: texto */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2
                        className="text-3xl font-black uppercase mb-6 text-center lg:text-left"
                        style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}
                        >
                        Nuestra Historia
                        </h2>

                        <p
                        className="text-sm leading-relaxed mb-6 text-center lg:text-justify"
                        style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
                        >
                        Contratistas Generales NOOVA Sociedad Anónima Cerrada, se constituye el 07
                        de junio en el año 2012, como una alternativa para diseñar y proponer mejoras a
                        las condiciones ambientales de trabajo, así como en la extracción de los
                        minerales de forma eficaz, que permita a los colaboradores de la diversidad de
                        industrias a trabajar con estándares de seguridad, calidad y salud ocupacional.
                        </p>

                        <p
                        className="text-sm leading-relaxed mb-6 text-center lg:text-justify"
                        style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
                        >
                        Si bien es cierto que somos una empresa relativamente nueva, tenemos máximo
                        respeto por los estándares internacionales y normativas nacionales de cada
                        país; interesándonos en aplicar en nuestros proyectos mineros para estar al nivel
                        de la clase mundial con tecnología.
                        </p>

                        <p
                        className="text-sm leading-relaxed text-center lg:text-justify"
                        style={{ color: "#444", fontFamily: "'Montserrat', sans-serif" }}
                        >
                        La minería en nuestra región, se considera como la principal actividad de los
                        recursos naturales extracción y beneficio, que se constituye ahora, para más
                        adelante producir productos acabados con la tecnología de última generación,
                        utilizando las herramientas y posicionarnos en el mercado industrial mundial. Se
                        implementan como parte de nuestros servicios, las mejores alternativas y
                        experiencias de nuestros consultores nacionales y extranjeros.
                        </p>
                    </div>

                    </div>
                </div>
                </section>
                <section className="border-t border-gray-200">

  {/* MISIÓN */}
  <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
    {/* Izquierda: ícono + título */}
    <div
      className="flex flex-col items-center justify-center py-2 px-8 gap-4"
      style={{ backgroundColor: "#00b5b5" }}
    >
      {/* Ícono misión */}
      <img src="/Icono-Mision.png" alt="14 años de experiencia" className="w-16 h-16" />
      <h3
        className="text-xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Misión
      </h3>
    </div>

    {/* Derecha: texto */}
    <div
      className="flex items-center px-12 py-12"
      style={{ backgroundColor: "#f0fafa" }}
    >
      <p
        className="text-sm leading-relaxed text-justify"
        style={{ color: "#333", fontFamily: "'Montserrat', sans-serif" }}
      >
        Brindar soluciones a través de nuestros proyectos, cumpliendo los requerimientos
        y necesidades de nuestros clientes, con la fortaleza para lograr objetivos con
        seguridad, calidad y el control del medio ambiente.
      </p>
    </div>
  </div>

  {/* Divisor */}
  <div style={{ borderTop: "1px solid #ccc" }} />

  {/* VISIÓN */}
  <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
    {/* Izquierda: ícono + título */}
    <div
      className="flex flex-col items-center justify-center py-2 px-8 gap-4"
      style={{ backgroundColor: "#00b5b5" }}
    >
      <img src="/Icono-Vision.png" alt="14 años de experiencia" className="w-16 h-16" />
      <h3
        className="text-xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Visión
      </h3>
    </div>

    {/* Derecha: texto */}
    <div
      className="flex items-center px-12 py-12"
      style={{ backgroundColor: "#f0fafa" }}
    >
      <p
        className="text-sm leading-relaxed text-justify"
        style={{ color: "#333", fontFamily: "'Montserrat', sans-serif" }}
      >
        Ser una de las 10 mejores empresas internacionales de ventilación y bombeo
        para el año 2025, realizando consultorías de ventilación y bombeo en el rubro
        minero e industrial.
      </p>
    </div>
  </div>

</section>

<section className="bg-gray-50 py-10">
  <div className="max-w-4xl mx-auto px-8">

    {/* Título */}
    <div className="text-center mb-12">
      <h2
        className="text-3xl font-black uppercase mb-4"
        style={{ color: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}
      >
        Nuestros Valores
      </h2>
      <p
        className="text-sm leading-relaxed max-w-2xl mx-auto"
        style={{ color: "#666", fontFamily: "'Montserrat', sans-serif" }}
      >
        En NOOVA S.A.C. estamos comprometidos con el trabajo seguro, cumpliendo estrictamente
        los estándares y procedimientos. Trabajamos juntos para encontrar la mejor solución,
        respetando las ideas de los demás con integridad y eficiencia.
      </p>
    </div>

    {/* Grid de valores */}
    <div style={{ border: "1px solid #ddd" }}>

  {/* Mobile: lista vertical simple */}
  <div className="flex flex-col lg:hidden">
    {VALORES.map((v, i) => (
      <div
        key={v.label}
        className="flex flex-col items-center justify-center py-10 px-6 gap-4"
        style={{ borderBottom: i < VALORES.length - 1 ? "1px solid #ddd" : "none" }}
      >
        <img src={v.icon} alt={v.label} className="w-14 h-14 object-contain" />
        <span className="text-sm font-bold text-center" style={{ color: "#333", fontFamily: "'Montserrat', sans-serif" }}>
          {v.label}
        </span>
      </div>
    ))}
  </div>

  {/* Desktop: grid 3 columnas */}
  <div className="hidden lg:block">
    {/* Fila 1 */}
    <div className="grid grid-cols-3">
      {VALORES.slice(0, 3).map((v, i) => (
        <ValorCell key={v.label} valor={v} borderRight={i < 2} borderBottom />
      ))}
    </div>
    {/* Fila 2 */}
    <div className="grid grid-cols-3">
      {VALORES.slice(3, 6).map((v, i) => (
        <ValorCell key={v.label} valor={v} borderRight={i < 2} borderBottom />
      ))}
    </div>
    {/* Fila 3: Integridad centrada */}
    <div className="grid grid-cols-3">
      <div />
      <ValorCell valor={VALORES[6]} borderRight={false} borderBottom={false} />
      <div />
    </div>
  </div>

</div>
  </div>
</section>

        </>
    );
}