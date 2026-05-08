import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────
   Contacto — Formulario + datos de contacto
───────────────────────────────────────────────────────────────────── */
const INFO = [
  { icon: "📍", label: "Dirección",  value: "Av. Principal 123, Lima, Perú" },
  { icon: "📞", label: "Teléfono",   value: "+51 999 999 999" },
  { icon: "✉️", label: "Email",      value: "contacto@constructora.pe" },
  { icon: "🕐", label: "Horario",    value: "Lun – Vie: 8:00 am – 6:00 pm" },
];

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con backend o servicio de email
    console.log("Formulario enviado:", form);
    setEnviado(true);
  };

  const inputClass = `
    w-full px-4 py-3 rounded-sm border border-neutral-200 bg-white
    text-neutral-800 text-sm placeholder:text-neutral-400
    focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400
    transition
  `;

  return (
    <section id="contacto" className="py-24 bg-primary-900">
      <div className="wrapper">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="section-label text-primary-300">Hablemos</p>
          <div className="divider-accent mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-primary-200 text-lg max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Cuéntanos y te respondemos
            en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info lateral */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {INFO.map((i) => (
              <div key={i.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary-700 flex items-center
                                justify-center text-xl flex-shrink-0">
                  {i.icon}
                </div>
                <div>
                  <div className="text-xs text-primary-400 font-semibold tracking-wider uppercase mb-0.5">
                    {i.label}
                  </div>
                  <div className="text-white text-sm">{i.value}</div>
                </div>
              </div>
            ))}

            {/* Redes */}
            <div className="mt-4 pt-6 border-t border-primary-700">
              <p className="text-primary-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Síguenos
              </p>
              <div className="flex gap-3">
                {["LinkedIn", "Facebook", "Instagram"].map((r) => (
                  <a key={r} href="#"
                    className="text-xs text-primary-300 border border-primary-700 px-3 py-1.5
                               rounded-sm hover:bg-primary-700 transition-colors">
                    {r}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            {enviado ? (
              <div className="bg-white/10 rounded-sm p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-2xl text-white font-semibold mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-primary-200 text-sm">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-white rounded-sm p-8 shadow-2xl space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                      Nombre completo *
                    </label>
                    <input name="nombre" value={form.nombre} onChange={handleChange}
                      required placeholder="Tu nombre" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      required placeholder="tu@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                      Teléfono
                    </label>
                    <input name="telefono" value={form.telefono} onChange={handleChange}
                      placeholder="+51 999 999 999" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                      Asunto
                    </label>
                    <select name="asunto" value={form.asunto} onChange={handleChange}
                      className={inputClass}>
                      <option value="">Selecciona...</option>
                      <option>Cotización de proyecto</option>
                      <option>Información de servicios</option>
                      <option>Información de productos</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Mensaje *
                  </label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange}
                    required rows={5} placeholder="Cuéntanos sobre tu proyecto..."
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Enviar mensaje →
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
