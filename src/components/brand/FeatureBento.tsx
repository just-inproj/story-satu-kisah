import { landing } from "@/lib/content/landing";

const icons: Record<string, JSX.Element> = {
  heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l1.7 1.7L12 20.5l7.1-7.1 1.7-1.7a5 5 0 0 0 0-7.1Z"/></svg>,
  check: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5"/></svg>,
  map: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  image: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
  gift: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8c-1.5 0-4-1-4-3s2-2 4 1c2-3 4-1 4 1s-2.5 3-4 3Z"/></svg>,
  phone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>,
};

export function FeatureBento() {
  return (
    <section className="section" id="layanan">
      <div className="container">
        <p className="eyebrow">Layanan & Fitur</p>
        <h2 className="h2">Semua yang tamu butuhkan,<br />dalam satu kisah indah.</h2>
        <p className="lead">Fitur undangan digital yang dirancang untuk kenyamanan pasangan dan pengalaman tamu.</p>
        <div className="bento">
          {landing.features.map((f) => (
            <article key={f.title} className="card feature-card reveal">
              <div className="feature-icon" aria-hidden="true">{icons[f.icon]}</div>
              <h3 className="h3">{f.title}</h3>
              <p>{f.desc}</p>
              <div className="feature-visual" aria-hidden="true">
                <div style={{ background: "#fff", border: "1px solid #e8d6de", borderRadius: 12, padding: ".75rem", width: "78%" }}>
                  <div style={{ height: 8, width: "60%", background: "#efe6ea", borderRadius: 99, marginBottom: 8 }} />
                  <div style={{ height: 8, width: "90%", background: "#f7f1f3", borderRadius: 99, marginBottom: 8 }} />
                  <div style={{ height: 28, width: "55%", background: "#fce7ef", borderRadius: 99 }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
