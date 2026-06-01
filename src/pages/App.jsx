import Layout from "../components/Layout.jsx";
import dashboardImage from "../imgs/dashboard.jpg";
import loansImage from "../imgs/prestamos_view.jpg";
import collectionsImage from "../imgs/cobros.jpg";
import newLoanImage from "../imgs/nuevo_prestamo.jpg";
import receiptImage from "../imgs/recibo.jpg";
import amortizationImage from "../imgs/amortizacion_rapida.jpg";
import featureGraphic from "../imgs/feature-graphic.png";
import demoVideo from "../video/IMG_0566.MP4";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 12 4 4 8-8" />
  </svg>
);

const moduleItems = [
  "Cartera",
  "Cobros",
  "Rutas",
  "Clientes",
  "Recibos",
  "Reportes",
  "Auditoría",
  "Banco",
];

const featureCards = [
  {
    number: "01",
    title: "Cartera bajo control",
    body: "Visualiza préstamos activos, saldos pendientes, fechas de pago y atrasos sin reconstruir la información manualmente.",
    accent: "amber",
  },
  {
    number: "02",
    title: "Cobros en movimiento",
    body: "Organiza la jornada por rutas, consulta cuotas vencidas y registra cada pago desde el mismo flujo.",
    accent: "green",
  },
  {
    number: "03",
    title: "Decisiones con contexto",
    body: "Revisa el estado de la operación con resúmenes, reportes y trazabilidad por cada movimiento.",
    accent: "blue",
  },
];

const showcase = [
  {
    tag: "Originación",
    title: "Registra préstamos con reglas claras.",
    body: "Define capital, interés, frecuencia y fondo. Consulta la amortización antes de confirmar.",
    image: newLoanImage,
    alt: "Formulario de nuevo préstamo en PrestaApp",
    className: "showcase-loan",
  },
  {
    tag: "Cobranza",
    title: "Prioriza cada visita desde tu ruta.",
    body: "Identifica cuotas, mora y montos pendientes para trabajar la calle con información actualizada.",
    image: collectionsImage,
    alt: "Vista de cobros y rutas en PrestaApp",
    className: "showcase-collections",
  },
  {
    tag: "Respaldo",
    title: "Cada movimiento deja un recibo.",
    body: "Comparte e imprime comprobantes para mantener una operación ordenada y verificable.",
    image: receiptImage,
    alt: "Recibo de desembolso en PrestaApp",
    className: "showcase-receipt",
  },
];

const benefits = [
  "Control diario de cartera y vencimientos",
  "Rutas, clientes y pagos conectados",
  "Recibos listos para compartir o imprimir",
  "Visibilidad por usuario y trazabilidad",
];

