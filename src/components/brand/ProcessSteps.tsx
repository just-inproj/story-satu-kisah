"use client";

import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessSteps() {
  const { process } = landing;
  return (
    <section className="section story-chapter" id="proses">
      <div className="container">
        <div className="center">
          <Reveal y={24}><p className="eyebrow">{process.eyebrow}</p></Reveal>
          <Reveal y={34} delay={0.05}><h2 className="h2">{process.title}</h2></Reveal>
          <Reveal y={24} delay={0.1}><p className="lead">{process.subtitle}</p></Reveal>
        </div>
        <div className="process-wrap">
          <div className="storybook-path" aria-hidden="true" />
          <Reveal y={50} stagger={0.16} className="grid-3 process-grid">
            {process.steps.map((s, i) => (
              <article key={s.step} className="card step-card magic-frame">
                <div className="step-num" aria-hidden="true">{s.step}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
                {i < process.steps.length - 1 && <div className="step-connector" aria-hidden="true" />}
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
