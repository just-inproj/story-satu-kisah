"use client";

import { Children, type HTMLAttributes, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  rotate?: number;
  stagger?: number;
  scrub?: boolean;
  start?: string;
};

export function Reveal({
  className,
  delay = 0,
  y = 40,
  x = 0,
  scale = 1,
  blur = 0,
  rotate = 0,
  stagger = 0,
  scrub = false,
  start = "top 88%",
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (reduce || !el) return;
      const targets = stagger > 0 ? Array.from(el.children) : el;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92;
      const from = { autoAlpha: 0, y, x, scale, rotate, filter: blur ? `blur(${blur}px)` : "blur(0px)" };
      const to = {
        autoAlpha: 1, y: 0, x: 0, scale: 1, rotate: 0, filter: "blur(0px)",
        duration: scrub ? 1 : 0.9,
        delay: scrub ? 0 : delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "power3.out",
        overwrite: "auto" as const,
        scrollTrigger: {
          trigger: el,
          start,
          end: scrub ? "bottom 55%" : undefined,
          scrub: scrub ? 1.2 : false,
          once: !scrub,
        },
      };
      if (inView && !scrub) {
        gsap.fromTo(targets, { ...from, y: Math.min(y, 24), blur: 0, filter: "blur(0px)" }, { ...to, duration: 0.7 });
      } else {
        gsap.fromTo(targets, from, to);
      }
    },
    { scope: ref, dependencies: [reduce, delay, y, x, scale, blur, rotate, stagger, scrub, start] },
  );

  return (
    <div ref={ref} className={cn("reveal", className)} {...props}>
      {children}
    </div>
  );
}
