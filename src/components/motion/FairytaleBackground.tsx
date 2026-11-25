"use client";

import { useMemo } from "react";
import { useReducedMotion } from "./useReducedMotion";

const PETALS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${(i * 100) / 10}%`,
  delay: `${(i % 7) * 2.4}s`,
  duration: `${16 + (i % 5) * 2.5}s`,
  drift: `${((i % 5) - 2) * 22}px`,
  scale: 0.5 + (i % 4) * 0.1,
}));
const SPARKLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 84) / 8)}%`,
  top: `${10 + ((i * 67) % 76)}%`,
  delay: `${(i % 6) * 0.6}s`,
}));

export function FairytaleBackground() {
  const reduce = useReducedMotion();
  const petals = useMemo(() => PETALS, []);
  const sparkles = useMemo(() => SPARKLES, []);
  if (reduce) return null;
  return (
    <div className="fairytale-layer" aria-hidden="true" style={{ position: "fixed", zIndex: 0 }}>
      {petals.map((p) => (
        <span key={p.id} className="petal" style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration, ["--drift" as string]: p.drift, transform: `scale(${p.scale})` }} />
      ))}
      {sparkles.map((s) => (
        <span key={s.id} className="sparkle" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
      ))}
    </div>
  );
}
