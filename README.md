# Story Satu Kisah — Design System MVP

Design system dan prototype wedding invitation website untuk **Story Satu Kisah** (Wedding Organizer).

## Scope
- **Token 3-layer**: `tokens/design-tokens.json`, `tokens/tokens.css`
- **Docs**: brand guidelines, reverse-design matrix
- **Komponen**: primitives (`Button`, `Section`), motion (`Reveal`), invitation (`InviteCover`, `EventSection`, `Gallery`, `RSVPForm`)
- **Prototype**: `src/app/page.tsx` — invitation MVP mobile-first

## Arah Desain
- Romantic Editorial Premium
- Reverse-design selektif dari referensi publik (Mobbin prinsip, Apdesignku/Wedew benchmark fitur) — tanpa salin 1:1
- Aksesibilitas: semantic HTML, focus visible, skip link, reduced-motion, target sentuh 44px

## Menjalankan (butuh dependency terpasang)
```bash
npm install
npm run dev
```

## Catatan Lingkungan
Scaffold Next.js dibuat manual karena `npm install` di environment ini gagal akibat error cache npm (`ENOENT rename tmp`). File source/token/docs siap; install dependency perlu environment npm/bun yang stabil.
