import { Reveal } from "@/components/motion/Reveal";

const photos = [
  { alt: "Momen pasangan 1", bg: "linear-gradient(135deg,#efe6ea,#e7a9bf)" },
  { alt: "Momen pasangan 2", bg: "linear-gradient(135deg,#f7f1f3,#d6b48a)" },
  { alt: "Momen pasangan 3", bg: "linear-gradient(135deg,#e8d6de,#fff9fb)" },
  { alt: "Momen pasangan 4", bg: "linear-gradient(135deg,#d6b48a,#efe6ea)" },
];

export function Gallery() {
  return (
    <section className="section section-muted" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal><p className="eyebrow">Galeri</p><h2 id="gallery-title" className="h2">Potongan kisah kami</h2></Reveal>
        <div className="grid-2" style={{ marginTop: "2rem" }}>
          {photos.map((p) => (
            <div key={p.alt} role="img" aria-label={p.alt} className="card reveal"
              style={{ minHeight: 260, background: p.bg, border: "1px solid var(--color-border)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
