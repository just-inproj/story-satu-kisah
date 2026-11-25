"use client";

import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  const { testimonials } = landing;
  return (
    <section className="section story-chapter">
      <div className="container">
        <div className="center">
          <Reveal y={24}><p className="eyebrow">{testimonials.eyebrow}</p></Reveal>
          <Reveal y={34} delay={0.05}><h2 className="h2">{testimonials.title}</h2></Reveal>
          <Reveal y={24} delay={0.1}><p className="lead">{testimonials.subtitle}</p></Reveal>
        </div>
        <Reveal y={50} stagger={0.14} className="grid-3" style={{ marginTop: "2.5rem" }}>
          {testimonials.items.map((t) => (
            <article key={t.name} className="card quote-card magic-frame">
              <div className="quote-mark" aria-hidden="true">“</div>
              <blockquote>{t.quote}</blockquote>
              <div className="quote-author">{t.name}</div>
              <div className="quote-role">{t.role} · {t.event}</div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
