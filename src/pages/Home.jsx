import { useState, useRef, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'
import { articles, filters } from '../data/articles'



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

export default function Home() {
  const sectionHeader = useScrollAnimation(0.1)
  const filtersAnim   = useScrollAnimation(0.1)
  const articleCards  = useScrollAnimationGroup(articles.length, 0.05)

  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-[50px]">
        <Hero />
        <Destination />

        {/* Section Artikel */}
        <section className="bg-[#f9fafb] px-6 sm:px-8 py-8 sm:py-12 flex flex-col gap-4">

          {/* Header */}
          <div
            ref={sectionHeader.ref}
            style={{
              opacity:   sectionHeader.visible ? 1 : 0,
              transform: sectionHeader.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            }}
          >
            <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">Edukasi</p>
            <h2 className="text-[#111827] text-[18px] sm:text-[22px] font-normal mt-2">Artikel terbaru</h2>
          </div>

          {/* Filter chips */}
          <div
            ref={filtersAnim.ref}
            className="flex gap-2 flex-wrap"
            style={{
              opacity:   filtersAnim.visible ? 1 : 0,
              transform: filtersAnim.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 700ms ease-out 100ms, transform 700ms ease-out 100ms',
            }}
          >
            {filters.map((f, i) => (
              <button
                key={f}
                className={`text-[12px] px-3 py-1.5 rounded-full border transition ${
                  i === 0
                    ? "bg-[#0f6e56] text-white border-[#0f6e56]"
                    : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56] hover:text-[#0f6e56]"
                }`}
              >{f}</button>
            ))}
          </div>

          {/* Artikel cards dengan scrollbar */}
          <div ref={articleCards.ref}>
            <ScrollableRow>
              {articles.map((article, i) => (
                <div
                  key={article.id}
                  className="flex-shrink-0 w-[220px] sm:w-[260px]"
                  style={{
                    opacity:   articleCards.isVisible(i) ? 1 : 0,
                    transform: articleCards.isVisible(i) ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                  }}
                >
                  <ArticleCard {...article} onClick={() => article.pdf && navigate(`/pdf?file=${article.pdf}`)}  />
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