import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import tripForest from '../assets/trip-forestBathingDasar-div.pkg-img.png'
import tripYoga from '../assets/trip-forest healing yoga-meditasi-div.pkg-img.png'
import tripCamp from '../assets/trip-forestCamp-div.pkg-img.png'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'
import { useNavigate } from 'react-router-dom'

const packages = [
  {
    id: 1, img: tripForest, duration: "3 jam", name: "Forest Bathing Dasar",
    badges: [
      { label: "Terpopuler", color: "bg-[#0f6e56] text-white" },
      { label: "Sisa 3 slot", color: "bg-orange-100 text-orange-600" },
    ],
    price: "Rp185.000", slotPct: 80, slotLabel: "80% penuh",
    desc: "Berjalan perlahan di antara hutan pinus sambil menyerap fitonsida alami. Dipandu naturalis bersertifikat. Cocok untuk pemula dan semua usia.",
    meta: ["Maks. 15 orang", "Setiap hari", "4.9 (82 ulasan)"],
    includes: ["Teh herbal", "Pemandu", "Asuransi", "Sertifikat"],
    avail: "Tersedia 22–29 Mei", availColor: "text-[#0f6e56]",
  },
  {
    id: 2, img: tripYoga, duration: "5 jam", name: "Forest Yoga & Meditasi",
    badges: [{ label: "Baru", color: "bg-blue-100 text-blue-600" }],
    price: "Rp250.000", slotPct: 40, slotLabel: null,
    desc: "Sesi yoga pagi di bawah kanopi pinus diikuti meditasi mindfulness 45 menit. Termasuk sarapan ringan dan jus herbal.",
    meta: ["Maks. 12 orang", "06.30–11.30", "4.8 (41 ulasan)"],
    includes: ["Matras yoga", "Sarapan", "Instruktur"],
    avail: "Tersedia Senin–Sabtu", availColor: "text-[#0f6e56]",
  },
  {
    id: 3, img: tripCamp, duration: "24 jam", name: "Overnight Forest Camp",
    badges: [{ label: "Untuk grup", color: "bg-purple-100 text-purple-600" }],
    price: "Rp480.000", slotPct: 20, slotLabel: null,
    desc: "Pengalaman berkemah satu malam di hutan pinus. Termasuk forest bathing sore, api unggun, sarapan pagi, dan sunrise hike.",
    meta: ["Maks. 10 orang", "Jum–Sabtu", "4.9 (28 ulasan)"],
    includes: ["Tenda", "2x makan", "Pemandu", "P3K"],
    avail: "Sisa 2 slot bulan ini", availColor: "text-orange-500",
  },
]

const filterChips    = ["Semua", "Setengah hari", "Seharian", "Overnight", "Untuk grup"]
const durasiChips    = ["1–3 jam", "4–6 jam", "Seharian", "Overnight"]
const kapasitasChips = ["1–5", "6–15", "16–30", "30+"]

const kategoriList = [
  { label: "Forest bathing",  count: 6 },
  { label: "Yoga & meditasi", count: 4 },
  { label: "Hiking ringan",   count: 3 },
  { label: "Overnight camp",  count: 3 },
  { label: "Paket keluarga",  count: 2 },
]

const fasilitasList = ["Pemandu naturalis", "Teh herbal", "Makan siang", "Penginapan"]