export default function App() {
  return (
    <Layout pageTitle="PrestaApp | Control de préstamos y cobros">
      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Gestión financiera en campo
            </p>
            <h1>Tu cartera en orden. Tu operación en movimiento.</h1>
            <p className="hero-text">
              PrestaApp reúne préstamos, cobros, rutas y clientes en una sola
              aplicación para que puedas avanzar con claridad todos los días.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">
                Solicitar demo
                <ArrowIcon />
              </a>
              <a className="button button-ghost" href="#producto">
                Explorar plataforma
              </a>
            </div>
            <div className="hero-points" aria-label="Ventajas principales">
              <span>
                <CheckIcon />
                Control en tiempo real
              </span>
              <span>
                <CheckIcon />
                Diseñada para operar en campo
              </span>
            </div>
          </div>

          <div className="hero-product">
            <div className="product-orbit product-orbit-one" />
            <div className="product-orbit product-orbit-two" />
            <div className="phone-frame phone-frame-hero">
              <div className="phone-notch" />
              <img
                src={dashboardImage}
                alt="Panel principal de PrestaApp con el estado de cartera"
              />
            </div>
            <article className="floating-insight floating-insight-top">
              <span className="floating-icon">↗</span>
              <div>
                <small>Visibilidad diaria</small>
                <strong>Cartera al instante</strong>
              </div>
            </article>
            <article className="floating-insight floating-insight-bottom">
              <span className="floating-status" />
              <div>
                <small>Operación conectada</small>
                <strong>Cobros + rutas + recibos</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="module-strip" aria-label="Módulos disponibles">
          <p>Todo lo que necesitas para operar</p>
          <div className="module-track">
            {moduleItems.map((item) => (
              <span key={item}>
                <i />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="intro-section" id="producto">
          <div className="section-copy">
            <p className="eyebrow">
              <span />
              Una sola plataforma
            </p>
            <h2>Menos hojas sueltas. Más control sobre cada peso.</h2>
            <p>
              Desde el primer préstamo hasta el último cobro, PrestaApp mantiene
              la operación conectada para que tengas contexto antes de tomar
              decisiones.
            </p>
            <a className="text-link" href="#funciones">
              Conoce las funciones
              <ArrowIcon />
            </a>
          </div>
          <div className="intro-visual">
            <img
              src={featureGraphic}
              alt="Representación visual de los módulos financieros de PrestaApp"
            />
          </div>
        </section>

        <section className="features-section" id="funciones">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                Pensada para el día a día
              </p>
              <h2>La información correcta, justo cuando la necesitas.</h2>
            </div>
            <p>
              Una experiencia directa para gestionar préstamos, recuperar
              cartera y mantener el equipo enfocado.
            </p>
          </div>
          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article
                className={`feature-card feature-${feature.accent}`}
                key={feature.number}
              >
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <div className="feature-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="video-section" id="demo">
          <div className="video-copy">
            <p className="eyebrow">
              <span />
              Mira PrestaApp en acción
            </p>
            <h2>Conoce la experiencia antes de empezar.</h2>
            <p>
              Recorre la aplicación y descubre cómo centralizar préstamos,
              cobros y seguimiento desde una interfaz diseñada para trabajar
              todos los días.
            </p>
            <a className="text-link" href="/soporte/">
              ¿Necesitas ayuda?
              <ArrowIcon />
            </a>
          </div>
          <div className="video-card">
            <div className="video-card-header">
              <div>
                <span className="video-status" />
                Demostración de producto
              </div>
              <small>PrestaApp</small>
            </div>
            <video controls playsInline preload="metadata">
              <source src={demoVideo} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </section>

        <section className="platform-section">
          <div className="platform-phones" aria-label="Vistas de PrestaApp">
            <div className="phone-frame platform-phone platform-phone-back">
              <img src={amortizationImage} alt="Tabla de amortización rápida" />
            </div>
            <div className="phone-frame platform-phone platform-phone-front">
              <img src={loansImage} alt="Listado de préstamos en PrestaApp" />
            </div>
          </div>
          <div className="platform-copy">
            <p className="eyebrow">
              <span />
              Control operativo
            </p>
            <h2>Una vista clara para actuar rápido.</h2>
            <p>
              Consulta el estado de cada préstamo y cotiza nuevas opciones sin
              perder el ritmo de trabajo. Toda la información vive en el mismo
              lugar.
            </p>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="showcase-section">
          <div className="section-heading section-heading-centered">
            <div>
              <p className="eyebrow">
                <span />
                Del préstamo al recibo
              </p>
              <h2>Un flujo completo para operar sin improvisar.</h2>
            </div>
          </div>
          <div className="showcase-grid">
            {showcase.map((item) => (
              <article className="showcase-card" key={item.tag}>
                <div className={`showcase-image ${item.className}`}>
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="showcase-copy">
                  <p className="card-tag">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contacto">
          <div className="cta-light cta-light-one" />
          <div className="cta-light cta-light-two" />
          <div className="cta-copy">
            <p className="eyebrow">
              <span />
              Da el siguiente paso
            </p>
            <h2>Ordena tu operación con PrestaApp.</h2>
            <p>
              Solicita una demostración y revisa cómo la plataforma puede
              ayudarte a gestionar tu cartera con mayor claridad.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=josealbertoromanynfante@gmail.com&su=Solicitud%20de%20demo%20PrestaApp"
              target="_blank"
              rel="noreferrer"
            >
              Escribir por correo
              <ArrowIcon />
            </a>
            <a className="button button-outline" href="tel:+18299623287">
              Llamar al +1 (829) 962-3287
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
