import Layout from "../components/Layout.jsx";

const featureCards = [
  {
    title: "Cartera clara",
    body: "Clientes, prestamos, saldos y mora en una sola vista.",
    tone: "primary",
  },
  {
    title: "Cobro más ordenado",
    body: "Rutas, pendientes y pagos sin hojas sueltas.",
    tone: "success",
  },
  {
    title: "Control del equipo",
    body: "Permisos por rol para cobrar, ver y operar mejor.",
    tone: "neutral",
  },
  {
    title: "Seguimiento con respaldo",
    body: "Recibos, notas y trazabilidad por movimiento.",
    tone: "chip",
  },
];

const workflow = [
  {
    step: "Paso 1",
    title: "Captura",
    body: "Registro rapido.",
  },
  {
    step: "Paso 2",
    title: "Configura",
    body: "Monto y reglas.",
  },
  {
    step: "Paso 3",
    title: "Cobra",
    body: "Operación en campo.",
  },
  {
    step: "Paso 4",
    title: "Decide",
    body: "Lectura inmediata.",
  },
];

const spotlightStats = [
  { value: "32", label: "pagos hoy" },
  { value: "08", label: "visitas" },
  { value: "4.8%", label: "mora critica" },
];

const proofCards = [
  {
    title: "Todo visible",
    body: "Cobrado, pendiente y vencido en el mismo flujo.",
  },
  {
    title: "Menos friccion",
    body: "Menos reconstruccion manual al final del dia.",
  },
  {
    title: "Más control",
    body: "Rutas, permisos y recibos conectados.",
  },
];

const marqueeItems = [
  "Prestamos",
  "Rutas",
  "Cobradores",
  "Recibos",
  "Reportes",
  "Clientes",
  "Permisos",
  "Seguimiento",
];

export default function App() {
  return (
    <Layout pageTitle="PrestaApp | Landing" compactNav={false}>
      <main className="landing-main">
        <section className="hero-grid">
          <div className="hero-copy">
            <div className="hero-announcement">
              <span className="hero-announcement-dot" />
              <span>Operación movil para cobranza real</span>
            </div>
            <p className="eyebrow">PrestaApp</p>
            <h1 className="hero-title">
              Controla cartera, cobros y equipo desde una sola operación.
            </h1>
            <p className="hero-text">
              Clientes, prestamos, rutas, pagos y seguimiento dentro del mismo
              sistema.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#cta">
                Solicitar demo
              </a>
              <a className="button button-secondary" href="#funciones">
                Ver funciones
              </a>
            </div>
            <div className="hero-badges">
              <span>Cartera</span>
              <span>Cobros</span>
              <span>Recibos</span>
            </div>
            <div className="hero-spotlight">
              {spotlightStats.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-panel hero-panel-main">
              <div className="panel-heading">
                <span className="status-live" />
                <p>Operación en vivo</p>
              </div>
              <div className="stage-phone">
                <div className="stage-phone-top">
                  <div>
                    <p className="stage-label">Ruta del dia</p>
                    <strong>Villa Mella / Norte</strong>
                  </div>
                  <span className="stage-pill">8 pendientes</span>
                </div>
                <div className="stage-board">
                  <article className="stage-board-card">
                    <p className="metric-label">Cobrado</p>
                    <strong>RD$ 184,200</strong>
                    <span>32 pagos</span>
                  </article>
                  <article className="stage-board-card">
                    <p className="metric-label">Pendiente</p>
                    <strong>RD$ 29,400</strong>
                    <span>12 cuotas</span>
                  </article>
                </div>
                <div className="stage-queue">
                  <div className="stage-queue-row">
                    <span>Maria Rosario</span>
                    <strong>Hoy</strong>
                  </div>
                  <div className="stage-queue-row">
                    <span>Jose Almonte</span>
                    <strong>Atraso 3d</strong>
                  </div>
                  <div className="stage-queue-row">
                    <span>Luisa Ortega</span>
                    <strong>Ruta 2</strong>
                  </div>
                </div>
                <div className="chart-bars" aria-hidden="true">
                  <span className="chart-bar chart-bar-1" />
                  <span className="chart-bar chart-bar-2" />
                  <span className="chart-bar chart-bar-3" />
                  <span className="chart-bar chart-bar-4" />
                  <span className="chart-bar chart-bar-5" />
                </div>
              </div>
            </div>

            <div className="hero-side-stack">
              <div className="hero-floating-card">
                <p className="floating-title">Pulso de cobros</p>
                <div className="floating-row">
                  <span>Cuotas al dia</span>
                  <strong>71%</strong>
                </div>
                <div className="floating-row">
                  <span>Proximo pago</span>
                  <strong>19%</strong>
                </div>
                <div className="floating-row floating-row-danger">
                  <span>Vencidos</span>
                  <strong>10%</strong>
                </div>
              </div>

              <div className="hero-note-card">
                <p className="hero-note-label">Equipo conectado</p>
                <strong>14 usuarios activos</strong>
                <span>Permisos por rol.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="value-strip" aria-label="Mensajes de valor">
          <div className="value-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="proof-shell">
          <div className="proof-lead">
            <p className="eyebrow">Hecho para operar</p>
            <h2>Menos texto. Máas lectura operativa.</h2>
          </div>
          <div className="proof-grid">
            {proofCards.map((card) => (
              <article key={card.title} className="proof-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="funciones">
          <div className="section-heading">
            <p className="eyebrow">Funciones</p>
            <h2>Cuatro bloques para operar sin friccion.</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map((card, index) => (
              <article
                key={card.title}
                className={`feature-card feature-${card.tone}`}
              >
                <div className="feature-card-top">
                  <p className="feature-index">0{index + 1}</p>
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="flujo">
          <div className="section-heading">
            <p className="eyebrow">Como fluye</p>
            <h2>Del registro al cobro.</h2>
          </div>
          <div className="workflow-grid">
            {workflow.map((item) => (
              <article key={item.step} className="workflow-card">
                <div className="workflow-card-top">
                  <span className="step-pill">{item.step}</span>
                  <span className="workflow-line" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-shell" id="impacto">
          <div className="impact-copy">
            <p className="eyebrow">Impacto</p>
            <h2>Menos caos. Más control.</h2>
            <p>
              La cartera se entiende mejor cuando todo vive en el mismo sistema.
            </p>
          </div>
          <div className="impact-grid">
            <article>
              <strong>Menos friccion</strong>
              <span>Registro operativo.</span>
            </article>
            <article>
              <strong>Más contexto</strong>
              <span>Mora y seguimiento.</span>
            </article>
            <article>
              <strong>Más orden</strong>
              <span>Calle y supervision.</span>
            </article>
          </div>
        </section>

        <section className="cta-shell" id="cta">
          <div className="cta-card">
            <div className="cta-copy">
              <p className="eyebrow">Siguiente paso</p>
              <h2>Solicita una demo.</h2>
              <p>Te mostramos el flujo completo.</p>
            </div>
            <div className="cta-panel">
              <div className="cta-panel-box">
                <span className="cta-panel-label">Correo</span>
                <strong>josealbertoromanynfante@gmail.com</strong>
              </div>
              <div className="cta-panel-box">
                <span className="cta-panel-label">Télefono</span>
                <strong>+1 (829) 962-3287</strong>
              </div>
              <div className="cta-actions">
                <a
                  className="button button-primary"
                  href="mailto:josealbertoromanynfante@gmail.com"
                >
                  Solicitar demo
                </a>
                <a className="button button-secondary" href="tel:+18095550199">
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
