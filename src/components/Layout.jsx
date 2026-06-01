import { useEffect } from "react";
import appIcon from "../imgs/appIcon.png";

const navLinks = [
  { href: "/index.html#producto", label: "Producto" },
  { href: "/index.html#funciones", label: "Funciones" },
  { href: "/index.html#demo", label: "Demo" },
  { href: "/soporte/", label: "Soporte" },
];

export default function Layout({ children, pageTitle, compactNav = false }) {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="/index.html" aria-label="PrestaApp inicio">
            <img src={appIcon} alt="" />
            <span>Presta<span>App</span></span>
          </a>
          <nav className={`nav ${compactNav ? "nav-compact" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="/index.html#contacto">
            Solicitar demo
          </a>
        </div>
      </header>

      <div className="page-shell">{children}</div>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <a className="brand footer-brand" href="/index.html">
              <img src={appIcon} alt="" />
              <span>Presta<span>App</span></span>
            </a>
            <p>Control de préstamos, cobros y cartera en una sola aplicación.</p>
          </div>
          <div className="footer-links">
            <a href="/soporte/">Soporte</a>
            <a href="/terms.html">Términos y condiciones</a>
            <a href="/privacy.html">Política de privacidad</a>
          </div>
          <p className="footer-year">© {new Date().getFullYear()} PrestaApp</p>
        </div>
      </footer>
    </div>
  );
}
