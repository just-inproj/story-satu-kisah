import { landing } from "@/lib/content/landing";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#">Story<span> Satu Kisah</span></a>
          <p>{landing.footer.desc}</p>
        </div>
        <div className="footer-col">
          <h4>Layanan</h4>
          <a href="#layanan">Undangan Website</a>
          <a href="#layanan">Wedding Organizer</a>
          <a href="#paket">Paket</a>
        </div>
        <div className="footer-col">
          <h4>Jelajahi</h4>
          <a href="#karya">Karya</a>
          <a href="#proses">Proses</a>
          <a href="/demo/invitation">Demo Undangan</a>
        </div>
        <div className="footer-col">
          <h4>Kontak</h4>
          {landing.footer.contact.map((c) => <p key={c}>{c}</p>)}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Story Satu Kisah. All rights reserved.</span>
        <span>Dummy preview — visual-first MVP.</span>
      </div>
    </footer>
  );
}
