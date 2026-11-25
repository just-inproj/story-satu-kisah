import { landing } from "@/lib/content/landing";

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Testimoni</p>
          <h2 className="h2">Kata mereka yang merayakan kisah</h2>
          <p className="lead">Preview dummy — akan diganti dengan testimoni asli klien.</p>
        </div>
        <div className="grid-3" style={{ marginTop: "2.5rem" }}>
          {landing.testimonials.map((t) => (
            <article key={t.name} className="card quote-card reveal">
              <div className="quote-mark" aria-hidden="true">“</div>
              <blockquote>{t.quote}</blockquote>
              <div className="quote-author">{t.name}</div>
              <div className="quote-role">{t.role} • {t.event}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
