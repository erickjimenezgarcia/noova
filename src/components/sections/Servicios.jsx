/* ─────────────────────────────────────────────────────────────────────
   Servicios — Grid de servicios con íconos y descripción
───────────────────────────────────────────────────────────────────── */
const SERVICIOS = [
  {
    icon: "🏠",
    title: "Construcción Residencial",
    desc:  "Diseño y ejecución de viviendas unifamiliares y multifamiliares con acabados de primera.",
    tag:   "Residencial",
  },
  {
    icon: "🏢",
    title: "Construcción Comercial",
    desc:  "Oficinas, centros comerciales y locales adaptados a las necesidades de tu negocio.",
    tag:   "Comercial",
  },
  {
    icon: "🏭",
    title: "Construcción Industrial",
    desc:  "Plantas, almacenes y galpones industriales con estructuras robustas y funcionales.",
    tag:   "Industrial",
  },
  {
    icon: "🔧",
    title: "Remodelaciones",
    desc:  "Renovamos y mejoramos espacios existentes para darles una nueva vida.",
    tag:   "Remodelación",
  },
  {
    icon: "📐",
    title: "Diseño y Planificación",
    desc:  "Asesoría en planos, permisos y planificación estratégica de proyectos.",
    tag:   "Planificación",
  },
  {
    icon: "🛡️",
    title: "Supervisión de Obras",
    desc:  "Gestión y control de calidad durante todo el proceso constructivo.",
    tag:   "Supervisión",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-neutral-50">
      <div className="wrapper">

        {/* Encabezado */}
        <div className="max-w-2xl mb-14">
          <p className="section-label">Lo que hacemos</p>
          <div className="divider-accent" />
          <h2 className="section-title mb-4">
            Nuestros servicios
          </h2>
          <p className="section-sub">
            Ofrecemos soluciones integrales de construcción adaptadas a cada
            tipo de proyecto y cliente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((s) => (
            <div key={s.title}
              className="card p-7 group cursor-pointer border-l-4 border-l-transparent
                         hover:border-l-primary-500 transition-all duration-200">
              <div className="text-4xl mb-5">{s.icon}</div>
              <span className="text-xs font-semibold text-primary-500 tracking-widest uppercase mb-2 block">
                {s.tag}
              </span>
              <h3 className="font-semibold text-neutral-800 text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-primary-500 text-sm font-medium
                              opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
