import type { ReactNode } from "react";
import { landing, type IconName } from "@/lib/content/landing";

const icons: Record<IconName, ReactNode> = {
  heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l1.7 1.7L12 20.5l7.1-7.1 1.7-1.7a5 5 0 0 0 0-7.1Z"/></svg>,
  check: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>,
  map: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  image: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
  gift: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8c-1.5 0-4-1-4-3s2-2 4 1c2-3 4-1 4 1s-2.5 3-4 3Z"/></svg>,
  phone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>,
  music: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 7.5-7 10-4-2.5-7-5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>,
  sparkle: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3Z"/></svg>,
  clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
};

export function Experience() {
  const { experience } = landing;
  return (
    <section className="section">
      <div className="container experience-grid">
        <div>
          <p className="eyebrow">{experience.eyebrow}</p>
          <h2 className="h2">{experience.title}</h2>
          <p className="lead">{experience.subtitle}</p>
          <div className="experience-points">
            {experience.points.map((p) => (
              <div key={p.title} className="experience-point">
                <div className="feature-icon sm">{icons[p.icon]}</div>
                <div>
                  <h3 className="h3" style={{ fontSize: "1.25rem", marginBottom: ".25rem" }}>{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-visual card" aria-hidden="true">
          <div className="experience-stat-grid">
            <div className="exp-stat"><strong>Mobile-first</strong><span>Nyaman di semua layar</span></div>
            <div className="exp-stat"><strong>Interaktif</strong><span>RSVP, maps, kalender</span></div>
            <div className="exp-stat"><strong>Elegan</strong><span>Visual hangat & premium</span></div>
            <div className="exp-stat"><strong>Cepat</strong><span>Ringan & mudah dibagikan</span></div>
          </div>
          <div className="exp-quote">
            <p className="script">"Setiap kisah layak dirayakan dengan indah."</p>
            <span>— Story Satu Kisah</span>
          </div>
        </div>
      </div>
    </section>
  );
}
