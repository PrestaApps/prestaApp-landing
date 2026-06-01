import Layout from "../components/Layout.jsx";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" />
  </svg>
);

const supportTopics = [
  {
    number: "01",
    title: "Primeros pasos",
    body: "Recibe orientación para configurar tu cuenta y comenzar a gestionar clientes y préstamos.",
  },
  {
    number: "02",
    title: "Cobros y recibos",
    body: "Aclara dudas sobre cuotas, rutas, comprobantes y el seguimiento de movimientos.",
  },
  {
    number: "03",
    title: "Acceso y seguridad",
    body: "Solicita ayuda con el ingreso, usuarios, permisos y la protección de tu información.",
  },
];

const faqItems = [
  {
    question: "¿Cómo solicito ayuda?",
    answer:
      "Puedes escribirnos por correo o llamar directamente. Incluye una descripción breve del caso para ayudarte con mayor rapidez.",
  },
  {
    question: "¿Qué información debo enviar?",
    answer:
      "Indica tu nombre, el módulo donde ocurre el problema y los pasos que seguiste. Evita compartir contraseñas o datos sensibles.",
  },
  {
    question: "¿Puedo solicitar una demostración?",
    answer:
      "Sí. Utiliza el botón de correo y menciona que deseas revisar el flujo completo de PrestaApp.",
  },
];

export default function SupportPage() {
  return (
    <Layout pageTitle="PrestaApp | Soporte">
      <main className="support-main">
        <section className="support-hero">
          <p className="eyebrow">
            <span />
            Centro de soporte
          </p>
          <h1>Estamos para ayudarte a seguir operando.</h1>
          <p>
            Encuentra orientación para usar PrestaApp o contacta directamente
            con nuestro equipo cuando necesites resolver una incidencia.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=josealbertoromanynfante@gmail.com&su=Soporte%20PrestaApp"
              target="_blank"
              rel="noreferrer"
            >
              Contactar soporte
              <ArrowIcon />
            </a>
            <a className="button button-ghost" href="tel:+18299623287">
              Llamar al +1 (829) 962-3287
            </a>
          </div>
        </section>

        <section className="support-topics" aria-label="Temas de soporte">
          {supportTopics.map((topic) => (
            <article className="support-topic" key={topic.number}>
              <span>{topic.number}</span>
              <h2>{topic.title}</h2>
              <p>{topic.body}</p>
            </article>
          ))}
        </section>

        <section className="support-faq">
          <div className="support-faq-heading">
            <p className="eyebrow">
              <span />
              Preguntas frecuentes
            </p>
            <h2>Respuestas rápidas para avanzar.</h2>
          </div>
          <div className="support-faq-list">
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
