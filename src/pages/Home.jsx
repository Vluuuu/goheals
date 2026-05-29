import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

import articleForest from '../assets/article-img-forest Healing.png'
import articleMental from '../assets/div.article-img-kesehatanMental.png'
import articleFito from '../assets/div.article-img-pitonsida.png'

const articles = [
  { id: 1, category: "Forest Healing",   title: "Bagaimana 20 menit di hutan menurunkan kortisol hingga 15%", duration: "5 mnt", date: "12 Mei 2025", image: articleForest },
  { id: 2, category: "Fitonsida",        title: "Fitonsida: senyawa tersembunyi di udara hutan pinus",        duration: "7 mnt", date: "8 Mei 2025",  image: articleFito },
  { id: 3, category: "Kesehatan Mental", title: "Meditasi di alam terbuka vs ruangan: apa bedanya bagi otak?", duration: "6 mnt", date: "3 Mei 2025",  image: articleMental },
  { id: 4, category: "Tips Wellness",    title: "5 latihan pernapasan yang bisa kamu lakukan di tengah hutan", duration: "4 mnt", date: "28 Apr 2025", emoji: "🌬️" },
  { id: 5, category: "Forest Healing",   title: "Mengapa suara alam bisa mempercepat pemulihan stres?",        duration: "6 mnt", date: "21 Apr 2025", emoji: "🌿" },
  { id: 6, category: "Kesehatan Mental", title: "Journaling di alam: cara sederhana melepas beban pikiran",    duration: "5 mnt", date: "15 Apr 2025", emoji: "📓" },
  { id: 7, category: "Tips Wellness",    title: "Panduan forest bathing untuk pemula: mulai dari mana?",       duration: "8 mnt", date: "10 Apr 2025", emoji: "🚶" },
  { id: 8, category: "Fitonsida",        title: "Pohon pinus vs bambu: mana yang lebih kaya fitonsida?",       duration: "5 mnt", date: "5 Apr 2025",  emoji: "🌲" },
]

const filters = ["Semua", "Kesehatan Mental", "Forest Healing", "Fitonsida", "Tips Wellness"]

export default function Home() {
  const sectionHeader = useScrollAnimation(0.1)
  const filtersAnim   = useScrollAnimation(0.1)
  const articleCards  = useScrollAnimationGroup(articles.length, 0.05)

  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-[50px]">
        <Hero />
        <Destination />

        {/* Section Artikel */}
        <section className="bg-[#f9fafb] px-6 sm:px-8 py-8 sm:py-12 flex flex-col gap-4">

          {/* Header */}
          <div
            ref={sectionHeader.ref}
            style={{
              opacity:    sectionHeader.visible ? 1 : 0,
              transform:  sectionHeader.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            }}
          >
            <p className="text-[#0f6e56] text-[11px] uppercase tracking-widest">
              Edukasi
            </p>
            <h2 className="text-[#111827] text-[18px] sm:text-[22px] font-normal mt-2">
              Artikel terbaru
            </h2>
          </div>

          {/* Filter chips */}
          <div
            ref={filtersAnim.ref}
            className="flex gap-2 flex-wrap"
            style={{
              opacity:    filtersAnim.visible ? 1 : 0,
              transform:  filtersAnim.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 700ms ease-out 100ms, transform 700ms ease-out 100ms',
            }}
          >
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

          {/* Artikel cards — stagger */}
          <div
            ref={articleCards.ref}
            className="flex gap-4 mt-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {articles.map((article, i) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-[220px] sm:w-[260px]"
                style={{
                  opacity:    articleCards.isVisible(i) ? 1 : 0,
                  transform:  articleCards.isVisible(i) ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                }}
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>

        </section>

        <Footer />
      </div>
    </div>
  )
}