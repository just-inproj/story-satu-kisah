"use client";
import { useState } from "react";
import { Button } from "@/components/primitives/Button";

export function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  return (
    <section className="section" aria-labelledby="rsvp-title">
      <div className="narrow">
        <p className="eyebrow">RSVP</p>
        <h2 id="rsvp-title" className="h2">Konfirmasi Kehadiran</h2>
        <p className="lead">Kehadiran dan doa Anda berarti bagi kami.</p>
        <form className="card" style={{ padding: "1.5rem", marginTop: "1.5rem", display: "grid", gap: "1rem" }}
          onSubmit={(e) => { e.preventDefault(); setStatus("loading"); setTimeout(() => setStatus("success"), 600); }}>
          <label style={{ display: "grid", gap: ".4rem" }}>
            <span>Nama</span>
            <input required name="name" autoComplete="name" style={inputStyle} />
          </label>
          <label style={{ display: "grid", gap: ".4rem" }}>
            <span>Kehadiran</span>
            <select name="attendance" style={inputStyle}>
              <option value="hadir">Hadir</option>
              <option value="tidak-hadir">Belum bisa hadir</option>
            </select>
          </label>
          <label style={{ display: "grid", gap: ".4rem" }}>
            <span>Jumlah tamu</span>
            <input required name="count" type="number" min={1} max={5} defaultValue={1} style={inputStyle} />
          </label>
          <label style={{ display: "grid", gap: ".4rem" }}>
            <span>Ucapan</span>
            <textarea name="message" rows={4} style={inputStyle} placeholder="Tulis doa atau ucapan" />
          </label>
          <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Mengirim..." : "Kirim RSVP"}</Button>
          <p role="status" className="muted" style={{ minHeight: 24, margin: 0 }}>
            {status === "success" ? "Terima kasih, konfirmasi Anda sudah tercatat." : ""}
          </p>
        </form>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", minHeight: 44, padding: "0.75rem 1rem", borderRadius: "0.75rem",
  border: "1px solid var(--color-border)", background: "var(--color-bg)", color: "var(--color-fg)"
};
