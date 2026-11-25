"use client";
import { useState } from "react";
import { landing } from "@/lib/content/landing";

export function DemoShowcase() {
  const [active, setActive] = useState("cover");
  const panel = landing.demo.panels.find((p) => p.id === active) || landing.demo.panels[0];
  return (
    <section className="section section-muted" id="demo">
      <div className="container">
        <p className="eyebrow">Demo Produk</p>
        <h2 className="h2">{landing.demo.title}</h2>
        <p className="lead">{landing.demo.subtitle}</p>
        <div className="demo-grid">
          <div>
            <div className="demo-tabs" role="tablist" aria-label="Demo undangan">
              {landing.demo.panels.map((p) => (
                <button key={p.id} role="tab" aria-selected={active === p.id} aria-controls={`panel-${p.id}`} id={`tab-${p.id}`} className={`demo-tab ${active === p.id ? "active" : ""}`} onClick={() => setActive(p.id)}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className="card demo-panel" role="tabpanel" id={`panel-${panel.id}`} aria-labelledby={`tab-${panel.id}`}>
              <p className="eyebrow">{panel.label}</p>
              <h3 className="h3" style={{ fontSize: "2rem" }}>{panel.heading}</h3>
              <p className="muted" style={{ marginTop: ".75rem" }}>{panel.text}</p>
              <a className="btn btn-secondary" href="/demo/invitation" style={{ marginTop: "1.25rem" }}>Buka demo penuh</a>
            </div>
          </div>
          <div className="card demo-screen" aria-hidden="true">
            <div className="demo-ui">
              {active === "cover" && <><p className="script">The Wedding of</p><h4>Alya &amp; Raka</h4><p>Sabtu, 12 Desember 2026</p><p>Yth. Tamu Undangan</p><span className="mock-pill">Buka Undangan</span></>}
              {active === "detail" && <><p className="eyebrow" style={{ marginBottom: ".5rem" }}>Resepsi</p><h4 style={{ fontSize: "1.7rem" }}>12 Desember 2026</h4><p>11.00 - 14.00 WIB</p><p>The Grand Hall, Jakarta</p><div style={{ display: "flex", gap: ".5rem", justifyContent: "center", marginTop: "1rem" }}><span className="mock-pill">Maps</span><span className="mock-pill" style={{ background: "#fff", color: "#3b1d2b", border: "1px solid #e8d6de" }}>Kalender</span></div></>}
              {active === "rsvp" && <><p className="eyebrow" style={{ marginBottom: ".5rem" }}>RSVP</p><h4 style={{ fontSize: "1.7rem" }}>Konfirmasi Hadir</h4><div style={{ textAlign: "left", display: "grid", gap: ".5rem", marginTop: "1rem" }}><div style={{ padding: ".7rem", border: "1px solid #e8d6de", borderRadius: 10, fontSize: ".8rem", color: "#6b4a57" }}>Nama Anda</div><div style={{ padding: ".7rem", border: "1px solid #e8d6de", borderRadius: 10, fontSize: ".8rem", color: "#6b4a57" }}>Hadir / Tidak hadir</div><span className="mock-pill" style={{ textAlign: "center" }}>Kirim RSVP</span></div></>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
