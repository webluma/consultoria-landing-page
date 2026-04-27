"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, [isOpen]);

  return (
    <div className="header-shell">
      <a href="#hero" className="flex min-w-0 items-center gap-3">
        <span className="brand-mark">VA</span>
        <div className="min-w-0">
          <p className="brand-name">Vanturel Consultoria</p>
          <p className="brand-subtitle">Finanças com direção executiva</p>
        </div>
      </a>

      <nav className="hidden items-center gap-5 text-sm text-[var(--ink-soft)] md:flex xl:gap-7">
        {navItems.map((item) => (
          <a className="nav-link" href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden lg:block">
        <a className="button-primary nav-cta" href="#contato">
          Agendar diagnóstico
        </a>
      </div>

      <button
        type="button"
        className="menu-toggle md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu md:hidden ${isOpen ? "is-open" : ""}`} id="mobile-menu">
        <nav className="mobile-menu-links text-[var(--ink-soft)]">
          {navItems.map((item) => (
            <a className="nav-link mobile-nav-link" href={item.href} key={item.label} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button-primary w-full" href="#contato" onClick={() => setIsOpen(false)}>
          Agendar diagnóstico
        </a>
      </div>
    </div>
  );
}
