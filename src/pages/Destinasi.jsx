import { useState } from 'react'
import Navbar from '../components/Navbar'

const foto1 = "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800"
const foto2 = "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400"
const foto3 = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
const foto4 = "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400"

const tabs = ["Profil", "Galeri", "Virtual Tour", "Paket Wisata", "Ulasan"]

const reviews = [
  {
    id: 1,
    initials: "AS",
    name: "Andi Setiawan",
    date: "15 Mei 2025",
    stars: 5,
    text: "Pengalaman yang luar biasa. Udara segar hutan pinus benar-benar terasa berbeda. Jalur meditasinya tertata rapi dan pemandunya sangat informatif.",
  },
  {
    id: 2,
    initials: "NR",
    name: "Nadia Rahmawati",
    date: "10 Mei 2025",
    stars: 5,
    text: "Booking sangat mudah lewat aplikasi. Konfirmasi langsung masuk ke email. Cocok untuk retreat akhir pekan dari keramaian kota.",
  },
]

const gallery = [
  { id: 1, emoji: "🌲", badge: "★ Resmi" },
  { id: 2, emoji: "🌿", badge: "★ Resmi" },
  { id: 3, emoji: "🧘", badge: "👤 UGC" },
  { id: 4, emoji: "🏕️", badge: "★ Resmi" },
  { id: 5, emoji: "🌅", badge: "👤 UGC" },
  { id: 6, label: "+34 foto" },
]

