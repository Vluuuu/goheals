import foto1 from '../assets/home-Rectangle 2.png'
import foto2 from '../assets/home-Rectangle 3.png'
import foto3 from '../assets/home-Rectangle 4.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Destination() {
  const info   = useScrollAnimation(0.15)
  const photos = useScrollAnimation(0.15)

  return (
    <section className="bg-[#085041] px-6 sm:px-8 py-8 sm:py-10">

      {/* Layout: kolom di mobile, baris di desktop */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

        {/* 3 Foto — di mobile tampil di atas, di desktop di kanan */}
        {/* Urutan DOM tetap: foto dulu, tapi di desktop order dibalik via order- */}
        <div
          ref={photos.ref}
          className="flex gap-2 sm:gap-3 w-full sm:w-auto order-first sm:order-last
                     transition-all duration-700 ease-out"
          style={{
            opacity: photos.visible ? 1 : 0,
            transform: photos.visible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          {/* Di mobile: 3 foto mengisi lebar penuh secara proporsional */}
          <img src={foto1} alt="foto 1" className="flex-1 sm:flex-none sm:w-[118px] h-[130px] sm:h-[165px] object-cover rounded-xl" />
          <img src={foto2} alt="foto 2" className="flex-1 sm:flex-none sm:w-[117px] h-[130px] sm:h-[165px] object-cover rounded-xl" />
          <img src={foto3} alt="foto 3" className="flex-1 sm:flex-none sm:w-[118px] h-[130px] sm:h-[165px] object-cover rounded-xl" />
        </div>

        {/* Info */}
        <div
          ref={info.ref}
          className="flex flex-col gap-2 flex-1 transition-all duration-700 ease-out"
          style={{
            opacity: info.visible ? 1 : 0,
            transform: info.visible ? 'translateY(0)' : 'translateY(32px)',
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