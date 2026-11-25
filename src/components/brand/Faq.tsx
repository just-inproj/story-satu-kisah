"use client";

import { useState } from "react";
import { landing } from "@/lib/content/landing";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { faq } = landing;
  return (
    <section className="section story-chapter" id="faq">
      <div className="narrow">
        <div className="center">
          <Reveal y={24}><p className="eyebrow">{faq.eyebrow}</p></Reveal>
          <Reveal y={34} delay={0.05}><h2 className="h2">{faq.title}</h2></Reveal>
        </div>
        <Reveal y={30} stagger={0.08} className="faq-list">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-a-wrap" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div className="faq-a"><p>{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
