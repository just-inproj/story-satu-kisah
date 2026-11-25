"use client";
import { useState } from "react";
import { Button } from "@/components/primitives/Button";

export function InviteCover({ guestName }: { guestName: string }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="section" aria-labelledby="cover-title" style={{ minHeight: "88vh", display: "grid", placeItems: "center" }}>
      <div className="narrow" style={{ textAlign: "center" }}>
        <p className="script reveal">The Wedding of</p>
        <h1 id="cover-title" className="display reveal delay-1">Alya &amp; Raka</h1>
        <p className="lead reveal delay-2" style={{ marginInline: "auto" }}>
          Sabtu, 12 Desember 2026 • Jakarta
        </p>
        <div className="card reveal delay-3" style={{ padding: "1.5rem", margin: "2rem auto 0", maxWidth: 480 }}>
          <p className="eyebrow">Undangan untuk</p>
          <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-display)", margin: "0 0 1rem" }}>{guestName}</p>
          {!open ? (
            <Button onClick={() => { setOpen(true); document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" }); }}>
              Buka Undangan
            </Button>
          ) : (
            <p className="muted" role="status">Undangan dibuka. Silakan gulir ke bawah.</p>
          )}
        </div>
      </div>
    </section>
  );
}
