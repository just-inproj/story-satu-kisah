import { landing } from "@/lib/content/landing";

export function FinalCta() {
  const { finalCta } = landing;
  return (
    <section className="section section-dark final-cta">
      <div className="narrow center">
        <p className="eyebrow" style={{ color: "#e7a9bf" }}>Mulai dari sini</p>
        <h2 className="h2">{finalCta.title}</h2>
        <p className="lead">{finalCta.subtitle}</p>
        <div className="final-cta-actions">
          <a className="btn btn-primary" href={finalCta.cta.href} target="_blank" rel="noreferrer">{finalCta.cta.label}</a>
          <a className="btn btn-secondary btn-on-dark" href="/demo/invitation">Lihat Demo</a>
        </div>
      </div>
    </section>
  );
}
