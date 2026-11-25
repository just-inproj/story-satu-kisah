import { landing } from "@/lib/content/landing";

export function ProofStrip() {
  const { proof } = landing;
  return (
    <section className="proof-strip" aria-label="Bukti kepercayaan">
      <div className="container">
        <p className="proof-label">{proof.title}</p>
        <div className="proof-partners" aria-label="Contoh pasangan">
          {proof.partners.map((p) => <span key={p}>{p}</span>)}
        </div>
        <div className="proof-metrics">
          {proof.metrics.map((m) => (
            <div key={m.label} className="metric">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="proof-note">* Data dummy untuk preview visual.</p>
      </div>
    </section>
  );
}
