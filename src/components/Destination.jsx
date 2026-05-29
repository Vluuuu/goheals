import foto1 from '../assets/home-Rectangle 2.png'
import foto2 from '../assets/home-Rectangle 3.png'
import foto3 from '../assets/home-Rectangle 4.png'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Destination() {
  const info   = useScrollAnimation(0.15)
  const photos = useScrollAnimationGroup(3, 0.1)

  return (
    <section className="bg-[#085041] px-6 sm:px-8 py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

        {/* 3 Foto */}
        <div
          ref={photos.ref}
          className="flex gap-2 sm:gap-3 w-full sm:w-auto order-first sm:order-last"
        >
          {[foto1, foto2, foto3].map((foto, i) => (
            <img
              key={i}
              src={foto}
              alt={`foto ${i + 1}`}
              className="flex-1 sm:flex-none sm:w-[118px] h-[130px] sm:h-[165px] object-cover rounded-xl"
              style={{
                opacity:    photos.isVisible(i) ? 1 : 0,
                transform:  photos.isVisible(i) ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
              }}
            />
          ))}
        </div>

        {/* Info */}
        <div
          ref={info.ref}
          className="flex flex-col gap-2 flex-1"
          style={{
            opacity:    info.visible ? 1 : 0,
            transform:  info.visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
          }}
        >
          <div className="bg-[#5dcaa5]/20 px-3 py-1 rounded-xl w-fit">
            <span className="text-[#5dcaa5] text-[11px]">Pilot Destinasi</span>
          </div>
          <h2 className="text-white text-xl font-normal">
            Forest Healing Padusan
          </h2>
          <p className="text-white/65 text-[13px] leading-[20px] max-w-[400px]">
            Terletak di lereng Gunung Welirang pada ketinggian 900 mdpl. Hutan
            pinus dengan udara segar dan jalur meditasi yang terawat.
          </p>
          <div className="flex gap-3 mt-2">
            <button className="bg-[#5dcaa5] text-[#085041] text-[13px] px-5 py-2.5 rounded-lg hover:opacity-90 transition">
              Lihat Destinasi
            </button>
            <button className="border border-white/25 text-white/80 text-[13px] px-5 py-2.5 rounded-lg hover:bg-white/10 transition">
              Galeri Foto
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}