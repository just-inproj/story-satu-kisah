export type IconName = "heart" | "check" | "map" | "image" | "gift" | "phone" | "music" | "shield" | "sparkle" | "clock";

export const landing = {
  brand: "Story Satu Kisah",
  tagline: "Wedding Invitation Website & Wedding Organizer",
  nav: [
    { label: "Fitur", href: "#fitur" },
    { label: "Cara Kerja", href: "#proses" },
    { label: "Karya", href: "#karya" },
    { label: "Paket", href: "#paket" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Wedding Invitation Website & Wedding Organizer",
    title: "Setiap kisah layak dirayakan dengan indah.",
    subtitle:
      "Kami membantu pasangan menghadirkan undangan pernikahan digital yang interaktif, elegan, dan mudah dibagikan — dari cerita, detail acara, hingga konfirmasi kehadiran tamu.",
    primaryCta: { label: "Konsultasi WhatsApp", href: "https://wa.me/6281234567890?text=Halo%20Story%20Satu%20Kisah%2C%20saya%20ingin%20konsultasi%20undangan%20pernikahan." },
    secondaryCta: { label: "Lihat Demo Undangan", href: "/demo/invitation" },
    note: "Preview MVP — konten dummy akan diganti data asli.",
    highlights: ["Mobile-first", "RSVP & Wish", "Siap dibagikan"],
  },
  proof: {
    title: "Dipercaya untuk merayakan momen berarti",
    partners: ["Alya & Raka", "Nadia & Dimas", "Sinta & Arif", "Maya & Rizky", "Dina & Fajar", "Putri & Reza"],
    metrics: [
      { value: "50+", label: "Kisah dirayakan", note: "dummy" },
      { value: "4.9/5", label: "Rating klien", note: "dummy" },
      { value: "<24 jam", label: "Respon rata-rata", note: "dummy" },
    ],
  },
  features: [
    { title: "Undangan Personal", desc: "Nama tamu, pesan hangat, dan cerita pasangan tersaji personal di setiap tautan yang dibagikan.", icon: "heart" as IconName },
    { title: "RSVP & Ucapan", desc: "Tamu konfirmasi kehadiran dan kirim doa dalam hitungan detik, langsung dari ponsel.", icon: "check" as IconName },
    { title: "Maps & Kalender", desc: "Lokasi, waktu, dan tombol simpan kalender membantu tamu hadir tanpa kebingungan.", icon: "map" as IconName },
    { title: "Galeri & Love Story", desc: "Tampilkan momen dan perjalanan cinta dengan tata letak editorial yang elegan dan ringan.", icon: "image" as IconName },
    { title: "Amplop Digital", desc: "Opsi tanda kasih yang sopan, aman, dan mudah diakses tanpa mengganggu alur cerita.", icon: "gift" as IconName },
    { title: "Musik & Suasana", desc: "Musik latar opsional yang dikendalikan tamu — hangat, tidak mengganggu, tetap cepat.", icon: "music" as IconName },
  ],
  experience: {
    eyebrow: "Pengalaman Tamu",
    title: "Dirancang untuk tamu, nyaman untuk pasangan.",
    subtitle: "Menggabungkan kejelasan produk digital modern dengan kehangatan cerita pernikahan.",
    points: [
      { title: "Buka cepat di HP", desc: "Struktur ringan, konten prioritas, dan layout mobile-first agar tamu langsung dapat info penting.", icon: "phone" as IconName },
      { title: "Alur yang jelas", desc: "Dari cover, cerita, detail acara, hingga RSVP — tamu tidak perlu menebak langkah berikutnya.", icon: "sparkle" as IconName },
      { title: "Aman & terpercaya", desc: "Informasi disajikan rapi, link mudah dibagikan, dan privasi tamu dijaga sesuai kebutuhan.", icon: "shield" as IconName },
    ],
  },
  demo: {
    title: "Pengalaman tamu yang mengalir",
    subtitle: "Dari membuka undangan hingga konfirmasi hadir — semua terasa sederhana dan natural.",
    panels: [
      { id: "cover", label: "Cover", heading: "Sambutan hangat", text: "Cover personal dengan nama tamu, tanggal, dan tombol buka undangan yang elegan." },
      { id: "detail", label: "Detail Acara", heading: "Info jelas", text: "Akad, resepsi, lokasi, dan tombol simpan kalender dalam satu alur yang rapi." },
      { id: "rsvp", label: "RSVP", heading: "Konfirmasi cepat", text: "Form kehadiran ringkas dengan status sukses yang meyakinkan dan mudah diisi." },
    ],
  },
  process: {
    eyebrow: "Cara Kerja",
    title: "Sederhana, transparan, personal.",
    subtitle: "Proses yang tenang dan terarah agar Anda bisa fokus merayakan momen.",
    steps: [
      { step: "01", title: "Brief Cerita", desc: "Kami dengarkan cerita, kebutuhan, tone visual, dan informasi acara Anda." },
      { step: "02", title: "Desain & Review", desc: "Kami susun narasi, visual, dan fitur; Anda review dengan preview yang jelas." },
      { step: "03", title: "Publish & Bagikan", desc: "Undangan siap dibagikan lewat tautan cantik, siap dibuka di semua perangkat." },
    ],
  },
  templates: {
    eyebrow: "Gaya & Karya",
    title: "Tampilan yang menyesuaikan kisah Anda.",
    subtitle: "Arah visual dapat disesuaikan dengan karakter pasangan — tetap elegan, tetap ringan.",
    items: [
      { name: "Romantic Editorial", tone: "Hangat, serif elegan, rose & gold", color: "linear-gradient(135deg,#f7f1f3,#e7a9bf)" },
      { name: "Modern Clean", tone: "Minimal, rapi, kontras lembut", color: "linear-gradient(135deg,#f5f5f4,#d6d3d1)" },
      { name: "Traditional Elegant", tone: "Klasik, kaya detail, nuansa hangat", color: "linear-gradient(135deg,#efe6ea,#d6b48a)" },
    ],
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Kata mereka yang merayakan kisah.",
    subtitle: "Preview dummy — akan diganti testimoni asli klien.",
    items: [
      { quote: "Undangannya terasa personal banget. Tamu kami bilang mudah dibuka dan informasinya jelas.", name: "Alya Putri", role: "Pengantin, Jakarta", event: "Intimate Wedding" },
      { quote: "Prosesnya cepat dan komunikatif. Desainnya elegan tanpa berlebihan, dan RSVP-nya sangat membantu.", name: "Raka Pratama", role: "Pengantin, Bandung", event: "Garden Reception" },
      { quote: "Timnya responsif dari awal sampai hari H. Tamu tua pun bisa buka undangannya dengan mudah.", name: "Nadia Sari", role: "Pengantin, Depok", event: "Wedding Ceremony" },
    ],
  },
  pricing: {
    eyebrow: "Paket",
    title: "Pilihan yang jelas, sesuai kebutuhan.",
    subtitle: "Harga dummy untuk preview visual. Paket final akan disesuaikan dengan kebutuhan Anda.",
    items: [
      { name: "Starter", price: "Rp799rb", desc: "Untuk undangan digital sederhana dan elegan.", features: ["1 halaman undangan", "RSVP dasar & ucapan", "Maps & kalender", "1x revisi", "Aktif 6 bulan"], featured: false },
      { name: "Signature", price: "Rp1.499rb", desc: "Pilihan terfavorit untuk pengalaman lengkap.", features: ["Semua Starter", "Galeri & love story", "Amplop digital", "Musik latar opsional", "3x revisi", "Support prioritas"], featured: true },
      { name: "Custom", price: "Hubungi kami", desc: "Untuk kebutuhan WO/invitation yang lebih personal.", features: ["Desain custom", "Fitur sesuai kebutuhan", "Pendampingan WO", "Domain/custom request", "Timeline fleksibel"], featured: false },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering ditanyakan.",
    items: [
      { q: "Berapa lama proses pembuatan undangan?", a: "Biasanya 3–7 hari kerja tergantung kelengkapan materi dan jumlah revisi. Untuk kebutuhan mendesak, kami bisa diskusikan timeline khusus." },
      { q: "Apakah undangan bisa dibuka di HP?", a: "Ya. Semua desain mobile-first dan responsif di berbagai ukuran layar, dari HP hingga desktop." },
      { q: "Bisakah tamu RSVP dan kirim ucapan langsung?", a: "Bisa. Kami sediakan form RSVP dan ucapan yang mudah digunakan, dengan tampilan konfirmasi yang jelas." },
      { q: "Apakah bisa request desain custom?", a: "Tentu. Paket Custom dirancang untuk kebutuhan visual, fitur, dan alur cerita yang lebih personal." },
      { q: "Apakah bisa pakai musik, galeri, dan amplop digital?", a: "Bisa. Fitur-fitur ini tersedia sebagai opsi yang dapat disesuaikan agar tetap elegan dan tidak mengganggu pengalaman tamu." },
      { q: "Bagaimana cara mulai?", a: "Klik tombol Konsultasi WhatsApp, ceritakan kebutuhan Anda, lalu tim kami akan membantu rekomendasi paket dan alur pengerjaan." },
    ],
  },
  finalCta: {
    title: "Mulai dari satu kisah.",
    subtitle: "Ceritakan rencana Anda. Kami bantu wujudkan undangan yang terasa personal, elegan, dan mudah dibagikan.",
    cta: { label: "Konsultasi via WhatsApp", href: "https://wa.me/6281234567890?text=Halo%20Story%20Satu%20Kisah%2C%20saya%20ingin%20konsultasi%20undangan%20pernikahan." },
  },
  footer: {
    desc: "Wedding Invitation Website & Wedding Organizer. Merayakan kisah dengan hangat, elegan, dan berkesan.",
    contact: [
      { label: "WhatsApp", value: "+62 812-3456-7890 (dummy)", href: "https://wa.me/6281234567890" },
      { label: "Instagram", value: "@storysatukisah (dummy)", href: "https://instagram.com/storysatukisah" },
      { label: "Email", value: "hello@storysatukisah.com (dummy)", href: "mailto:hello@storysatukisah.com" },
    ],
    legal: "© 2026 Story Satu Kisah. All rights reserved.",
  },
} as const;
