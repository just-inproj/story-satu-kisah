"use client";

import { useState } from "react";
import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

type DemoPanelId = (typeof landing.demo.panels)[number]["id"];

export function DemoShowcase() {
  const [active, setActive] = useState<DemoPanelId>(landing.demo.panels[0].id);
  const panel = landing.demo.panels.find((p) => p.id === active) ?? landing.demo.panels[0];
  return (
    <section className="section section-muted story-chapter" id="demo">
      <div className="container">
        <Reveal y={24}><p className="eyebrow">Demo Pengalaman</p></Reveal>
        <Reveal y={34} delay={0.05}><h2 className="h2">{landing.demo.title}</h2></Reveal>
        <Reveal y={24} delay={0.1}><p className="lead">{landing.demo.subtitle}</p></Reveal>
        <div className="demo-grid">
          <Reveal y={40} delay={0.12}>
            <div className="demo-tabs" role="tablist" aria-label="Pilih tampilan demo">
              {landing.demo.panels.map((p) => (
                <button key={p.id} role="tab" aria-selected={active === p.id} aria-controls={`panel-${p.id}`} id={`tab-${p.id}`} className={`demo-tab ${active === p.id ? "active" : ""}`} onClick={() => setActive(p.id)}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className="card demo-panel magic-frame" role="tabpanel" id={`panel-${panel.id}`} aria-labelledby={`tab-${panel.id}`}>
              <div key={panel.id} className="demo-panel-content">
                <p className="eyebrow">{panel.label}</p>
                <h3 className="h3 demo-panel-title">{panel.heading}</h3>
                <p className="muted">{panel.text}</p>
                <a className="btn btn-secondary" href="/demo/invitation" style={{ marginTop: "1.25rem" }}>Buka demo penuh</a>
              </div>
            </div>
          </Reveal>
          <Reveal y={50} x={24} delay={0.18} className="card demo-screen magic-frame" aria-hidden="true">
            <div key={active} className="demo-ui demo-ui-animate">
              {active === "cover" && (
                <>
                  <p className="script">The Wedding of</p>
                  <h4>Alya &amp; Raka</h4>
                  <p>Sabtu, 12 Desember 2026</p>
                  <p>Yth. Tamu Undangan</p>
                  <span className="mock-pill">Buka Undangan</span>
                </>
              )}
              {active === "detail" && (
                <>
                  <p className="eyebrow" style={{ marginBottom: ".5rem" }}>Resepsi</p>
                  <h4 style={{ fontSize: "1.65rem" }}>12 Desember 2026</h4>
                  <p>11.00 - 14.00 WIB</p>
                  <p>The Grand Hall, Jakarta</p>
                  <div className="demo-inline-actions">
                    <span className="mock-pill">Maps</span>
                    <span className="mock-pill ghost">Kalender</span>
                  </div>
                </>
              )}
              {active === "rsvp" && (
                <>
                  <p className="eyebrow" style={{ marginBottom: ".5rem" }}>RSVP</p>
                  <h4 style={{ fontSize: "1.65rem" }}>Konfirmasi Hadir</h4>
                  <div className="demo-form">
                    <div className="demo-field">Nama Anda</div>
                    <div className="demo-field">Hadir / Tidak hadir</div>
                    <span className="mock-pill" style={{ textAlign: "center" }}>Kirim RSVP</span>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
