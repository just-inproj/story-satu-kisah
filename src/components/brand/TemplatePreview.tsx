import { landing } from "@/lib/content/landing";

export function TemplatePreview() {
  return (
    <section className="section section-muted" id="karya">
      <div className="container">
        <p className="eyebrow">Gaya & Karya</p>
        <h2 className="h2">Tampilan yang menyesuaikan kisah Anda</h2>
        <p className="lead">Pilih arah visual yang sesuai karakter pasangan. Semua dummy preview untuk fase visual.</p>
        <div className="grid-3" style={{ marginTop: "2.5rem" }}>
          {landing.templates.map((t) => (
            <article key={t.name} className="card template-card reveal">
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
