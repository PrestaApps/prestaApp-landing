import Layout from "../components/Layout.jsx";

export default function LegalPage({ document, eyebrow, pageTitle }) {
  return (
    <Layout pageTitle={pageTitle} compactNav>
      <main className="legal-main">
        <section className="legal-hero">
          <p className="eyebrow">
            <span />
            {eyebrow}
          </p>
          <h1 className="legal-title">{document.title}</h1>
          <p className="legal-intro">{document.intro}</p>
          <p className="legal-updated">
            Última actualización: {document.updatedAt}
          </p>
        </section>

        <section className="legal-single">
          <article className="legal-card">
            {document.sections.map((section) => (
              <section key={section.title} className="legal-section">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </section>
      </main>
    </Layout>
  );
}
