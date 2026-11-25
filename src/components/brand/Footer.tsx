import { landing } from "@/lib/content/landing";

export function Footer() {
  const { footer, nav } = landing;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#" aria-label="Story Satu Kisah">Story<span> Satu Kisah</span></a>
          <p>{footer.desc}</p>
        </div>
        <div className="footer-col">
          <h4>Jelajahi</h4>
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          <a href="/demo/invitation">Demo Undangan</a>
        </div>
        <div className="footer-col">
          <h4>Layanan</h4>
          <a href="#fitur">Undangan Digital</a>
          <a href="#fitur">RSVP & Ucapan</a>
          <a href="#paket">Paket & Custom</a>
        </div>
        <div className="footer-col">
          <h4>Kontak</h4>
          {footer.contact.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noreferrer" : undefined}>
              <span className="footer-contact-label">{c.label}: </span>{c.value}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{footer.legal}</span>
        <span>Visual MVP — dummy content.</span>
      </div>
    </footer>
  );
}
