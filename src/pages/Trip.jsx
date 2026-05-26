import { useState } from 'react'
import Navbar from '../components/Navbar'

const packages = [
  {
    id: 1,
    emoji: "🌲",
    duration: "3 jam",
    name: "Forest Bathing Dasar",
    badges: [
      { label: "Terpopuler", color: "bg-[#0f6e56] text-white" },
      { label: "Sisa 3 slot", color: "bg-orange-100 text-orange-600" },
    ],
    price: "Rp185.000",
    slotPct: 80,
    slotLabel: "80% penuh",
    desc: "Berjalan perlahan di antara hutan pinus sambil menyerap fitonsida alami. Dipandu naturalis bersertifikat. Cocok untuk pemula dan semua usia.",
    meta: ["Maks. 15 orang", "Setiap hari", "4.9 (82 ulasan)"],
    includes: ["Teh herbal", "Pemandu", "Asuransi", "Sertifikat"],
    avail: "Tersedia 22–29 Mei",
    availColor: "text-[#0f6e56]",
  },
  {
    id: 2,
    emoji: "🧘",
    duration: "5 jam",
    name: "Forest Yoga & Meditasi",
    badges: [
      { label: "Baru", color: "bg-blue-100 text-blue-600" },
    ],
    price: "Rp250.000",
    slotPct: 40,
    slotLabel: null,
    desc: "Sesi yoga pagi di bawah kanopi pinus diikuti meditasi mindfulness 45 menit. Termasuk sarapan ringan dan jus herbal.",
    meta: ["Maks. 12 orang", "06.30–11.30", "4.8 (41 ulasan)"],
    includes: ["Matras yoga", "Sarapan", "Instruktur"],
    avail: "Tersedia Senin–Sabtu",
    availColor: "text-[#0f6e56]",
  },
  {
    id: 3,
    emoji: "🏕️",
    duration: "24 jam",
    name: "Overnight Forest Camp",
    badges: [
      { label: "Untuk grup", color: "bg-purple-100 text-purple-600" },
    ],
    price: "Rp480.000",
    slotPct: 20,
    slotLabel: null,
    desc: "Pengalaman berkemah satu malam di hutan pinus. Termasuk forest bathing sore, api unggun, sarapan pagi, dan sunrise hike.",
    meta: ["Maks. 10 orang", "Jum–Sabtu", "4.9 (28 ulasan)"],
    includes: ["Tenda", "2x makan", "Pemandu", "P3K"],
    avail: "Sisa 2 slot bulan ini",
    availColor: "text-orange-500",
  },
]

const filterChips = ["Semua", "Setengah hari", "Seharian", "Overnight", "Untuk grup"]
const durasiChips = ["1–3 jam", "4–6 jam", "Seharian", "Overnight"]
const kapasitasChips = ["1–5", "6–15", "16–30", "30+"]

const kategoriList = [
  { label: "Forest bathing", count: 6 },
  { label: "Yoga & meditasi", count: 4 },
  { label: "Hiking ringan", count: 3 },
  { label: "Overnight camp", count: 3 },
  { label: "Paket keluarga", count: 2 },
]

const fasilitasList = ["Pemandu naturalis", "Teh herbal", "Makan siang", "Penginapan"]

