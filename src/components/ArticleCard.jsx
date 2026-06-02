export default function ArticleCard({ category, title, subtitle, duration, date, image, emoji, onClick }) {
  return (
    <div className="bg-white border border-[#d1d5db] rounded-xl overflow-hidden flex flex-col hover:shadow-md transition">
      <div className="bg-white border ..." onClick={onClick}></div>
      {/* Gambar / Emoji */}
      <div className="h-[120px] relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#e1f5ee] flex items-center justify-center">
            <span className="text-4xl">{emoji}</span>
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col gap-1.5">

        {/* Kategori */}
        <p className="text-[#0f6e56] text-[10px] uppercase tracking-wider">
          {category}
        </p>

        {/* Judul */}
        <p className="text-[#111827] text-[13px] leading-[19px]">
          {title}
        </p>

        {/* Meta */}
        <div className="flex gap-2 mt-1">
          <span className="text-[#9ca3af] text-[11px]">{duration}</span>
          <span className="text-[#9ca3af] text-[11px]">{date}</span>
        </div>

      </div>
    </div>
  )
}