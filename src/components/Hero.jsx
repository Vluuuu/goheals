import { useEffect, useState } from 'react'
import heroBg from '../assets/hero.png'

export default function Hero() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Setiap 100ms, naikkan step — masing-masing elemen punya threshold step-nya
    const timers = [
      setTimeout(() => setStep(1), 80),   // badge
      setTimeout(() => setStep(2), 200),  // judul
      setTimeout(() => setStep(3), 340),  // deskripsi
      setTimeout(() => setStep(4), 460),  // tombol
      setTimeout(() => setStep(5), 580),  // stats
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const anim = (minStep) => ({
    style: {
      opacity:   step >= minStep ? 1 : 0,
      transform: step >= minStep ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 650ms ease-out, transform 650ms ease-out',
    }
  })

  return (
    <section
      className="relative min-h-[393px] sm:h-[393px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(147deg, #085041 0%, #0f6e56 40%, #1d9e75 100%)',
      }}
    >
      {/* Foto hutan kanan */}
      <div className="absolute right-0 top-0 w-[55%] h-full hidden sm:block">
        <img src={heroBg} alt="hutan" className="w-full h-full object-cover opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #085041 0%, transparent 40%)' }}
        />
      </div>

      {/* Konten kiri */}
      <div className="relative z-10 flex flex-col gap-3 w-full sm:max-w-[520px] px-6 sm:px-8 py-10 sm:py-0">

        {/* Badge */}
        <div
          {...anim(1)}
          className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full w-fit"
        >
          <span className="text-[#9fe1cb] text-[11px]">
            Forest Healing Padusan · Lereng Gunung Welirang
          </span>
        </div>

        {/* Judul */}
        <div {...anim(2)} className="mt-1">
          <h1 className="text-white text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] font-normal">
            Pulihkan diri di
          </h1>
          <h1 className="text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] font-normal">
            <span className="text-white">alam yang </span>
            <span className="text-[#5dcaa5]">menyembuhkan</span>
          </h1>
        </div>

        {/* Deskripsi */}
        <p
          {...anim(3)}
          className="text-white/75 text-[13px] sm:text-[14px] leading-[22px] max-w-full sm:max-w-[380px]"
        >
          Platform wellness tourism digital untuk menemukan,
          memesan, dan menikmati pengalaman forest healing terbaik
          di Jawa Timur.
        </p>

        {/* Tombol */}
        <div {...anim(4)} className="flex flex-col sm:flex-row gap-3 mt-1">
          <button className="bg-white text-[#0f6e56] text-[13px] px-5 py-2.5 rounded-lg hover:bg-gray-100 transition text-center">
            Booking Sekarang
          </button>
          <button className="border border-white/40 text-white text-[13px] px-5 py-2.5 rounded-lg hover:bg-white/10 transition text-center">
            Virtual Tour 360°
          </button>
        </div>

        {/* Statistik */}
        <div {...anim(5)} className="flex gap-4 sm:gap-6 mt-2">
          <div>
            <p className="text-white text-xl font-normal">1,240+</p>
            <p className="text-white/60 text-[11px]">Pengunjung</p>
          </div>
          <div>
            <p className="text-white text-xl font-normal">18</p>
            <p className="text-white/60 text-[11px]">Paket Wisata</p>
          </div>
          <div>
            <p className="text-white text-xl font-normal">4.8★</p>
            <p className="text-white/60 text-[11px]">Rating</p>
          </div>
        </div>

      </div>
    </section>
  )
}