"use client";

import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function PricingTeaser() {
  const { pricing } = landing;
  return (
    <section className="section section-muted story-chapter" id="paket">
      <div className="container">
        <div className="center">
          <Reveal y={24}><p className="eyebrow">{pricing.eyebrow}</p></Reveal>
          <Reveal y={34} delay={0.05}><h2 className="h2">{pricing.title}</h2></Reveal>
          <Reveal y={24} delay={0.1}><p className="lead">{pricing.subtitle}</p></Reveal>
        </div>
        <Reveal y={60} stagger={0.14} className="grid-3 pricing-grid">
          {pricing.items.map((p) => (
            <article key={p.name} className={`card price-card magic-frame ${p.featured ? "featured" : ""}`}>
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
        </Reveal>
      </div>
    </section>
  );
}