function FilterPanel({
  activeDurasi, setActiveDurasi,
  minHarga, setMinHarga,
  maxHarga, setMaxHarga,
  checkedKat, setCheckedKat,
  activeKap, setActiveKap,
  checkedFas, setCheckedFas,
  toggleArr,
}) {
  return (
    <div className="flex flex-col gap-5">

      {/* Durasi */}
      <div>
        <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Durasi</p>
        <div className="flex flex-wrap gap-2">
          {durasiChips.map((c) => (
            <button key={c} onClick={() => toggleArr(activeDurasi, setActiveDurasi, c)}
              className={`text-[12px] px-3 py-1 rounded-lg border transition ${
                activeDurasi.includes(c)
                  ? "bg-[#0f6e56] text-white border-[#0f6e56]"
                  : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56]"
              }`}
            >{c}</button>
          ))}
        </div>
      </div>

      {/* Rentang Harga */}
      <div>
        <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Rentang Harga</p>
        <div className="flex justify-between mb-3">
          <span className="text-[12px] text-[#0f6e56] font-medium">Rp{minHarga}k</span>
          <span className="text-[12px] text-[#0f6e56] font-medium">Rp{maxHarga}k</span>
        </div>
        <div className="relative flex items-center" style={{ height: '20px' }}>
          <div className="absolute w-full h-1.5 bg-[#e5e7eb] rounded-full" />
          <div className="absolute h-1.5 bg-[#0f6e56] rounded-full pointer-events-none"
            style={{
              left:  `${((minHarga - 100) / 500) * 100}%`,
              right: `${100 - ((maxHarga - 100) / 500) * 100}%`,
            }}
          />
          <input type="range" min={100} max={600} value={minHarga}
            onChange={(e) => { const v = Number(e.target.value); if (v < maxHarga - 50) setMinHarga(v) }}
            className="thumb-min"
          />
          <input type="range" min={100} max={600} value={maxHarga}
            onChange={(e) => { const v = Number(e.target.value); if (v > minHarga + 50) setMaxHarga(v) }}
            className="thumb-max"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[11px] text-[#9ca3af]">Rp100k</span>
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
                <input type="checkbox" checked={checkedKat.includes(k.label)}
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
            <button key={c} onClick={() => toggleArr(activeKap, setActiveKap, c)}
              className={`text-[12px] px-3 py-1 rounded-lg border transition ${
                activeKap.includes(c)
                  ? "bg-[#0f6e56] text-white border-[#0f6e56]"
                  : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56]"
              }`}
            >{c}</button>
          ))}
        </div>
      </div>

      {/* Fasilitas */}
      <div>
        <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Fasilitas Termasuk</p>
        <div className="flex flex-col gap-2">
          {fasilitasList.map((f) => (
            <label key={f} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={checkedFas.includes(f)}
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
  )
}

export default function Trip() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState("Semua")
  const [activeDurasi, setActiveDurasi] = useState(["1–3 jam"])
  const [activeKap, setActiveKap]       = useState(["1–5", "6–15"])
  const [checkedKat, setCheckedKat]     = useState(["Forest bathing", "Yoga & meditasi"])
  const [checkedFas, setCheckedFas]     = useState(["Pemandu naturalis", "Teh herbal"])
  const [activePage, setActivePage]     = useState(1)
  const [minHarga, setMinHarga]         = useState(185)
  const [maxHarga, setMaxHarga]         = useState(500)
  const [selected, setSelected]         = useState(null)
  const [filterOpen, setFilterOpen]     = useState(false)

  // ── Mount animation (hero) ──────────────────────────────
  const [heroStep, setHeroStep] = useState(0)
  useEffect(() => {
    const timers = [
      setTimeout(() => setHeroStep(1), 80),   // badge
      setTimeout(() => setHeroStep(2), 200),  // judul + subtitle
      setTimeout(() => setHeroStep(3), 150),  // stat 1
      setTimeout(() => setHeroStep(4), 280),  // stat 2
      setTimeout(() => setHeroStep(5), 410),  // stat 3
      setTimeout(() => setHeroStep(6), 500),  // filter bar
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  // ── Scroll animations ───────────────────────────────────
  const sidebar     = useScrollAnimation(0.05)
  const pkgGroup    = useScrollAnimationGroup(packages.length, 0.08)

  const toggleArr = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])

  // helper styles
  const fadeUp = (visible, delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
  })

  const fadeLeft = (visible, delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateX(0)' : 'translateX(-28px)',
    transition: `opacity 650ms ease-out ${delay}ms, transform 650ms ease-out ${delay}ms`,
  })

  

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[50px]">

        {/* ===== HERO ===== */}
        <div className="bg-[#085041] px-5 sm:px-7 pt-5 sm:pt-6 pb-0">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-5">

            {/* Kiri: judul */}
            <div className="flex flex-col gap-1.5">
              <div
                style={fadeUp(heroStep >= 1)}
                className="border border-white/20 rounded-full px-3 py-1 w-fit"
              >
                <span className="text-white/80 text-[12px]">Modul Trip</span>
              </div>
              <div style={fadeUp(heroStep >= 2, 60)}>
                <h1 className="text-white text-[20px] sm:text-[22px] font-semibold mt-1">
                  Pilih paket wisata Anda
                </h1>
                <p className="text-white/60 text-[13px]">
                  Forest Healing Padusan · Lereng Gunung Welirang
                </p>
              </div>
            </div>

            {/* Kanan: stat boxes — stagger */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
              {[
                { value: "18",     label: "Paket aktif" },
                { value: "3",      label: "Slot tersisa hari ini" },
                { value: "Rp185k", label: "Mulai dari" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex-shrink-0 border border-white/20 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-center min-w-[90px] sm:min-w-[100px]"
                  style={fadeUp(heroStep >= i + 3, 0)}
                >
                  <p className="text-white text-[18px] sm:text-[20px] font-semibold">{s.value}</p>
                  <p className="text-white/60 text-[11px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter bar */}
          <div
            style={fadeUp(heroStep >= 6)}
            className="bg-[#0f6e56]/50 rounded-xl px-3 py-2 mb-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1 overflow-x-auto scrollbar-hide flex-1">
                {filterChips.map((chip) => (
                  <button key={chip} onClick={() => setActiveFilter(chip)}
                    className={`flex-shrink-0 text-[13px] px-3 sm:px-4 py-1.5 rounded-lg transition ${
                      activeFilter === chip
                        ? "bg-[#5dcaa5] text-[#085041] font-medium"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >{chip}</button>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                <span className="text-white/80 text-[13px]">Urutkan:</span>
                <select className="border border-white/20 rounded-lg px-3 py-1.5 text-[13px] text-white bg-[#085041] focus:outline-none">
                  <option>Terpopuler</option>
                  <option>Harga terendah</option>
                  <option>Rating tertinggi</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="flex gap-0">

          {/* ===== SIDEBAR — desktop only ===== */}
          <div
            ref={sidebar.ref}
            className="hidden sm:flex w-[220px] shrink-0 border-r border-[#f3f4f6] px-5 py-5 flex-col gap-5"
            style={fadeLeft(sidebar.visible)}
          >
            <FilterPanel
  activeDurasi={activeDurasi} setActiveDurasi={setActiveDurasi}
  minHarga={minHarga} setMinHarga={setMinHarga}
  maxHarga={maxHarga} setMaxHarga={setMaxHarga}
  checkedKat={checkedKat} setCheckedKat={setCheckedKat}
  activeKap={activeKap} setActiveKap={setActiveKap}
  checkedFas={checkedFas} setCheckedFas={setCheckedFas}
  toggleArr={toggleArr}
/>
          </div>

          {/* ===== PACKAGE LIST ===== */}
          <div className="flex-1 flex flex-col gap-0 px-4 sm:px-5 py-4 sm:py-5 min-w-0">

            {/* Toolbar mobile */}
            <div className="flex items-center gap-2 mb-4 sm:hidden">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-1.5 border border-[#d1d5db] text-[#4b5563] text-[13px] px-3 py-1.5 rounded-lg hover:border-[#0f6e56] hover:text-[#0f6e56] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M11 12h2" />
                </svg>
                Filter
              </button>
              <select className="flex-1 border border-[#d1d5db] rounded-lg px-3 py-1.5 text-[13px] text-[#4b5563] focus:outline-none focus:border-[#0f6e56]">
                <option>Terpopuler</option>
                <option>Harga terendah</option>
                <option>Rating tertinggi</option>
              </select>
            </div>

            {/* Panel filter mobile — collapsible */}
            <div className={`sm:hidden overflow-hidden transition-all duration-300 ${filterOpen ? 'max-h-[800px] mb-4' : 'max-h-0'}`}>
              <div className="border border-[#e5e7eb] rounded-xl p-4">
                <FilterPanel
  activeDurasi={activeDurasi} setActiveDurasi={setActiveDurasi}
  minHarga={minHarga} setMinHarga={setMinHarga}
  maxHarga={maxHarga} setMaxHarga={setMaxHarga}
  checkedKat={checkedKat} setCheckedKat={setCheckedKat}
  activeKap={activeKap} setActiveKap={setActiveKap}
  checkedFas={checkedFas} setCheckedFas={setCheckedFas}
  toggleArr={toggleArr}
/>
              </div>
            </div>

            {/* Package cards — stagger */}
            <div ref={pkgGroup.ref}>
              {packages.map((pkg, i) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelected(pkg.id)}
                  className={`rounded-xl overflow-hidden mb-4 hover:shadow-md transition cursor-pointer border ${
                    selected === pkg.id ? "border-[#5dcaa5] shadow-md" : "border-[#d1d5db]"
                  }`}
                  style={fadeUp(pkgGroup.isVisible(i), i * 80)}
                >
                  {/* Mobile: foto di atas. Desktop: foto di kiri */}
                  <div className="flex flex-col sm:flex-row">

                    {/* Foto */}
                    <div className="w-full sm:w-[180px] h-[160px] sm:h-auto shrink-0 overflow-hidden relative">
                      <img
                        src={pkg.img} alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/40 text-white text-[12px] px-3 py-1 rounded-full">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Konten */}
                    <div className="flex-1 p-4 flex flex-col gap-2">

                      {/* Nama + harga */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-[#111827] text-[15px] font-medium">{pkg.name}</p>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            {pkg.badges.map((b) => (
                              <span key={b.label} className={`text-[11px] px-2 py-0.5 rounded-full ${b.color}`}>
                                {b.label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[#0f6e56] text-[15px] sm:text-[16px] font-medium">{pkg.price}</p>
                          <p className="text-[#9ca3af] text-[11px]">/orang</p>
                        </div>
                      </div>

                      {/* Progress bar — animate width saat card visible */}
                      {pkg.slotLabel && (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-[#e5e7eb] rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-1.5 rounded-full bg-[#0f6e56]"
                              style={{
                                width:      pkgGroup.isVisible(i) ? `${pkg.slotPct}%` : '0%',
                                transition: `width 800ms ease-out ${i * 80 + 300}ms`,
                              }}
                            />
                          </div>
                          <span className="text-[11px] text-orange-500">{pkg.slotLabel}</span>
                        </div>
                      )}

                      {/* Deskripsi */}
                      <p className="text-[#4b5563] text-[13px] leading-[20px]">{pkg.desc}</p>

                      {/* Meta chips */}
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
                        {pkg.meta.map((m) => (
                          <span key={m} className="flex-shrink-0 text-[#4b5563] text-[12px] bg-[#f9fafb] border border-[#f3f4f6] px-2 py-0.5 rounded">
                            {m}
                          </span>
                        ))}
                      </div>

                      {/* Includes tags */}
                      <div className="flex gap-2 flex-wrap">
                        {pkg.includes.map((tag) => (
                          <span key={tag} className="text-[11px] text-[#0f6e56] bg-[#e1f5ee] px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer card */}
                      <div className="flex items-center justify-between mt-1 gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-[#5dcaa5] rounded-full flex-shrink-0"></div>
                          <span className={`text-[12px] ${pkg.availColor}`}>{pkg.avail}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="border border-[#d1d5db] text-[#4b5563] text-[12px] px-3 sm:px-4 py-1.5 rounded-lg hover:border-[#0f6e56] hover:text-[#0f6e56] transition">
                            Simpan
                          </button>
                            <button
                              onClick={() => navigate('/pembayaran', {
                                state: {
                                  paket: pkg.name,
                                  peserta: 1,
                                  total: pkg.price.replace('Rp', '').replace('.', ''),
                                  tanggal: "-",
                                }
                              })}
                              className="bg-[#0f6e56] text-white text-[12px] px-4 py-1.5 rounded-lg hover:bg-[#085041] transition"
                            >
                              Booking
                            </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <button className="w-8 h-8 border border-[#d1d5db] rounded-lg flex items-center justify-center text-[#4b5563] hover:border-[#0f6e56] transition">‹</button>
              {[1, 2, 3].map((p) => (
                <button key={p} onClick={() => setActivePage(p)}
                  className={`w-8 h-8 rounded-lg text-[13px] transition ${
                    activePage === p
                      ? "bg-[#0f6e56] text-white"
                      : "border border-[#d1d5db] text-[#4b5563] hover:border-[#0f6e56]"
                  }`}
                >{p}</button>
              ))}
              <span className="text-[#9ca3af] text-[13px]">...</span>
              <button className="w-8 h-8 border border-[#d1d5db] rounded-lg text-[13px] text-[#4b5563] hover:border-[#0f6e56] transition">6</button>
              <button className="w-8 h-8 border border-[#d1d5db] rounded-lg flex items-center justify-center text-[#4b5563] hover:border-[#0f6e56] transition">›</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}