export default function Trip() {
  const [activeFilter, setActiveFilter] = useState("Semua")
  const [activeDurasi, setActiveDurasi] = useState(["1–3 jam"])
  const [activeKap, setActiveKap] = useState(["1–5", "6–15"])
  const [checkedKat, setCheckedKat] = useState(["Forest bathing", "Yoga & meditasi"])
  const [checkedFas, setCheckedFas] = useState(["Pemandu naturalis", "Teh herbal"])
  const [activePage, setActivePage] = useState(1)

  const toggleArr = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[50px]">

{/* ===== HERO ===== */}
<div className="px-7 pt-6 pb-0 border-b border-[#e5e7eb]">

  {/* Baris atas: judul + stats */}
  <div className="flex items-start justify-between mb-5">

    {/* Kiri: badge + judul + subtitle */}
    <div className="flex flex-col gap-1.5">
      <div className="border border-[#d1d5db] rounded-full px-3 py-1 w-fit">
        <span className="text-[#4b5563] text-[11px]">Modul Trip</span>
      </div>
      <h1 className="text-[#111827] text-[22px] font-semibold mt-1">
        Pilih paket wisata Anda
      </h1>
      <p className="text-[#9ca3af] text-[13px]">
        Forest Healing Padusan · Lereng Gunung Welirang
      </p>
    </div>

    {/* Kanan: 3 stat boxes */}
    <div className="flex gap-3">
      {[
        { value: "18", label: "Paket aktif" },
        { value: "3", label: "Slot tersisa hari ini" },
        { value: "Rp185k", label: "Mulai dari" },
      ].map((s) => (
        <div
          key={s.label}
          className="border border-[#d1d5db] rounded-xl px-6 py-3 text-center min-w-[100px]"
        >
          <p className="text-[#111827] text-[20px] font-semibold">{s.value}</p>
          <p className="text-[#9ca3af] text-[11px] mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>

  </div>

  {/* Filter Bar */}
  <div className="flex items-center justify-between bg-[#f9fafb] rounded-xl px-3 py-2 mb-4">
    <div className="flex gap-1">
      {filterChips.map((chip) => (
        <button
          key={chip}
          onClick={() => setActiveFilter(chip)}
          className={`text-[13px] px-4 py-1.5 rounded-lg transition ${
            activeFilter === chip
              ? "bg-[#0f6e56] text-white"
              : "text-[#4b5563] hover:bg-white hover:shadow-sm"
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[#4b5563] text-[13px]">Urutkan:</span>
      <select className="border border-[#d1d5db] rounded-lg px-3 py-1.5 text-[13px] text-[#111827] focus:outline-none focus:border-[#0f6e56] bg-white">
        <option>Terpopuler</option>
        <option>Harga terendah</option>
        <option>Rating tertinggi</option>
      </select>
    </div>
  </div>

</div>
        {/* ===== BODY ===== */}
        <div className="flex gap-0">

          {/* ===== SIDEBAR FILTER ===== */}
          <div className="w-[220px] shrink-0 border-r border-[#f3f4f6] px-5 py-5 flex flex-col gap-5">

            {/* Durasi */}
            <div>
              <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Durasi</p>
              <div className="flex flex-wrap gap-2">
                {durasiChips.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleArr(activeDurasi, setActiveDurasi, c)}
                    className={`text-[12px] px-3 py-1 rounded-lg border transition ${
                      activeDurasi.includes(c)
                        ? "bg-[#0f6e56] text-white border-[#0f6e56]"
                        : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Rentang Harga */}
            <div>
              <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Rentang Harga</p>
              <input type="range" min="100" max="600" defaultValue="350" className="w-full accent-[#0f6e56]" />
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-[#9ca3af]">Rp100k</span>
                <span className="text-[11px] text-[#4b5563]">Rp185k – Rp500k</span>
                <span className="text-[11px] text-[#9ca3af]">Rp600k</span>
              </div>
            </div>

            {/* Kategori Aktivitas */}
            <div>
              <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Kategori Aktivitas</p>
              <div className="flex flex-col gap-2">
                {kategoriList.map((k) => (
                  <label key={k.label} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checkedKat.includes(k.label)}
                        onChange={() => toggleArr(checkedKat, setCheckedKat, k.label)}
                        className="accent-[#0f6e56] w-3.5 h-3.5"
                      />
                      <span className="text-[13px] text-[#111827]">{k.label}</span>
                    </div>
                    <span className="text-[11px] text-[#9ca3af]">{k.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Kapasitas Grup */}
            <div>
              <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Kapasitas Grup</p>
              <div className="flex flex-wrap gap-2">
                {kapasitasChips.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleArr(activeKap, setActiveKap, c)}
                    className={`text-[12px] px-3 py-1 rounded-lg border transition ${
                      activeKap.includes(c)
                        ? "bg-[#0f6e56] text-white border-[#0f6e56]"
                        : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Fasilitas */}
            <div>
              <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Fasilitas Termasuk</p>
              <div className="flex flex-col gap-2">
                {fasilitasList.map((f) => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedFas.includes(f)}
                      onChange={() => toggleArr(checkedFas, setCheckedFas, f)}
                      className="accent-[#0f6e56] w-3.5 h-3.5"
                    />
                    <span className="text-[13px] text-[#111827]">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button className="text-[#4b5563] text-[13px] border border-[#d1d5db] rounded-lg py-1.5 hover:border-[#0f6e56] hover:text-[#0f6e56] transition">
              Reset filter
            </button>

          </div>

          {/* ===== PACKAGE LIST ===== */}
          <div className="flex-1 flex flex-col gap-0 p-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="border border-[#d1d5db] rounded-xl overflow-hidden flex mb-4 hover:shadow-md transition"
              >
                {/* Foto kiri */}
                <div className="w-[180px] shrink-0 bg-[#085041] flex flex-col items-center justify-between py-4">
                  <span className="text-4xl">{pkg.emoji}</span>
                  <span className="bg-black/30 text-white text-[12px] px-3 py-1 rounded-full">
                    {pkg.duration}
                  </span>
                </div>

                {/* Konten kanan */}
                <div className="flex-1 p-4 flex flex-col gap-2">

                  {/* Top: nama + harga */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[#111827] text-[15px] font-medium">{pkg.name}</p>
                      <div className="flex gap-2 mt-1">
                        {pkg.badges.map((b) => (
                          <span
                            key={b.label}
                            className={`text-[11px] px-2 py-0.5 rounded-full ${b.color}`}
                          >
                            {b.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#0f6e56] text-[16px] font-medium">{pkg.price}</p>
                      <p className="text-[#9ca3af] text-[11px]">/orang</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {pkg.slotLabel && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#e5e7eb] rounded-full h-1.5">
                        <div
                          className="bg-[#0f6e56] h-1.5 rounded-full"
                          style={{ width: `${pkg.slotPct}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-orange-500">{pkg.slotLabel}</span>
                    </div>
                  )}

                  {/* Deskripsi */}
                  <p className="text-[#4b5563] text-[13px] leading-[20px]">{pkg.desc}</p>

                  {/* Meta */}
                  <div className="flex gap-4">
                    {pkg.meta.map((m) => (
                      <span
                        key={m}
                        className="text-[#4b5563] text-[12px] bg-[#f9fafb] border border-[#f3f4f6] px-2 py-0.5 rounded"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tags includes */}
                  <div className="flex gap-2 flex-wrap">
                    {pkg.includes.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#0f6e56] bg-[#e1f5ee] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#5dcaa5] rounded-full"></div>
                      <span className={`text-[12px] ${pkg.availColor}`}>{pkg.avail}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="border border-[#d1d5db] text-[#4b5563] text-[12px] px-4 py-1.5 rounded-lg hover:border-[#0f6e56] hover:text-[#0f6e56] transition">
                        Simpan
                      </button>
                      <button className="bg-[#0f6e56] text-white text-[12px] px-4 py-1.5 rounded-lg hover:bg-[#085041] transition">
                        Booking
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <button className="w-8 h-8 border border-[#d1d5db] rounded-lg flex items-center justify-center text-[#4b5563] hover:border-[#0f6e56] transition">
                ‹
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePage(p)}
                  className={`w-8 h-8 rounded-lg text-[13px] transition ${
                    activePage === p
                      ? "bg-[#0f6e56] text-white"
                      : "border border-[#d1d5db] text-[#4b5563] hover:border-[#0f6e56]"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="text-[#9ca3af] text-[13px]">...</span>
              <button className="w-8 h-8 border border-[#d1d5db] rounded-lg text-[13px] text-[#4b5563] hover:border-[#0f6e56] transition">
                6
              </button>
              <button className="w-8 h-8 border border-[#d1d5db] rounded-lg flex items-center justify-center text-[#4b5563] hover:border-[#0f6e56] transition">
                ›
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}