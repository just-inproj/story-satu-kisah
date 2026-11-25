import { landing } from "@/lib/content/landing";

export function ProcessSteps() {
  return (
    <section className="section" id="proses">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Proses</p>
          <h2 className="h2">Sederhana, transparan, personal</h2>
          <p className="lead">Kami menjaga proses tetap nyaman agar Anda bisa fokus merayakan momen.</p>
        </div>
        <div className="grid-3" style={{ marginTop: "2.5rem" }}>
          {landing.process.map((s) => (
            <article key={s.step} className="card step-card reveal">
              <div className="step-num">{s.step}</div>
              <h3 className="h3">{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
