import { useState, useRef, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { articles, filters, videos } from '../data/articles'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'
import { useNavigate } from 'react-router-dom'



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
      el.scrollLeft = startScroll.current + (dx / track.clientWidth) * el.scrollWidth
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
      <div ref={scrollRef} onScroll={updateThumb} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {children}
      </div>
      <div ref={trackRef} className="scroll-track mt-3 relative" onClick={handleTrackClick}>
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
  const navigate = useNavigate()
  const [activeArtikel, setActiveArtikel] = useState("Semua")
  const [activeVideo, setActiveVideo] = useState("Semua")

  // Animasi section artikel
  const artikelHeader  = useScrollAnimation(0.1)
  const artikelFilters = useScrollAnimation(0.1)
  const artikelCards   = useScrollAnimationGroup(articles.length, 0.05)

  // Animasi section video
  const videoHeader  = useScrollAnimation(0.1)
  const videoFilters = useScrollAnimation(0.1)
  const videoCards   = useScrollAnimationGroup(videos.length, 0.05)

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[50px]">
        <Hero />

        {/* ===== SECTION ARTIKEL ===== */}
        <section className="px-8 py-10 flex flex-col gap-4">

          {/* Header */}
          <div
            ref={artikelHeader.ref}
            style={{
              opacity:   artikelHeader.visible ? 1 : 0,
              transform: artikelHeader.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            }}
          >
            <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">Edukasi</p>
            <h2 className="text-[#111827] text-[22px] font-normal mt-2">Artikel terbaru</h2>
          </div>

          {/* Filter */}
          <div
            ref={artikelFilters.ref}
            style={{
              opacity:   artikelFilters.visible ? 1 : 0,
              transform: artikelFilters.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 700ms ease-out 100ms, transform 700ms ease-out 100ms',
            }}
          >
            <FilterTabs active={activeArtikel} setActive={setActiveArtikel} />
          </div>

          {/* Cards */}
          <div ref={artikelCards.ref}>
            <ScrollableRow>
              {articles.map((article, i) => (
                <div
                  key={article.id}
                  className ="flex-shrink-0 w-[300px] bg-white border border-[#d1d5db] rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer"
                  onClick={() => article.pdf && navigate(`/pdf?file=${article.pdf}`)}
                  style={{
                    opacity:   artikelCards.isVisible(i) ? 1 : 0,
                    transform: artikelCards.isVisible(i) ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                  }}
                >
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
          </div>

        </section>

        {/* ===== SECTION VIDEO ===== */}
        <section className="px-8 py-10 flex flex-col gap-4 border-t border-[#f3f4f6]">

          {/* Header */}
          <div
            ref={videoHeader.ref}
            style={{
              opacity:   videoHeader.visible ? 1 : 0,
              transform: videoHeader.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            }}
          >
            <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">Edukasi</p>
            <h2 className="text-[#111827] text-[22px] font-normal mt-2">Video Edukasi</h2>
          </div>

          {/* Filter */}
          <div
            ref={videoFilters.ref}
            style={{
              opacity:   videoFilters.visible ? 1 : 0,
              transform: videoFilters.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 700ms ease-out 100ms, transform 700ms ease-out 100ms',
            }}
          >
            <FilterTabs active={activeVideo} setActive={setActiveVideo} />
          </div>

          {/* Cards */}
          <div ref={videoCards.ref}>
            <ScrollableRow>
              {videos.map((video, i) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-[300px] bg-white border border-[#d1d5db] rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer"
                  style={{
                    opacity:   videoCards.isVisible(i) ? 1 : 0,
                    transform: videoCards.isVisible(i) ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                  }}
                >
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
          </div>

        </section>

        <Footer />
      </div>
    </div>
  )
}