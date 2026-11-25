import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display-serif", display: "swap" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://storysatukisah.com"),
  title: "Story Satu Kisah — Wedding Invitation Website & Wedding Organizer",
  description:
    "Platform undangan pernikahan digital interaktif, elegan, dan mobile-first. Story Satu Kisah membantu pasangan merayakan kisah dengan undangan yang indah, mudah dibagikan, dan berkesan.",
  keywords: ["undangan pernikahan digital", "wedding invitation website", "wedding organizer", "undangan online", "RSVP digital"],
  openGraph: {
    title: "Story Satu Kisah — Wedding Invitation Website & Wedding Organizer",
    description: "Undangan pernikahan digital interaktif, elegan, dan mobile-first. Ceritakan kisahmu dengan indah.",
    type: "website",
    locale: "id_ID",
    siteName: "Story Satu Kisah",
  },
  twitter: { card: "summary_large_image", title: "Story Satu Kisah", description: "Undangan pernikahan digital interaktif, elegan, dan mobile-first." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9fb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body>
        <a className="skip-link" href="#main">Lewati ke konten</a>
        {children}
      </body>
    </html>
  );
}
