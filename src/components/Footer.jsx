export default function Footer() {
  return (
    <>
      {/* CTA Chat */}
      <section className="bg-[#0f6e56] flex flex-col items-center gap-2 px-6 sm:px-8 py-10">
        <p className="text-[#9fe1cb] text-[12px] text-center">
          Ada pertanyaan sebelum booking?
        </p>
        <h3 className="text-white text-[18px] font-normal pb-2 text-center">
          Chat langsung dengan tim kami
        </h3>
        <button className="bg-white text-[#0f6e56] text-[13px] px-6 py-2.5 rounded-lg hover:bg-gray-100 transition">
          Mulai Chat Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#d1d5db] px-6 sm:px-8 py-6
                         flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">

        {/* Logo & Tagline */}
        <div className="flex flex-col gap-1 sm:w-[173px] shrink-0">
          <span className="text-[#0f6e56] text-[14px]">GO-Heal</span>
          <span className="text-[#9ca3af] text-[11px]">Platform Wellness Tourism Digital</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 sm:gap-5 sm:items-center">
          <a href="/" className="text-[#9ca3af] text-[12px] hover:text-[#0f6e56] transition">Tentang</a>
          <a href="/" className="text-[#9ca3af] text-[12px] hover:text-[#0f6e56] transition">Destinasi</a>
          <a href="/" className="text-[#9ca3af] text-[12px] hover:text-[#0f6e56] transition">Kontak</a>
          <a href="/" className="text-[#9ca3af] text-[12px] hover:text-[#0f6e56] transition">Kebijakan Privasi</a>
        </div>

        {/* Copyright */}
        <div className="sm:ml-auto">
          <span className="text-[#9ca3af] text-[11px]">
            © 2025 GO-Heal · Universitas Brawijaya
          </span>
        </div>

      </footer>
    </>
  )
}