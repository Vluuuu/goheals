import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Konfirmasi() {
  const navigate = useNavigate()
  const location = useLocation()
  const { paket, peserta, total, tanggal, metode } = location.state || {}

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <Navbar />
      <div className="pt-[50px] max-w-[500px] mx-auto px-6 py-16 flex flex-col items-center text-center gap-5">

        {/* Icon sukses */}
        <div className="w-20 h-20 bg-[#e8f5f0] rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
            <circle cx="12" cy="12" r="10" fill="#0f6e56"/>
            <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div>
          <h1 className="text-[#111827] text-[22px] font-semibold">Booking Berhasil!</h1>
          <p className="text-[#9ca3af] text-[13px] mt-1">Konfirmasi telah dikirim ke email kamu</p>
        </div>

        {/* Detail */}
        <div className="bg-white border border-[#d1d5db] rounded-xl p-5 w-full flex flex-col gap-3 text-left">
          {[
            { label: "Paket", value: paket || "Forest Bathing Dasar" },
            { label: "Tanggal", value: tanggal || "22 Mei 2025" },
            { label: "Peserta", value: `${peserta || 2} orang` },
            { label: "Total", value: `Rp${total || "370.000"}` },
            { label: "Metode", value: metode || "-" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between">
              <span className="text-[#9ca3af] text-[13px]">{item.label}</span>
              <span className="text-[#111827] text-[13px] font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#0f6e56] text-white py-3 rounded-xl text-[14px] hover:bg-[#085041] transition"
        >
          Kembali ke Beranda
        </button>

        <button
          onClick={() => navigate('/trip')}
          className="w-full border border-[#d1d5db] text-[#4b5563] py-3 rounded-xl text-[14px] hover:border-[#0f6e56] hover:text-[#0f6e56] transition"
        >
          Lihat Paket Lain
        </button>

      </div>
    </div>
  )
}