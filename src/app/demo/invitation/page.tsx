import { InviteCover } from "@/components/invitation/InviteCover";
import { EventSection } from "@/components/invitation/EventCard";
import { Gallery } from "@/components/invitation/Gallery";
import { RSVPForm } from "@/components/invitation/RSVPForm";
import { Section } from "@/components/primitives/Section";

const events = [
  { title: "Akad Nikah", date: "Sabtu, 12 Desember 2026", time: "08.00 - 10.00 WIB", place: "Masjid Al-Hikmah", address: "Jakarta Selatan", mapUrl: "https://maps.google.com" },
  { title: "Resepsi", date: "Sabtu, 12 Desember 2026", time: "11.00 - 14.00 WIB", place: "The Grand Hall", address: "Jakarta Selatan", mapUrl: "https://maps.google.com" },
];

export default function DemoInvitation() {
  return (
    <main id="main">
      <div style={{ padding: "1rem", textAlign: "center", fontSize: ".875rem", background: "var(--color-muted)", color: "var(--color-muted-fg)" }}>
        <a href="/" style={{ textDecoration: "underline" }}>← Kembali ke landing Story Satu Kisah</a>
      </div>
      <InviteCover guestName="Tamu Undangan" />
      <Section id="couple" narrow>
        <p className="eyebrow">Cerita Kami</p>
        <h2 className="h2">Dua langkah, satu kisah</h2>
        <p className="lead">Kami percaya setiap pertemuan punya makna. Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari awal perjalanan baru kami.</p>
      </Section>
      <EventSection events={events} />
      <Section narrow>
        <p className="eyebrow">Countdown</p>
        <h2 className="h2">Menuju hari bahagia</h2>
        <div className="card" style={{ padding: "1.5rem", marginTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", textAlign: "center" }}>
          {[["120","Hari"],["08","Jam"],["32","Menit"],["15","Detik"]].map(([v,l]) => (
            <div key={l}><div style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>{v}</div><div className="muted">{l}</div></div>
          ))}
        </div>
        <p className="muted" style={{ marginTop: ".75rem" }}>Tanggal acara: Sabtu, 12 Desember 2026. (Dummy countdown)</p>
      </Section>
      <Gallery />
      <RSVPForm />
      <Section muted narrow>
        <p className="eyebrow">Amplop Digital</p>
        <h2 className="h2">Tanda kasih</h2>
        <p className="lead">Kehadiran Anda adalah hadiah terindah. Bila berkenan berbagi tanda kasih, informasi berikut dapat digunakan.</p>
        <div className="card" style={{ padding: "1.5rem", marginTop: "1rem" }}>
          <p style={{ margin: 0, fontWeight: 600 }}>BCA • 1234567890 • a.n. Alya</p>
          <p className="muted" style={{ marginBottom: 0 }}>Dummy — tombol salin rekening akan ditambahkan.</p>
        </div>
      </Section>
      <footer className="section" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div className="narrow" style={{ textAlign: "center" }}>
          <p className="script">Terima kasih</p>
          <p className="muted">Merupakan kehormatan bagi kami atas kehadiran dan doa Anda.</p>
          <p className="muted" style={{ fontSize: ".875rem" }}>© 2026 Story Satu Kisah — Demo Invitation</p>
        </div>
      </footer>
    </main>
  );
}
