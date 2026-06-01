import { useState, useRef, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import articleForest from '../assets/article-img-forest Healing.png'
import articleMental from '../assets/div.article-img-kesehatanMental.png'
import articleFito from '../assets/div.article-img-pitonsida.png'

const filters = ["Semua", "Kesehatan Mental", "Forest Healing", "Fitonsida", "Tips Wellness"]

const articles = [
  { id: 1, category: "Forest Healing", title: "Bagaimana 20 menit di hutan menurunkan kortisol hingga 15%", duration: "5 mnt", date: "12 Mei 2025", image: articleForest },
  { id: 2, category: "Fitonsida", title: "Fitonsida: senyawa tersembunyi di udara hutan pinus", duration: "7 mnt", date: "8 Mei 2025", image: articleFito },
  { id: 3, category: "Kesehatan Mental", title: "Meditasi di alam terbuka vs ruangan: apa bedanya bagi otak?", duration: "6 mnt", date: "3 Mei 2025", image: articleMental },
  { id: 4, category: "Tips Wellness", title: "5 teknik pernapasan yang bisa dilakukan di tengah hutan", duration: "4 mnt", date: "1 Mei 2025", image: articleForest },
  { id: 5, category: "Forest Healing", title: "Manfaat berjalan tanpa alas kaki di atas tanah alami", duration: "6 mnt", date: "28 Apr 2025", image: articleFito },
  { id: 6, category: "Kesehatan Mental", title: "Kenapa suara alam bisa menurunkan stres lebih cepat", duration: "5 mnt", date: "25 Apr 2025", image: articleMental },
]

const videos = [
  { id: 1, category: "Forest Healing", title: "Bagaimana 20 menit di hutan menurunkan kortisol hingga 15%", duration: "5 mnt", date: "12 Mei 2025", image: articleForest },
  { id: 2, category: "Fitonsida", title: "Fitonsida: senyawa tersembunyi di udara hutan pinus", duration: "7 mnt", date: "8 Mei 2025", image: articleFito },
  { id: 3, category: "Kesehatan Mental", title: "Meditasi di alam terbuka vs ruangan: apa bedanya bagi otak?", duration: "6 mnt", date: "3 Mei 2025", image: articleMental },
  { id: 4, category: "Tips Wellness", title: "Panduan forest bathing untuk pemula: langkah demi langkah", duration: "8 mnt", date: "29 Apr 2025", image: articleForest },
  { id: 5, category: "Forest Healing", title: "Healing di alam: pengalaman nyata dari peserta GO-Heal", duration: "10 mnt", date: "26 Apr 2025", image: articleFito },
  { id: 6, category: "Kesehatan Mental", title: "Meditasi pagi di bawah pohon pinus: ikuti panduan ini", duration: "7 mnt", date: "22 Apr 2025", image: articleMental },
]

function FilterTabs({ active, setActive }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`text-[12px] px-4 py-1.5 rounded-full border transition ${
            active === f
              ? "bg-[#0f6e56] text-white border-[#0f6e56]"
              : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56] hover:text-[#0f6e56]"
          }`}
        >{f}</button>
      ))}
    </div>
  )
}

function ScrollableRow({ children }) {
  const scrollRef = useRef(null)
  const trackRef = useRef(null)
  const [thumbLeft, setThumbLeft] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(30)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  const updateThumb = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    const thumb = (el.clientWidth / el.scrollWidth) * 100
    setThumbWidth(thumb)
    setThumbLeft(ratio * (100 - thumb))
  }, [])

  // Drag thumb
  const handleThumbMouseDown = (e) => {
    e.preventDefault()
    isDragging.current = true
    startX.current = e.clientX
    startScroll.current = scrollRef.current?.scrollLeft || 0

    const onMouseMove = (e) => {
      if (!isDragging.current) return
      const el = scrollRef.current
      const track = trackRef.current
      if (!el || !track) return
      const dx = e.clientX - startX.current
      const trackWidth = track.clientWidth
      const scrollRatio = dx / trackWidth
      el.scrollLeft = startScroll.current + scrollRatio * el.scrollWidth
      updateThumb()
    }

    const onMouseUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  // Klik track (bukan thumb)
  const handleTrackClick = (e) => {
    if (isDragging.current) return
    const el = scrollRef.current
    const track = trackRef.current
    if (!el || !track) return
    const rect = track.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth)
    updateThumb()
  }

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={updateThumb}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
      >
        {children}
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="scroll-track mt-3 relative"
        onClick={handleTrackClick}
      >
        {/* Thumb */}
        <div
          className="scroll-thumb absolute top-0 cursor-grab active:cursor-grabbing"
          style={{ width: `${thumbWidth}%`, left: `${thumbLeft}%` }}
          onMouseDown={handleThumbMouseDown}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

export default function Edukasi() {
  const [activeArtikel, setActiveArtikel] = useState("Semua")
  const [activeVideo, setActiveVideo] = useState("Semua")

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[50px]">
        <Hero />

        {/* ===== SECTION ARTIKEL ===== */}
        <section className="px-8 py-10 flex flex-col gap-4">
          <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">Edukasi</p>
          <h2 className="text-[#111827] text-[22px] font-normal -mt-2">Artikel terbaru</h2>
          <FilterTabs active={activeArtikel} setActive={setActiveArtikel} />
          <ScrollableRow>
            {articles.map((article) => (
              <div key={article.id} className="flex-shrink-0 w-[300px] bg-white border border-[#d1d5db] rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer">
                <div className="h-[160px] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <p className="text-[#0f6e56] text-[10px] uppercase tracking-wider font-medium">{article.category}</p>
                  <p className="text-[#111827] text-[14px] leading-[20px]">{article.title}</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[#9ca3af] text-[12px]">{article.duration}</span>
                    <span className="text-[#9ca3af] text-[12px]">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableRow>
        </section>

        {/* ===== SECTION VIDEO ===== */}
        <section className="px-8 py-10 flex flex-col gap-4 border-t border-[#f3f4f6]">
          <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">Edukasi</p>
          <h2 className="text-[#111827] text-[22px] font-normal -mt-2">Video Edukasi</h2>
          <FilterTabs active={activeVideo} setActive={setActiveVideo} />
          <ScrollableRow>
            {videos.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-[300px] bg-white border border-[#d1d5db] rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer">
                <div className="h-[200px] overflow-hidden relative">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <p className="text-[#0f6e56] text-[10px] uppercase tracking-wider font-medium">{video.category}</p>
                  <p className="text-[#111827] text-[14px] leading-[20px]">{video.title}</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[#9ca3af] text-[12px]">{video.duration}</span>
                    <span className="text-[#9ca3af] text-[12px]">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableRow>
        </section>

        <Footer />
      </div>
    </div>
  )
}