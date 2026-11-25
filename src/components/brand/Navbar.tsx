"use client";
import { useState } from "react";
import { landing } from "@/lib/content/landing";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a className="brand" href="#" aria-label="Story Satu Kisah beranda">
          Story<span> Satu Kisah</span>
        </a>
        <nav className="nav-links" aria-label="Navigasi utama">
          {landing.nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-primary" href={landing.hero.primaryCta.href} target="_blank" rel="noreferrer" style={{ minHeight: 44, padding: ".65rem 1.2rem" }}>
            Konsultasi
          </a>
          <button className="nav-toggle" aria-label="Buka menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`container mobile-menu ${open ? "open" : ""}`}>
        {landing.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
      </div>
    </header>
  );
}
