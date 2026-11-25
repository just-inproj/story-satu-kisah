import { landing } from "@/lib/content/landing";

export function ProcessSteps() {
  const { process } = landing;
  return (
    <section className="section" id="proses">
      <div className="container">
        <div className="center">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2 className="h2">{process.title}</h2>
          <p className="lead">{process.subtitle}</p>
        </div>
        <div className="grid-3 process-grid">
          {process.steps.map((s, i) => (
            <article key={s.step} className="card step-card">
              <div className="step-num" aria-hidden="true">{s.step}</div>
              <h3 className="h3">{s.title}</h3>
              <p>{s.desc}</p>
              {i < process.steps.length - 1 && <div className="step-connector" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
