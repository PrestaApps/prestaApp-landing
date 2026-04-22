import { useEffect } from "react";

const navLinks = [
  { href: "./index.html#funciones", label: "Funciones" },
  { href: "./index.html#flujo", label: "Flujo" },
  { href: "./index.html#impacto", label: "Impacto" },
  { href: "./index.html#cta", label: "Contacto" },
  { href: "./terms.html", label: "Terminos" },
  { href: "./privacy.html", label: "Privacidad" },
];

export default function Layout({ children, pageTitle, compactNav = false }) {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  return (
    <div className="site-bg">
      <div className="page-shell">
        <header className="topbar">
          <a
            className="brand"
            href="./index.html"
            aria-label="PrestaApp inicio"
          >
            <span className="brand-mark">P</span>
            <span className="brand-text">PrestaApp</span>
          </a>
          <nav className={`nav ${compactNav ? "nav-compact" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        {children}

        <footer className="footer">
          <div>
            <p className="footer-brand">PrestaApp</p>
            <p className="footer-copy">
              Operación movil para cobros, prestamos y control de cartera.
            </p>
          </div>
          <div className="footer-links">
            <a href="./terms.html">Terminos y condiciones</a>
            <a href="./privacy.html">Politica de privacidad</a>
          </div>
          <p className="footer-year">{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