export default function Destinasi() {
  const [activeTab, setActiveTab] = useState("Profil")
  const [peserta, setPeserta] = useState(2)
  const hargaSatuan = 185000
  const total = (hargaSatuan * peserta).toLocaleString("id-ID")

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[50px]">

        {/* ===== HERO ===== */}
        <div className="relative h-[280px] flex">
          {/* Foto utama kiri */}
          <div className="w-[59%] h-full overflow-hidden">
            <img src={foto1} alt="main" className="w-full h-full object-cover" />
          </div>
          {/* 3 foto kanan */}
          <div className="flex flex-1">
            <div className="flex-1 overflow-hidden">
              <img src={foto2} alt="s1" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden">
              <img src={foto3} alt="s2" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden bg-[#085041] flex items-center justify-center">
              <span className="text-4xl">🌅</span>
            </div>
          </div>

          {/* Overlay info bawah */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-7 pb-4 pt-10">
            <span className="bg-[#0f6e56] text-white text-[11px] px-3 py-1 rounded-full">
              Forest Healing
            </span>
            <h1 className="text-white text-[22px] font-normal mt-1">
              Forest Healing Padusan
            </h1>
            <p className="text-white/75 text-[13px]">
              Lereng Gunung Welirang, Pacet, Mojokerto · 900 mdpl · ★ 4.8 (127 ulasan)
            </p>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div className="border-b border-[#d1d5db] flex px-7">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-[13px] transition border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-[#0f6e56] text-[#0f6e56]"
                  : "border-transparent text-[#4b5563] hover:text-[#0f6e56]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===== BODY 2 KOLOM ===== */}
        <div className="flex gap-6 px-7 py-6 max-w-[1280px]">

          {/* ===== KOLOM KIRI ===== */}
          <div className="flex flex-col gap-4 flex-1">

            {/* Tentang Destinasi */}
            <div className="border border-[#d1d5db] rounded-xl p-5">
              <h2 className="text-[#111827] text-[15px] font-medium mb-3 border-l-4 border-[#0f6e56] pl-2">
                Tentang Destinasi
              </h2>
              <p className="text-[#4b5563] text-[13px] leading-[22px] mb-4">
                Forest Healing Padusan menawarkan pengalaman penyembuhan melalui alam di
                tengah hutan pinus yang lebat. Dengan ketinggian 900 mdpl, udara segar
                mengandung fitonsida alami dari pepohonan pinus yang terbukti secara ilmiah
                membantu menurunkan kadar kortisol dan memperkuat sistem imun.
              </p>
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Ketinggian", value: "900 mdpl" },
                  { label: "Luas area", value: "±12 hektare" },
                  { label: "Jam operasional", value: "06.00 – 17.00 WIB" },
                  { label: "Kapasitas harian", value: "Max. 80 pengunjung" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[#9ca3af] text-[11px]">{item.label}</p>
                    <p className="text-[#111827] text-[13px] font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="border border-[#d1d5db] rounded-xl p-5">
              <h2 className="text-[#111827] text-[15px] font-medium mb-3 border-l-4 border-[#0f6e56] pl-2">
                Virtual Tour 360°
              </h2>
              <div className="bg-[#085041] rounded-lg h-[164px] flex flex-col items-center justify-center gap-2 mb-3">
                <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">▶</span>
                </div>
                <p className="text-white text-[13px]">Jelajahi Hutan Padusan</p>
                <p className="text-white/60 text-[11px]">Foto 360° interaktif — Pannellum.js</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["📍 Titik masuk", "🌲 Jalur meditasi", "🏕️ Area camp"].map((btn) => (
                  <button
                    key={btn}
                    className="border border-[#d1d5db] text-[#4b5563] text-[12px] py-1.5 rounded-lg hover:border-[#0f6e56] hover:text-[#0f6e56] transition"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            {/* Galeri */}
            <div className="border border-[#d1d5db] rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[#111827] text-[15px] font-medium">Galeri</h2>
                  <div className="flex gap-2">
                    <span className="bg-[#e8f5f0] text-[#0f6e56] text-[10px] px-2 py-1 rounded-full">★ Resmi</span>
                    <span className="border border-[#d1d5db] text-[#4b5563] text-[10px] px-2 py-1 rounded-full">👤 Pengunjung</span>
                  </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {gallery.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#085041] rounded-lg h-[72px] flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition"
                  >
                    {item.emoji && <span className="text-2xl">{item.emoji}</span>}
                    {item.label && (
                      <span className="text-white text-[13px] font-medium">{item.label}</span>
                    )}
                    {item.badge && (
                      <span className="absolute bottom-1 right-1 bg-black/40 text-white text-[9px] px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <button className="w-full border border-[#d1d5db] text-[#4b5563] text-[13px] py-2 rounded-lg hover:border-[#0f6e56] hover:text-[#0f6e56] transition">
                Upload foto Anda
              </button>
            </div>

            {/* Ulasan */}
            <div className="border border-[#d1d5db] rounded-xl p-5">
              <h2 className="text-[#111827] text-[15px] font-medium mb-4 border-l-4 border-[#0f6e56] pl-2">
                Ulasan Pengunjung
              </h2>
              {/* Rating summary */}
              <div className="flex gap-5 mb-5">
                <div className="flex flex-col items-center w-[70px]">
                  <span className="text-[#111827] text-[32px] font-light">4.8</span>
                  <span className="text-[#0f6e56] text-[13px]">★★★★★</span>
                  <span className="text-[#9ca3af] text-[11px]">127 ulasan</span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1 justify-center">
                  {[
                    { star: "5★", pct: 78, w: "78%", color: "#085041" },
                    { star: "4★", pct: 15, w: "15%", color: "#0f6e56" },
                    { star: "3★", pct: 7,  w: "7%",  color: "#5dcaa5" },
                  ].map((r) => (
                    <div key={r.star} className="flex items-center gap-2">
                      <span className="text-[11px] text-[#4b5563] w-5">{r.star}</span>
                      <div className="flex-1 bg-[#e5e7eb] rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full transition-all"
                          style={{ width: r.w, backgroundColor: r.color }}
                        />
                      </div>
                      <span className="text-[11px] text-[#9ca3af] w-7">{r.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Review items */}
              <div className="flex flex-col gap-4">
                {reviews.map((r) => (
                  <div key={r.id} className="border-t border-[#f3f4f6] pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#0f6e56] rounded-full flex items-center justify-center">
                          <span className="text-white text-[11px]">{r.initials}</span>
                        </div>
                        <div>
                          <p className="text-[#111827] text-[13px]">{r.name}</p>
                          <p className="text-[#9ca3af] text-[11px]">{r.date}</p>
                        </div>
                      </div>
                      <span className="text-[#0f6e56] text-[13px]">{"★".repeat(r.stars)}</span>
                    </div>
                    <p className="text-[#4b5563] text-[13px] leading-[20px]">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ===== SIDEBAR KANAN ===== */}
          <div className="w-[449px] shrink-0 flex flex-col gap-4">

            {/* Status Strip */}
            <div className="bg-[#e8f5f0] border border-[#5dcaa5] rounded-xl px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0f6e56] rounded-full"></div>
              <span className="text-[#0f6e56] text-[13px]">
                Tersedia untuk booking — 3 slot tersisa minggu ini
              </span>
            </div>
            {/* Booking Card */}
            <div className="border border-[#d1d5db] rounded-xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#e8f5f0] px-4 py-3 flex items-center justify-between border-b border-[#5dcaa5]">
                <div>
                  <p className="text-[#0f6e56] text-[14px] font-medium">Forest Bathing Dasar</p>
                  <p className="text-[#4B5563] text-[11px]">Paket terpopuler</p>
                </div>
                <div className="text-right">
                  <span className="text-[#0f6e56] text-[16px] font-medium">Rp185k</span>
                  <span className="text-[#4B5563] text-[11px]"> /orang</span>
                </div>
              </div>
              {/* Body */}
              <div className="p-4 flex flex-col gap-3">
                {[
                  "Durasi 3 jam (08.00–11.00)",
                  "Maks. 15 peserta per sesi",
                  "Dipandu naturalis bersertifikat",
                ].map((item) => (
                  <p key={item} className="text-[#4b5563] text-[13px] flex items-center gap-2">
                    <span className="text-[#5dcaa5]">✓</span> {item}
                  </p>
                ))}
                {/* Tags */}
                <div className="flex gap-2">
                  {["Teh herbal", "Asuransi", "Sertifikat"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#f0faf6] text-[#0f6e56] text-[11px] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <hr className="border-[#f3f4f6]" />

                {/* Tanggal */}
                <div>
                  <label className="text-[#4b5563] text-[12px] block mb-1">Tanggal kunjungan</label>
                  <input
                    type="date"
                    defaultValue="2025-05-22"
                    className="w-full border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] text-[#111827] focus:outline-none focus:border-[#0f6e56]"
                  />
                </div>

                {/* Peserta & Total */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#4b5563] text-[12px] block mb-1">Peserta</label>
                    <select
                      value={peserta}
                      onChange={(e) => setPeserta(Number(e.target.value))}
                      className="w-full border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] text-[#111827] focus:outline-none focus:border-[#0f6e56]"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n} orang</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[#4b5563] text-[12px] block mb-1">Total</label>
                    <div className="border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] text-[#111827] bg-[#f9fafb]">
                      Rp{total}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button className="w-full bg-[#0f6e56] text-white text-[13px] py-2.5 rounded-lg hover:bg-[#085041] transition">
                  Booking Paket Ini
                </button>
                <p className="text-[#9ca3af] text-[11px] text-center">
                  Konfirmasi email otomatis setelah booking
                </p>
              </div>
            </div>

            {/* Paket lainnya */}
            <div className="border border-[#d1d5db] rounded-xl p-4">
              <p className="text-[#111827] text-[14px] font-medium mb-3">Paket lainnya</p>
              <div className="flex flex-col divide-y divide-[#f3f4f6]">
                {[
                  { name: "Forest Yoga", desc: "5 jam · maks. 12 orang", price: "Rp250k" },
                  { name: "Overnight Camp", desc: "24 jam · maks. 10 orang", price: "Rp480k" },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-[#111827] text-[13px]">{pkg.name}</p>
                      <p className="text-[#9ca3af] text-[11px]">{pkg.desc}</p>
                    </div>
                    <span className="text-[#0f6e56] text-[13px] font-medium">{pkg.price}</span>
                  </div>
                ))}
              </div>
              <button className="w-full border border-[#d1d5db] text-[#4b5563] text-[13px] py-2 rounded-lg mt-2 hover:border-[#0f6e56] hover:text-[#0f6e56] transition">
                Lihat semua 18 paket
              </button>
            </div>

            {/* Ada Pertanyaan */}
            <div className="border border-[#d1d5db] rounded-xl p-4">
              <p className="text-[#111827] text-[14px] font-medium mb-2">Ada pertanyaan?</p>
              <p className="text-[#4b5563] text-[13px] leading-[20px] mb-3">
                Tim pengelola kami siap menjawab pertanyaan sebelum Anda booking.
              </p>
              <button className="w-full bg-[#0f6e56] text-white text-[13px] py-2.5 rounded-lg hover:bg-[#085041] transition mb-2">
                Chat dengan pengelola
              </button>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#5dcaa5] rounded-full"></div>
                <span className="text-[#9ca3af] text-[11px]">
                  Online sekarang · biasanya balas dalam 5 mnt
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
      
  )
}