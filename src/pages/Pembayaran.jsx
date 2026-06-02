import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const metodePembayaran = [
  {
    group: "Transfer Bank",
    options: [
      { id: "bca", label: "BCA", noRek: "1234567890", atasnama: "GO-Heal Indonesia" },
      { id: "mandiri", label: "Mandiri", noRek: "0987654321", atasnama: "GO-Heal Indonesia" },
      { id: "bni", label: "BNI", noRek: "1122334455", atasnama: "GO-Heal Indonesia" },
    ]
  },
  {
    group: "E-Wallet",
    options: [
      { id: "gopay", label: "GoPay", noRek: "0812-3456-7890", atasnama: "GO-Heal Indonesia" },
      { id: "ovo", label: "OVO", noRek: "0812-3456-7890", atasnama: "GO-Heal Indonesia" },
      { id: "dana", label: "Dana", noRek: "0812-3456-7890", atasnama: "GO-Heal Indonesia" },
    ]
  },
  {
    group: "Kartu Kredit / Debit",
    options: [
      { id: "kartu", label: "Visa / Mastercard", noRek: null, atasnama: null },
    ]
  },
]

export default function Pembayaran() {
  const navigate = useNavigate()
  const location = useLocation()
  const { paket, peserta, total, tanggal } = location.state || {}

  const [selectedMetode, setSelectedMetode] = useState(null)
  const [namaTransfer, setNamaTransfer] = useState('')
  const [nomorKartu, setNomorKartu] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [step, setStep] = useState(1) // 1: pilih metode, 2: detail bayar

  const selected = metodePembayaran
    .flatMap(g => g.options)
    .find(o => o.id === selectedMetode)

  const handleLanjut = () => {
    if (!selectedMetode) return
    setStep(2)
  }

  const handleBayar = () => {
    navigate('/konfirmasi', {
      state: { paket, peserta, total, tanggal, metode: selected?.label }
    })
  }

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <Navbar />
      <div className="pt-[50px] max-w-[700px] mx-auto px-6 py-10">

        {/* Header */}
        <button
          onClick={() => step === 1 ? navigate(-1) : setStep(1)}
          className="flex items-center gap-2 text-[#0f6e56] text-[13px] hover:opacity-75 transition mb-6"
        >
          ← Kembali
        </button>

        <h1 className="text-[#111827] text-[22px] font-semibold mb-1">Pembayaran</h1>
        <p className="text-[#9ca3af] text-[13px] mb-6">Selesaikan pembayaran untuk konfirmasi booking</p>

        {/* Ringkasan Paket */}
        <div className="bg-white border border-[#d1d5db] rounded-xl p-5 mb-5">
          <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider mb-3">Ringkasan Pesanan</p>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[#111827] text-[15px] font-medium">{paket || "Forest Bathing Dasar"}</p>
              <p className="text-[#9ca3af] text-[13px] mt-1">{tanggal || "22 Mei 2025"} · {peserta || 2} orang</p>
            </div>
            <p className="text-[#0f6e56] text-[16px] font-semibold">Rp{total || "370.000"}</p>
          </div>
        </div>

        {/* STEP 1: Pilih Metode */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <p className="text-[#111827] text-[15px] font-medium">Pilih Metode Pembayaran</p>

            {metodePembayaran.map((group) => (
              <div key={group.group} className="bg-white border border-[#d1d5db] rounded-xl overflow-hidden">
                <p className="text-[#9ca3af] text-[11px] uppercase tracking-wider px-4 pt-4 pb-2">{group.group}</p>
                {group.options.map((opt, i) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer transition ${
                      i < group.options.length - 1 ? 'border-b border-[#f3f4f6]' : ''
                    } ${selectedMetode === opt.id ? 'bg-[#f0faf6]' : 'hover:bg-[#f9fafb]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="metode"
                        value={opt.id}
                        checked={selectedMetode === opt.id}
                        onChange={() => setSelectedMetode(opt.id)}
                        className="accent-[#0f6e56] w-4 h-4"
                      />
                      <span className="text-[#111827] text-[14px]">{opt.label}</span>
                    </div>
                    {selectedMetode === opt.id && (
                      <span className="text-[#0f6e56] text-[12px]">✓ Dipilih</span>
                    )}
                  </label>
                ))}
              </div>
            ))}

            <button
              onClick={handleLanjut}
              disabled={!selectedMetode}
              className={`w-full py-3 rounded-xl text-[14px] transition mt-2 ${
                selectedMetode
                  ? 'bg-[#0f6e56] text-white hover:bg-[#085041]'
                  : 'bg-[#d1d5db] text-[#9ca3af] cursor-not-allowed'
              }`}
            >
              Lanjut ke Pembayaran
            </button>
          </div>
        )}

        {/* STEP 2: Detail Bayar */}
        {step === 2 && selected && (
          <div className="flex flex-col gap-4">
            <p className="text-[#111827] text-[15px] font-medium">Detail Pembayaran — {selected.label}</p>

            <div className="bg-white border border-[#d1d5db] rounded-xl p-5 flex flex-col gap-4">

              {/* Transfer Bank / E-Wallet */}
              {selected.noRek && (
                <>
                  <div className="bg-[#e8f5f0] rounded-lg p-4 flex flex-col gap-1">
                    <p className="text-[#9ca3af] text-[11px]">Nomor Rekening / Akun</p>
                    <p className="text-[#0f6e56] text-[18px] font-semibold tracking-wider">{selected.noRek}</p>
                    <p className="text-[#4b5563] text-[12px]">a.n. {selected.atasnama}</p>
                  </div>

                  <div className="bg-[#fff8e1] border border-[#fcd34d] rounded-lg px-4 py-3">
                    <p className="text-[#92400e] text-[12px]">⚠️ Transfer tepat sesuai nominal untuk mempercepat verifikasi</p>
                  </div>

                  <div>
                    <label className="text-[#4b5563] text-[12px] block mb-1">Nama pengirim transfer</label>
                    <input
                      type="text"
                      value={namaTransfer}
                      onChange={(e) => setNamaTransfer(e.target.value)}
                      placeholder="Masukkan nama sesuai rekening"
                      className="w-full border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#0f6e56]"
                    />
                  </div>
                </>
              )}

              {/* Kartu Kredit */}
              {!selected.noRek && (
                <>
                  <div>
                    <label className="text-[#4b5563] text-[12px] block mb-1">Nomor Kartu</label>
                    <input
                      type="text"
                      value={nomorKartu}
                      onChange={(e) => setNomorKartu(e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#0f6e56]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[#4b5563] text-[12px] block mb-1">Expired</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#0f6e56]"
                      />
                    </div>
                    <div>
                      <label className="text-[#4b5563] text-[12px] block mb-1">CVV</label>
                      <input
                        type="password"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="•••"
                        maxLength={3}
                        className="w-full border border-[#d1d5db] rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#0f6e56]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Total */}
              <div className="flex justify-between items-center border-t border-[#f3f4f6] pt-4">
                <p className="text-[#4b5563] text-[13px]">Total Pembayaran</p>
                <p className="text-[#0f6e56] text-[18px] font-semibold">Rp{total || "370.000"}</p>
              </div>

              <button
                onClick={handleBayar}
                className="w-full bg-[#0f6e56] text-white py-3 rounded-xl text-[14px] hover:bg-[#085041] transition"
              >
                Konfirmasi Pembayaran
              </button>

              <p className="text-[#9ca3af] text-[11px] text-center">
                🔒 Pembayaran aman dan terenkripsi
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}