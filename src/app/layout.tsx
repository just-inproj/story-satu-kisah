import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Story Satu Kisah — Wedding Invitation Website & Wedding Organizer",
  description:
    "Undangan pernikahan digital interaktif, elegan, dan mobile-first. Story Satu Kisah membantu pasangan merayakan kisah dengan indah.",
  openGraph: {
    title: "Story Satu Kisah — Wedding Invitation Website & Wedding Organizer",
    description:
      "Undangan pernikahan digital interaktif, elegan, dan mobile-first. Ceritakan kisahmu dengan indah.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Lewati ke konten</a>
        {children}
      </body>
    </html>
  );
}
