"use client";
import { useState } from "react";
import { landing } from "@/lib/content/landing";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section" id="faq">
      <div className="narrow">
        <div className="center">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Pertanyaan yang sering ditanyakan</h2>
        </div>
        <div className="faq-list">
          {landing.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="faq-item">
                <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{item.q}</span>
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
