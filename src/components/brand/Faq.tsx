"use client";
import { useState } from "react";
import { landing } from "@/lib/content/landing";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { faq } = landing;
  return (
    <section className="section" id="faq">
      <div className="narrow">
        <div className="center">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="h2">{faq.title}</h2>
        </div>
        <div className="faq-list">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="faq-item">
                <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
