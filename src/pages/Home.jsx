import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'

const articles = [
  {
    id: 1,
    category: "Forest Healing",
    title: "Bagaimana 20 menit di hutan menurunkan kortisol hingga 15%",
    duration: "5 mnt",
    date: "12 Mei 2025",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400",
  },
  {
    id: 2,
    category: "Fitonsida",
    title: "Fitonsida: senyawa tersembunyi di udara hutan pinus",
    duration: "7 mnt",
    date: "8 Mei 2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  },
  {
    id: 3,
    category: "Kesehatan Mental",
    title: "Meditasi di alam terbuka vs ruangan: apa bedanya bagi otak?",
    duration: "6 mnt",
    date: "3 Mei 2025",
    emoji: "🧘",
  },
]

const filters = ["Semua", "Kesehatan Mental", "Forest Healing", "Fitonsida", "Tips Wellness"]

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-[50px]">
        <Hero />
        <Destination />

        {/* Section Artikel */}
        <section className="bg-[#f9fafb] px-8 py-12 flex flex-col gap-4">
          <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">
            Edukasi
          </p>
          <h2 className="text-[#111827] text-[22px] font-normal -mt-2">
            Artikel terbaru
          </h2>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`text-[12px] px-3 py-1.5 rounded-full border transition ${
                  i === 0
                    ? "bg-[#0f6e56] text-white border-[#0f6e56]"
                    : "bg-white text-[#4b5563] border-[#d1d5db] hover:border-[#0f6e56] hover:text-[#0f6e56]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}