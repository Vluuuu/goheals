import { useEffect, useRef, useState } from 'react'

// Untuk elemen tunggal
export function useScrollAnimation(threshold = 0.15, rootMargin = '-50px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Jika elemen sudah ada di viewport saat mount (misal: di atas fold),
    // langsung set visible tanpa observer
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}

// Untuk list elemen dengan stagger — satu observer, semua item
export function useScrollAnimationGroup(count, threshold = 0.1, rootMargin = '-30px') {
  const ref = useRef(null)
  const [visibleIndex, setVisibleIndex] = useState(-1)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisibleIndex(count - 1)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jalankan stagger: reveal item satu per satu
          let i = 0
          const interval = setInterval(() => {
            setVisibleIndex(i)
            i++
            if (i >= count) clearInterval(interval)
          }, 80)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [count, threshold, rootMargin])

  // isVisible(i) = true jika item ke-i sudah waktunya tampil
  const isVisible = (i) => i <= visibleIndex

  return { ref, isVisible }
}