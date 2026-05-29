import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const location = useLocation()
  const path = location.pathname
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Beranda", to: "/" },
    { label: "Edukasi", to: "/edukasi" },
    { label: "Destinasi", to: "/destinasi" },
    { label: "Trip", to: "/trip" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f9fafb]">
      {/* Bar utama */}
      <div className="h-[50px] flex items-center justify-between px-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GO-Heal logo" className="w-7 h-7 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-[#0f6e56] font-bold text-[15px]">GO-Heal</span>
            <span className="text-[#5dcaa5] text-[10px] tracking-wide">wellness tourism</span>
          </div>
        </Link>

        {/* Link desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] pb-1 transition ${
                path === link.to
                  ? "text-[#0f6e56] border-b-2 border-[#0f6e56]"
                  : "text-[#4b5563] hover:text-[#0f6e56]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Kanan: profile + hamburger */}
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-[#d1d5db] flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4b5563]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          {/* Hamburger — hanya mobile */}
          <button
            className="sm:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-[#4b5563] transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-[#4b5563] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-[#4b5563] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      <div className={`sm:hidden bg-[#f9fafb] border-t border-[#e5e7eb] overflow-hidden transition-all duration-300 ${open ? 'max-h-[200px]' : 'max-h-0'}`}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={`block px-5 py-3 text-[13px] transition ${
              path === link.to
                ? "text-[#0f6e56] bg-[#f0faf6]"
                : "text-[#4b5563] hover:text-[#0f6e56]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}