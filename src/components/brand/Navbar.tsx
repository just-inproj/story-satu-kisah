"use client";
import { useEffect, useState } from "react";
import { landing } from "@/lib/content/landing";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#" aria-label="Story Satu Kisah beranda">
          Story<span> Satu Kisah</span>
        </a>
        <nav className="nav-links" aria-label="Navigasi utama">
          {landing.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-primary nav-cta" href={landing.hero.primaryCta.href} target="_blank" rel="noreferrer">Konsultasi</a>
          <button className="nav-toggle" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="container mobile-menu-inner">
          {landing.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="btn btn-primary btn-block" href={landing.hero.primaryCta.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Konsultasi WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
