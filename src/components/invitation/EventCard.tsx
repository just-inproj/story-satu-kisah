import { Reveal } from "@/components/motion/Reveal";

type Event = { title: string; date: string; time: string; place: string; address: string; mapUrl: string };

export function EventSection({ events }: { events: Event[] }) {
  return (
    <section className="section section-muted" aria-labelledby="event-title">
      <div className="container">
        <Reveal><p className="eyebrow">Detail Acara</p><h2 id="event-title" className="h2">Hari yang kami nantikan</h2></Reveal>
        <div className="grid-2" style={{ marginTop: "2rem" }}>
          {events.map((e) => (
            <article key={e.title} className="card reveal" style={{ padding: "1.5rem" }}>
              <p className="eyebrow">{e.title}</p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", margin: "0 0 .5rem" }}>{e.date}</h3>
              <p className="muted" style={{ margin: 0 }}>{e.time}</p>
              <p style={{ margin: "1rem 0 0", fontWeight: 600 }}>{e.place}</p>
              <p className="muted" style={{ margin: "0 0 1rem" }}>{e.address}</p>
              <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                <a className="btn btn-primary" href={e.mapUrl} target="_blank" rel="noreferrer">Buka Maps</a>
                <a className="btn btn-secondary" href="https://calendar.google.com" target="_blank" rel="noreferrer">Simpan Tanggal</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
