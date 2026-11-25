import { landing } from "@/lib/content/landing";

export function PricingTeaser() {
  const { pricing } = landing;
  return (
    <section className="section section-muted" id="paket">
      <div className="container">
        <div className="center">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2 className="h2">{pricing.title}</h2>
          <p className="lead">{pricing.subtitle}</p>
        </div>
        <div className="grid-3 pricing-grid">
          {pricing.items.map((p) => (
            <article key={p.name} className={`card price-card ${p.featured ? "featured" : ""}`}>
              {p.featured && <p className="price-badge">Paling populer</p>}
              <h3 className="h3">{p.name}</h3>
              <div className="price">{p.price}</div>
              <p>{p.desc}</p>
              <ul className="price-list">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a className="btn btn-primary btn-block" href={landing.hero.primaryCta.href} target="_blank" rel="noreferrer">
                {p.name === "Custom" ? "Diskusi Kebutuhan" : "Pilih Paket"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
