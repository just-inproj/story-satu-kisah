"use client";

import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function TemplatePreview() {
  const { templates } = landing;
  return (
    <section className="section section-muted story-chapter" id="karya">
      <div className="container">
        <Reveal y={24}><p className="eyebrow">{templates.eyebrow}</p></Reveal>
        <Reveal y={34} delay={0.05}><h2 className="h2">{templates.title}</h2></Reveal>
        <Reveal y={24} delay={0.1}><p className="lead">{templates.subtitle}</p></Reveal>
        <Reveal y={50} stagger={0.14} className="grid-3" style={{ marginTop: "2.5rem" }}>
          {templates.items.map((t) => (
            <article key={t.name} className="card template-card magic-frame">
              <div className="template-preview" style={{ background: t.color }} aria-hidden="true">
                <div className="template-mini">
                  <div className="script">The Wedding</div>
                  <div>A &amp; R</div>
                </div>
              </div>
              <h3 className="h3">{t.name}</h3>
              <p>{t.tone}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
