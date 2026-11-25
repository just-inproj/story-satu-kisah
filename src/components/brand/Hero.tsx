import { landing } from "@/lib/content/landing";

export function Hero() {
  const { hero } = landing;
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1 className="display reveal delay-1">{hero.title}</h1>
          <p className="lead reveal delay-2">{hero.subtitle}</p>
          <div className="hero-actions reveal delay-3">
            <a className="btn btn-primary" href={hero.primaryCta.href} target="_blank" rel="noreferrer">{hero.primaryCta.label}</a>
            <a className="btn btn-secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
          <p className="hero-note reveal delay-3">* {hero.note}</p>
        </div>
        <div className="hero-visual reveal delay-2" aria-hidden="true">
          <div className="mock-browser">
            <div className="mock-browser-bar"><i /><i /><i /></div>
            <div className="mock-browser-body">
              <div className="mock-invite">
                <p className="script">The Wedding of</p>
                <h3>Alya &amp; Raka</h3>
                <p>Sabtu, 12 Desember 2026</p>
                <p>Jakarta Selatan</p>
                <span className="mock-pill" style={{ marginTop: "1rem", display: "inline-block" }}>Buka Undangan</span>
              </div>
            </div>
          </div>
          <div className="mock-phone">
            <div className="mock-phone-screen">
              <p className="script">Dear Guest</p>
              <h4>Alya &amp; Raka</h4>
              <p className="mini">Kami mengundang Anda</p>
              <p className="mini">12 . 12 . 2026</p>
              <div style={{ marginTop: ".75rem", background: "#fff", borderRadius: 14, padding: ".7rem", border: "1px solid #e8d6de", textAlign: "left" }}>
                <div style={{ fontSize: ".65rem", color: "#9a7d89", textTransform: "uppercase", letterSpacing: ".08em" }}>Akad Nikah</div>
                <div style={{ fontSize: ".78rem", fontWeight: 600, color: "#3b1d2b" }}>08.00 WIB</div>
                <div style={{ fontSize: ".68rem", color: "#6b4a57" }}>Masjid Al-Hikmah</div>
              </div>
              <span className="mock-pill">RSVP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
