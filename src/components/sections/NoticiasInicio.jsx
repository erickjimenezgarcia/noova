const noticias = [
  {
    id: 1,
    titulo: "Curso Internacional Ventilación Subterránea en 3D",
    fecha: "Febrero 21, 2026",
    extracto:
      "En un entorno minero cada vez más exigente, la seguridad y la eficiencia operativa dependen directamente de un sistema de ventilación robusto. Por ello, en NOOVA Consulting, nos complace anunciar el próximo Curso Internacional de Ventilación Subterránea en 3D, un programa diseñado específicamente para supervisores y líderes de proyectos que buscan dominar el diseño y la gestión de riesgos críticos.",
    imagen: null,
    destacada: true,
  },
  {
    id: 2,
    titulo: "Participación de Noova en el Congreso Nacional de Minería CONAMIN 2024",
    fecha: "Junio 28, 2024",
    imagen: null,
  },
  {
    id: 3,
    titulo: "II Congreso Internacional de Minería - UNCP",
    fecha: "Mayo 17, 2024",
    imagen: null,
  },
];

const galeriaItems = [
  { id: 1, titulo: "Visita Técnica U.E.A. Ticlio", imagen: null },
  { id: 2, titulo: "Consultoría de Ventilación U.E.A. Kani", imagen: null },
  { id: 3, titulo: "Consultoría de Ventilación U.E.A. Kolpa", imagen: null },
];

export default function NoticiasInicio() {
  const destacada = noticias.find((n) => n.destacada);
  const menores = noticias.filter((n) => !n.destacada);

  return (
    <section className="mx-auto px-5 py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto">
      {/* Título */}
      <h2 className="font-bold text-3xl text-[#1a3a5c] border-b-2 border-blue-500 inline-block pb-2 mb-7">
        Últimas Noticias
      </h2>

      {/* Layout principal */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-7">

        {/* ── Columna izquierda ── */}
        <div>
          {/* Noticia destacada */}
          {destacada && (
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-6">
              {/* Imagen */}
              <div className="h-64 bg-gradient-to-br from-[#0d2b4e] to-[#1a5276] flex items-center justify-center">
                {destacada.imagen ? (
                  <img
                    src={destacada.imagen}
                    alt={destacada.titulo}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black text-3xl uppercase text-center px-10 py-6 rounded-md leading-tight">
                    <span className="block text-xs font-semibold tracking-widest text-blue-200 mb-2">
                      Curso Internacional
                    </span>
                    VENTILACIÓN
                    <br />
                    SUBTERRÁNEA EN 3D
                  </div>
                )}
              </div>

              {/* Cuerpo */}
              <div className="px-6 py-5">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  {destacada.titulo}
                </h3>
                <p className="text-gray-400 text-sm italic mb-3 flex items-center gap-1">
                  📅 {destacada.fecha}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {destacada.extracto}
                </p>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                  Ver más ›
                </a>
              </div>
            </article>
          )}

          {/* Grid noticias menores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {menores.map((n) => (
              <article
                key={n.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="h-36 bg-gradient-to-br from-[#0d2b4e] to-[#1a5276] flex items-center justify-center p-3 text-white font-bold text-sm text-center">
                  {n.imagen ? (
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{n.titulo}</span>
                  )}
                </div>
                <div className="px-4 py-4">
                  <h4 className="font-bold text-sm text-blue-600 leading-snug mb-2">
                    {n.titulo}
                  </h4>
                  <p className="text-gray-400 text-xs italic mb-3">📅 {n.fecha}</p>
                  <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">
                    Ver más ›
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── Sidebar galería ── */}
        <aside className="bg-[#1a3a5c] rounded-lg overflow-hidden h-fit">
          <div className="bg-[#0d2b4e] text-white font-black text-xl text-center py-5 px-4 uppercase tracking-wide">
            GALERÍA DE IMÁGENES
          </div>

          <div className="p-4 flex flex-col gap-4">
            {galeriaItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="h-24 bg-blue-50 flex items-center justify-center border-b-2 border-blue-100 text-[#1a3a5c] font-bold text-xs text-center p-2 leading-snug">
                  {item.imagen ? (
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    item.titulo
                  )}
                </div>
                <p className="text-[#1a3a5c] font-semibold text-xs text-center px-3 py-2 leading-snug">
                  {item.titulo}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="block text-center text-yellow-400 font-bold text-sm underline py-4 px-4 hover:text-yellow-300 transition-colors"
          >
            Ver todos Imágenes
          </a>
        </aside>
      </div>
      </div>
    </section>
  );
}