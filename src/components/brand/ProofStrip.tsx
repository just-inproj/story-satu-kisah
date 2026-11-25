"use client";

import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function ProofStrip() {
  const { proof } = landing;
  return (
    <section className="proof-strip story-chapter" aria-label="Bukti kepercayaan">
      <div className="container">
        <Reveal y={24}><p className="proof-label">{proof.title}</p></Reveal>
        <Reveal y={20} delay={0.05} className="proof-partners" aria-label="Contoh pasangan">
          {proof.partners.map((p) => <span key={p}>{p}</span>)}
        </Reveal>
        <Reveal y={30} stagger={0.12} className="proof-metrics">
          {proof.metrics.map((m) => (
            <div key={m.label} className="metric magic-frame">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </Reveal>
        <p className="proof-note">* Data dummy untuk preview visual.</p>
      </div>
    </section>
  );
}
