
import foto1 from '../assets/home-Rectangle 2.png'
import foto2 from '../assets/home-Rectangle 3.png'
import foto3 from '../assets/home-Rectangle 4.png'
export default function Destination() {
  return (
    <section className="bg-[#085041] flex items-center gap-6 px-8 py-8">

      {/* Info Kiri */}
      <div className="flex flex-col gap-2 flex-1">

        {/* Badge */}
        <div className="bg-[#5dcaa5]/20 px-3 py-1 rounded-xl w-fit">
          <span className="text-[#5dcaa5] text-[11px]">Pilot Destinasi</span>
        </div>

        {/* Judul */}
        <h2 className="text-white text-xl font-normal">
          Forest Healing Padusan
        </h2>

        {/* Deskripsi */}
        <p className="text-white/65 text-[13px] leading-[20px] max-w-[400px]">
          Terletak di lereng Gunung Welirang pada ketinggian 900 mdpl. Hutan
          pinus dengan udara segar dan jalur meditasi yang terawat.
        </p>

        {/* Tombol */}
        <div className="flex gap-3 mt-2">
          <button className="bg-[#5dcaa5] text-[#085041] text-[13px] px-5 py-2.5 rounded-lg hover:opacity-90 transition">
            Lihat Destinasi
          </button>
          <button className="border border-white/25 text-white/80 text-[13px] px-5 py-2.5 rounded-lg hover:bg-white/10 transition">
            Galeri Foto
          </button>
        </div>

      </div>

      {/* 3 Foto Kanan */}
      <div className="flex gap-3">
        <img src={foto1} alt="foto 1" className="w-[118px] h-[165px] object-cover rounded-xl" />
        <img src={foto2} alt="foto 2" className="w-[117px] h-[165px] object-cover rounded-xl" />
        <img src={foto3} alt="foto 3" className="w-[118px] h-[165px] object-cover rounded-xl" />
      </div>

    </section>
  )
}