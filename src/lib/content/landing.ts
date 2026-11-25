export const landing = {
  brand: "Story Satu Kisah",
  nav: [
    { label: "Layanan", href: "#layanan" },
    { label: "Proses", href: "#proses" },
    { label: "Karya", href: "#karya" },
    { label: "Paket", href: "#paket" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Wedding Invitation Website & Wedding Organizer",
    title: "Setiap kisah layak dirayakan dengan indah.",
    subtitle:
      "Kami membantu pasangan menghadirkan undangan pernikahan digital yang interaktif, elegan, dan mudah dibagikan — dari cerita hingga hari bahagia.",
    primaryCta: { label: "Konsultasi WhatsApp", href: "https://wa.me/6281234567890" },
    secondaryCta: { label: "Lihat Demo Undangan", href: "/demo/invitation" },
    note: "Dummy content — nomor & metrik akan diganti data asli.",
  },
  proof: {
    title: "Dipercaya untuk merayakan momen berarti",
    partners: ["Alya & Raka", "Nadia & Dimas", "Sinta & Arif", "Maya & Rizky", "Dina & Fajar"],
    metrics: [
      { value: "50+", label: "Kisah dirayakan" },
      { value: "4.9/5", label: "Rating klien" },
      { value: "24 jam", label: "Respon rata-rata" },
    ],
  },
  features: [
    { title: "Undangan Personal", desc: "Nama tamu, pesan hangat, dan cerita pasangan tersaji personal di setiap tautan.", icon: "heart" },
    { title: "RSVP Mudah", desc: "Tamu konfirmasi kehadiran dalam hitungan detik, langsung dari ponsel.", icon: "check" },
    { title: "Maps & Kalender", desc: "Lokasi dan waktu acara jelas, siap disimpan ke kalender tamu.", icon: "map" },
    { title: "Galeri & Cerita", desc: "Tampilkan momen dan perjalanan cinta dengan tata letak editorial elegan.", icon: "image" },
    { title: "Amplop Digital", desc: "Opsi tanda kasih yang sopan, aman, dan mudah diakses tamu.", icon: "gift" },
    { title: "Mobile-First Cepat", desc: "Ringan dibuka di semua perangkat, dengan pengalaman tamu yang mulus.", icon: "phone" },
  ],
  demo: {
    title: "Pengalaman tamu yang mengalir",
    subtitle: "Dari membuka undangan hingga konfirmasi hadir — semua terasa sederhana.",
    panels: [
      { id: "cover", label: "Cover", heading: "Sambutan hangat", text: "Cover personal dengan nama tamu, tanggal, dan tombol buka undangan." },
      { id: "detail", label: "Detail Acara", heading: "Info jelas", text: "Akad, resepsi, lokasi, dan tombol simpan kalender dalam satu alur." },
      { id: "rsvp", label: "RSVP", heading: "Konfirmasi cepat", text: "Form kehadiran ringkas dengan status sukses yang meyakinkan." },
    ],
  },
  process: [
    { step: "01", title: "Brief Cerita", desc: "Kami dengarkan cerita, kebutuhan, tone, dan daftar tamu Anda." },
    { step: "02", title: "Desain & Review", desc: "Kami susun narasi, visual, dan fitur; Anda review dengan nyaman." },
    { step: "03", title: "Publish & Bagikan", desc: "Undangan siap dibagikan ke tamu lewat tautan yang cantik." },
  ],
  templates: [
    { name: "Romantic Editorial", tone: "Hangat, serif elegan, rose & gold", color: "linear-gradient(135deg,#f7f1f3,#e7a9bf)" },
    { name: "Modern Clean", tone: "Minimal, rapi, kontras lembut", color: "linear-gradient(135deg,#f5f5f4,#d6d3d1)" },
    { name: "Traditional Elegant", tone: "Klasik, kaya detail, nuansa hangat", color: "linear-gradient(135deg,#efe6ea,#d6b48a)" },
  ],
  testimonials: [
    { quote: "Undangannya terasa personal banget. Tamu kami bilang mudah dibuka dan informasinya jelas.", name: "Alya", role: "Pengantin, Jakarta", event: "Intimate Wedding" },
    { quote: "Prosesnya cepat dan komunikatif. Desainnya elegan tanpa berlebihan.", name: "Raka", role: "Pengantin, Bandung", event: "Garden Reception" },
    { quote: "RSVP dan maps sangat membantu tamu. Timnya responsif dari awal sampai hari H.", name: "Nadia", role: "Pengantin, Depok", event: "Wedding Ceremony" },
  ],
  pricing: [
    { name: "Starter", price: "Rp799rb", desc: "Untuk undangan digital sederhana dan elegan.", features: ["1 halaman undangan", "RSVP dasar", "Maps & kalender", "1x revisi"], featured: false },
    { name: "Signature", price: "Rp1.499rb", desc: "Pilihan terfavorit untuk pengalaman lengkap.", features: ["Semua Starter", "Galeri & cerita", "Amplop digital", "3x revisi", "Support prioritas"], featured: true },
    { name: "Custom", price: "Hubungi kami", desc: "Untuk kebutuhan WO/invitation yang lebih personal.", features: ["Desain custom", "Fitur sesuai kebutuhan", "Pendampingan WO", "Timeline fleksibel"], featured: false },
  ],
  faq: [
    { q: "Berapa lama proses pembuatan undangan?", a: "Biasanya 3–7 hari kerja tergantung kelengkapan materi dan jumlah revisi. (Dummy)" },
    { q: "Apakah undangan bisa dibuka di HP?", a: "Ya. Semua desain mobile-first dan responsif di berbagai ukuran layar." },
    { q: "Bisakah tamu RSVP langsung?", a: "Bisa. Kami sediakan form RSVP yang mudah digunakan dan dapat disesuaikan." },
    { q: "Apakah bisa request desain custom?", a: "Tentu. Paket Custom dirancang untuk kebutuhan visual dan fitur yang lebih personal." },
  ],
  finalCta: {
    title: "Mulai dari satu kisah",
    subtitle: "Ceritakan rencana Anda. Kami bantu wujudkan undangan yang terasa personal, elegan, dan mudah dibagikan.",
    cta: { label: "Konsultasi via WhatsApp", href: "https://wa.me/6281234567890" },
  },
  footer: {
    desc: "Wedding Invitation Website & Wedding Organizer. Merayakan kisah dengan hangat dan elegan.",
    contact: ["WhatsApp: +62 812-3456-7890 (dummy)", "Instagram: @storysatukisah (dummy)", "Email: hello@storysatukisah.com (dummy)"],
  },
} as const;
