import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const NAV = [
  { label: "Inicio",      href: "/" },
  { label: "Nosotros",    href: "/acerca-nosotros" },
  {
    label: "Proyectos",
    href: "/proyectos",
    children: [
      { label: "Proyecto Placeholder 1", href: "#proyectos" },
      { label: "Proyecto Placeholder 2", href: "#proyectos" },
      { label: "Proyecto Placeholder 3", href: "#proyectos" },
      { label: "Proyecto Placeholder 4", href: "#proyectos" },
      { label: "Proyecto Placeholder 5", href: "#proyectos" },
      { label: "Proyecto Placeholder 6", href: "#proyectos" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Servicio Placeholder 1", href: "#servicios" },
      { label: "Servicio Placeholder 2", href: "#servicios" },
      { label: "Servicio Placeholder 3", href: "#servicios" },
      { label: "Servicio Placeholder 4", href: "#servicios" },
    ],
  },
  { label: "Productos",   href: "/productos" },
  { label: "Contáctanos", href: "/contactanos" },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
];

function Dropdown({ item }) {
  const [open, setOpen] = useState(false);

  const children = item.children || [];
  const half = Math.ceil(children.length / 2);
  const col1 = children.slice(0, half);
  const col2 = children.slice(half);

  const navigate = useNavigate();


  return (
    <div
      className="static lg:relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => navigate(item.href)}
        className="flex items-center gap-1 text-sm font-bold text-neutral-800
                   hover:text-primary-500 transition-colors duration-150 tracking-wide uppercase py-4 cursor-pointer"
      >
        {item.label}
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="fixed left-1/2 -translate-x-1/2 top-[70px] max-w-5xl bg-primary-800 text-white shadow-2xl z-50 rounded-xl">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold uppercase mb-8 border-b border-white/20 pb-4">
              {item.label}
            </h2>

            <div className="w-full">
              <div>
                <div className="grid grid-cols-2 gap-16">

                  <ul className="space-y-3">
                    {col1.map((child) => (
                      <li key={child.label} className="flex items-center gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-white/70 rounded-full group-hover/item:bg-primary-300 transition"></span>
                        <a
                          href={child.href}
                          className="text-sm font-medium text-white hover:text-primary-300 transition-colors uppercase leading-tight"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3">
                    {col2.map((child) => (
                      <li key={child.label} className="flex items-center gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-white/70 rounded-full group-hover/item:bg-primary-300 transition"></span>
                        <a
                          href={child.href}
                          className="text-sm font-medium text-white hover:text-primary-300 transition-colors uppercase leading-tight"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <header className="bg-white border-b border-neutral-100 shadow-sm">
      <div className="wrapper flex items-center justify-between py-3 gap-6">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/logoNovaMain.png" alt="NOOVA Consulting" className="h-14" />
        </Link>

        {/* Nav desktop - centro */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) =>
            item.children ? (
              <Dropdown key={item.label} item={item} />
            ) : (
              // antes: <a href={item.href} ...>
              <Link key={item.label} to={item.href}
                className="text-sm font-bold text-neutral-800 hover:text-primary-500
                          transition-colors duration-150 tracking-wide uppercase">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Derecha: redes ARRIBA, botón ABAJO */}
        <div className="hidden lg:flex flex-col items-center gap-2 flex-shrink-0">
          {/* Fila de iconos sociales */}
          <div className="flex items-center gap-1.5">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="w-8 h-8 rounded-full border-2 border-primary-800 text-primary-800
                           flex items-center justify-center
                           hover:bg-primary-800 hover:text-white transition-all duration-150">
                {s.icon}
              </a>
            ))}
          </div>

          {/* Botón cotizar */}
          <a href="#contacto"
            className="bg-primary-800 hover:bg-primary-700 text-white text-sm font-semibold
                       px-6 py-2 rounded-full transition-all duration-200 whitespace-nowrap shadow w-full text-center">
            ¡Quiero Cotizar!
          </a>
        </div>

        {/* Hamburger mobile */}
        <button onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden p-2 text-neutral-800" aria-label="Menú">
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Nav mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white">
          <nav className="wrapper py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-2 py-2.5
                                 text-sm font-bold text-neutral-800 uppercase tracking-wide">
                      {item.label}
                      <svg className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 border-l-2 border-primary-100 ml-2 mb-1">
                        {item.children.map((child) => (
                          <a key={child.label} href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 px-2 text-sm text-neutral-500 hover:text-primary-500">
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href} onClick={() => setMobileOpen(false)}
  className="block px-2 py-2.5 text-sm font-bold text-neutral-800
             uppercase tracking-wide hover:text-primary-500 transition-colors">
  {item.label}
</Link>
                )}
              </div>
            ))}
            <div className="flex gap-2 px-2 pt-3 justify-center">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-full border-2 border-primary-800 text-primary-800
                             flex items-center justify-center hover:bg-primary-800 hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="#contacto"
              className="mt-2 bg-primary-800 text-white text-sm font-semibold text-center
                         px-5 py-2.5 rounded-full">
              ¡Quiero Cotizar!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}