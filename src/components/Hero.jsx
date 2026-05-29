import heroBg from '../assets/hero.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const badge   = useScrollAnimation(0.1)
  const title   = useScrollAnimation(0.1)
  const desc    = useScrollAnimation(0.1)
  const buttons = useScrollAnimation(0.1)
  const stats   = useScrollAnimation(0.1)

  return (
    <section
      className="relative min-h-[393px] sm:h-[393px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(147deg, #085041 0%, #0f6e56 40%, #1d9e75 100%)',
      }}
    >
      {/* Foto hutan kanan - sembunyikan di mobile */}
      <div className="absolute right-0 top-0 w-[55%] h-full hidden sm:block">
        <img
          src={heroBg}
          alt="hutan"
          className="w-full h-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #085041 0%, transparent 40%)',
          }}
        />
      </div>

      {/* Konten kiri */}
      <div className="relative z-10 flex flex-col gap-3 w-full sm:max-w-[520px] px-6 sm:px-8 py-10 sm:py-0">

        {/* Badge */}
        <div
          ref={badge.ref}
          className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full w-fit transition-all duration-700 ease-out"
          style={{
            opacity: badge.visible ? 1 : 0,
            transform: badge.visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '0ms',
          }}
        >
          <span className="text-[#9fe1cb] text-[11px]">
            Forest Healing Padusan · Lereng Gunung Welirang
          </span>
        </div>

        {/* Judul */}
        <div
          ref={title.ref}
          className="mt-1 transition-all duration-700 ease-out"
          style={{
            opacity: title.visible ? 1 : 0,
            transform: title.visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '100ms',
          }}
        >
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
          ref={desc.ref}
          className="text-white/75 text-[13px] sm:text-[14px] leading-[22px] max-w-full sm:max-w-[380px] transition-all duration-700 ease-out"
          style={{
            opacity: desc.visible ? 1 : 0,
            transform: desc.visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '200ms',
          }}
        >
          Platform wellness tourism digital untuk menemukan,
          memesan, dan menikmati pengalaman forest healing terbaik
          di Jawa Timur.
        </p>

        {/* Tombol */}
        <div
          ref={buttons.ref}
          className="flex flex-col sm:flex-row gap-3 mt-1 transition-all duration-700 ease-out"
          style={{
            opacity: buttons.visible ? 1 : 0,
            transform: buttons.visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '300ms',
          }}
        >
          <button className="bg-white text-[#0f6e56] text-[13px] px-5 py-2.5 rounded-lg hover:bg-gray-100 transition text-center">
            Booking Sekarang
          </button>
          <button className="border border-white/40 text-white text-[13px] px-5 py-2.5 rounded-lg hover:bg-white/10 transition text-center">
            Virtual Tour 360°
          </button>
        </div>

        {/* Statistik */}
        <div
          ref={stats.ref}
          className="flex gap-4 sm:gap-6 mt-2 transition-all duration-700 ease-out"
          style={{
            opacity: stats.visible ? 1 : 0,
            transform: stats.visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '400ms',
          }}
        >
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