import { landing } from "@/lib/content/landing";

export function FinalCta() {
  const { finalCta } = landing;
  return (
    <section className="section section-dark">
      <div className="narrow center">
        <p className="eyebrow">Siap memulai?</p>
        <h2 className="h2">{finalCta.title}</h2>
        <p className="lead">{finalCta.subtitle}</p>
        <div style={{ marginTop: "1.75rem", display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-primary" href={finalCta.cta.href} target="_blank" rel="noreferrer">{finalCta.cta.label}</a>
          <a className="btn btn-secondary" href="/demo/invitation">Lihat Demo</a>
        </div>
      </div>
    </section>
  );
}
