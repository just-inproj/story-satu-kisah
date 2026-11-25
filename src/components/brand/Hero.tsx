import { landing } from "@/lib/content/landing";

export function Hero() {
  const { hero } = landing;
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1 className="display reveal delay-1">{hero.title}</h1>
          <p className="lead reveal delay-2">{hero.subtitle}</p>
          <div className="hero-actions reveal delay-3">
            <a className="btn btn-primary" href={hero.primaryCta.href} target="_blank" rel="noreferrer">{hero.primaryCta.label}</a>
            <a className="btn btn-secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
          <div className="hero-highlights reveal delay-3" aria-label="Sorotan">
            {hero.highlights.map((h) => <span key={h} className="highlight-chip">{h}</span>)}
          </div>
          <p className="hero-note">* {hero.note}</p>
        </div>
        <div className="hero-visual reveal delay-2" aria-hidden="true">
          <div className="mock-browser">
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
          </div>
          <div className="mock-phone">
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
          </div>
        </div>
      </div>
    </section>
  );
}
