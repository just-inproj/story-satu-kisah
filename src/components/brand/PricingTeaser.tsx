import { landing } from "@/lib/content/landing";

export function PricingTeaser() {
  return (
    <section className="section section-muted" id="paket">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Paket</p>
          <h2 className="h2">Pilihan yang jelas, sesuai kebutuhan</h2>
          <p className="lead">Harga dummy untuk preview visual. Paket final akan disesuaikan.</p>
        </div>
        <div className="grid-3" style={{ marginTop: "2.5rem", alignItems: "stretch" }}>
          {landing.pricing.map((p) => (
            <article key={p.name} className={`card price-card reveal ${p.featured ? "featured" : ""}`}>
              {p.featured && <p className="eyebrow" style={{ color: "#e7a9bf", marginBottom: ".5rem" }}>Paling populer</p>}
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
