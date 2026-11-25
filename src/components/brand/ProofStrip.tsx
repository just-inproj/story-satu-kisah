import { landing } from "@/lib/content/landing";

export function ProofStrip() {
  const { proof } = landing;
  return (
    <section className="proof-strip" aria-label="Bukti kepercayaan">
      <div className="container">
        <p className="proof-label">{proof.title}</p>
        <div className="proof-partners" aria-label="Klien dummy">
          {proof.partners.map((p) => <span key={p}>{p}</span>)}
        </div>
        <div className="proof-metrics">
          {proof.metrics.map((m) => (
            <div key={m.label}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label} *</div>
            </div>
          ))}
        </div>
        <p className="center muted" style={{ fontSize: ".75rem", marginTop: "1rem" }}>* Data dummy untuk preview visual.</p>
      </div>
    </section>
  );
}
