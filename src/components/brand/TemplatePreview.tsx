import { landing } from "@/lib/content/landing";

export function TemplatePreview() {
  const { templates } = landing;
  return (
    <section className="section section-muted" id="karya">
      <div className="container">
        <p className="eyebrow">{templates.eyebrow}</p>
        <h2 className="h2">{templates.title}</h2>
        <p className="lead">{templates.subtitle}</p>
        <div className="grid-3" style={{ marginTop: "2.5rem" }}>
          {templates.items.map((t) => (
            <article key={t.name} className="card template-card">
              <div className="template-preview" style={{ background: t.color }} aria-hidden="true">
                <div className="template-mini">
                  <div className="script">The Wedding</div>
                  <div>A &amp; R</div>
                </div>
              </div>
              <h3 className="h3">{t.name}</h3>
              <p>{t.tone}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
