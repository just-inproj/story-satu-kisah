import { landing } from "@/lib/content/landing";

export function Testimonials() {
  const { testimonials } = landing;
  return (
    <section className="section">
      <div className="container">
        <div className="center">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="h2">{testimonials.title}</h2>
          <p className="lead">{testimonials.subtitle}</p>
        </div>
        <div className="grid-3" style={{ marginTop: "2.5rem" }}>
          {testimonials.items.map((t) => (
            <article key={t.name} className="card quote-card">
              <div className="quote-mark" aria-hidden="true">“</div>
              <blockquote>{t.quote}</blockquote>
              <div className="quote-author">{t.name}</div>
              <div className="quote-role">{t.role} · {t.event}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
