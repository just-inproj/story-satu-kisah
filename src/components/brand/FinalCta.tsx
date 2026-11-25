"use client";

import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  const { finalCta } = landing;
  return (
    <section className="section section-dark final-cta story-chapter">
      <div className="fairytale-layer" aria-hidden="true">
        <span className="sparkle" style={{ left: "12%", top: "20%", animationDelay: "0s" }} />
        <span className="sparkle" style={{ left: "85%", top: "25%", animationDelay: ".8s" }} />
        <span className="sparkle" style={{ left: "22%", top: "72%", animationDelay: "1.4s" }} />
        <span className="sparkle" style={{ left: "74%", top: "68%", animationDelay: ".4s" }} />
      </div>
      <div className="narrow center">
        <Reveal y={24}><p className="eyebrow" style={{ color: "#b8cabc" }}>Mulai dari sini</p></Reveal>
        <Reveal y={40} delay={0.05} blur={6}><h2 className="h2">{finalCta.title}</h2></Reveal>
        <Reveal y={24} delay={0.1}><p className="lead">{finalCta.subtitle}</p></Reveal>
        <Reveal y={24} delay={0.18} className="final-cta-actions">
          <a className="btn btn-primary" href={finalCta.cta.href} target="_blank" rel="noreferrer">{finalCta.cta.label}</a>
          <a className="btn btn-secondary btn-on-dark" href="/demo/invitation">Lihat Demo</a>
        </Reveal>
      </div>
    </section>
  );
}
