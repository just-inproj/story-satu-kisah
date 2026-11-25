"use client";

import dynamic from "next/dynamic";
import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

export function Hero() {
  const { hero } = landing;
  const reduce = useReducedMotion();
  return (
    <section className="hero story-chapter" id="beranda">
      <div className="hero-bg" aria-hidden="true" />
      <div className="fairytale-layer" aria-hidden="true">
        <div className="story-orb story-orb-a" />
        <div className="story-orb story-orb-b" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal y={24}><p className="eyebrow">{hero.eyebrow}</p></Reveal>
          <Reveal y={30} delay={0.05}><h1 className="display">{hero.title}</h1></Reveal>
          <Reveal y={30} delay={0.16}><p className="lead">{hero.subtitle}</p></Reveal>
          <Reveal y={24} delay={0.24} className="hero-actions">
            <a className="btn btn-primary" href={hero.primaryCta.href} target="_blank" rel="noreferrer">{hero.primaryCta.label}</a>
            <a className="btn btn-secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </Reveal>
          <Reveal y={20} delay={0.32} className="hero-highlights" aria-label="Sorotan">
            {hero.highlights.map((h) => <span key={h} className="highlight-chip">{h}</span>)}
          </Reveal>
          <p className="hero-note">* {hero.note}</p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          {!reduce && <HeroScene />}
          <Reveal y={60} scale={0.96} delay={0.15} className="mock-browser magic-frame">
            <div className="mock-browser-bar"><i /><i /><i /><span>storysatukisah.com/alya-raka</span></div>
            <div className="mock-browser-body">
              <div className="mock-invite">
                <p className="script">The Wedding of</p>
                <h3>Alya &amp; Raka</h3>
                <p>Sabtu, 12 Desember 2026</p>
                <p>Jakarta Selatan</p>
                <span className="mock-pill" style={{ marginTop: "1rem", display: "inline-block" }}>Buka Undangan</span>
              </div>
            </div>
          </Reveal>
          <Reveal y={80} x={-20} delay={0.3} className="mock-phone magic-frame">
            <div className="mock-phone-notch" />
            <div className="mock-phone-screen">
              <p className="script">Dear Guest</p>
              <h4>Alya &amp; Raka</h4>
              <p className="mini">Kami mengundang Anda</p>
              <p className="mini">12 . 12 . 2026</p>
              <div className="mock-event-card">
                <div className="mock-event-label">Akad Nikah</div>
                <div className="mock-event-time">08.00 WIB</div>
                <div className="mock-event-place">Masjid Al-Hikmah</div>
              </div>
              <span className="mock-pill">Konfirmasi RSVP</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
