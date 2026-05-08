import { Link } from "react-router-dom";

const SOCIAL = [
  {
    label: "Facebook",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: "LinkedIn",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: "Instagram",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  },
  {
    label: "YouTube",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
  },
  {
    label: "TikTok",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.3 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>,
  },
];

const CONTACT = [
  { text: "Jr. Cristobal de Peralta Norte 110, Of. 702, Santiago de Surco, Lima – Perú", isAddress: true },
  { label: "(+51) 944 269 338", dept: "Proyectos" },
  { label: "(+51) 958 136 491", dept: "Ventas" },
  { label: "(+51) 958 136 490", dept: "Finanzas" },
  { label: "(+51) 962 913 687", dept: "Info" },
];

const NAV_LINKS = [
  { label: "Nosotros",   to: "/acerca-nosotros" },
  { label: "Servicios",  to: "/servicios" },
  { label: "Proyectos",  to: "/proyectos" },
  { label: "Productos",  to: "/productos" },
  { label: "Noticias",   to: "/noticias" },
  { label: "Contáctanos", to: "/contacto" },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 flex-shrink-0 mt-0.5">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 flex-shrink-0 mt-0.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d3d6b", fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* COL 1: Logo + Social + Legal */}
        <div className="flex flex-col items-center gap-5">
          {/* Logo imagen */}
          <img src="/logoNova.png" alt="NOOVA Consulting" className="h-24 object-contain" />

          {/* Redes */}
          <div className="flex gap-2">
            {SOCIAL.map((s) => (
              <a key={s.label} href="#" aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
                style={{ border: "2px solid rgba(255,255,255,0.55)" }}
                onMouseEnter={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#0d3d6b"; }}
                onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#fff"; }}>
                {s.icon}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center gap-1">
          <Link to="/politicas" className="text-xs transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.65)" }}
            onMouseEnter={e => e.currentTarget.style.color="#fff"}
            onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.65)"}>
            Ver Políticas de Privacidad
          </Link>
          <Link to="/terminos" className="text-xs transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.65)" }}
            onMouseEnter={e => e.currentTarget.style.color="#fff"}
            onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.65)"}>
            Ver Términos de Uso
          </Link>
        </div>
        </div>

        {/* COL 2: Contacto */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5">Contacto</h4>
          <div className="flex flex-col gap-3.5">
            {CONTACT.map((c, i) => (
              <div key={i} className="flex items-start gap-2.5">
                {c.isAddress ? <PinIcon /> : <PhoneIcon />}
                <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.70)" }}>
                  {c.isAddress ? c.text : (
                    <><span className="text-white font-semibold">{c.label}</span> – {c.dept}</>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* COL 3: Navegación */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5">Navegación</h4>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="flex items-center gap-2">
                <span className="text-white font-bold text-base leading-none">›</span>
                <Link
                  to={link.to}
                  className="text-sm font-semibold transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                  onMouseEnter={e => e.currentTarget.style.color="#fff"}
                  onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.70)"}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "#092d50", borderTop: "1px solid rgba(255,255,255,0.12)" }}
        className="px-8 py-3">
        <p className="text-xs font-semibold text-white max-w-6xl mx-auto text-right">
          Contratistas Generales NOOVA S.A.C – © Copyrights 2026 Derechos Reservados
        </p>
      </div>
    </footer>
  );
}