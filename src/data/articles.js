import articleForest from '../assets/article-img-forest Healing.png'
import articleMental from '../assets/div.article-img-kesehatanMental.png'
import articleFito from '../assets/div.article-img-pitonsida.png'

export const articles = [
  { 
  id: 1, 
  category: "Forest Healing",   
  title: "Business Plan", 
  subtitle: "Lereng Gunung Welirang, Padusan, Pacet, Mojokerto",
  duration: "5 mnt", 
  date: "12 Mei 2025", 
  image: articleForest,
  pdf: "/business-plan-padusan.pdf"
},
  { id: 2, category: "Fitonsida",        title: "Fitonsida: senyawa tersembunyi di udara hutan pinus",        duration: "7 mnt", date: "8 Mei 2025",  image: articleFito },
  { id: 3, category: "Kesehatan Mental", title: "Meditasi di alam terbuka vs ruangan: apa bedanya bagi otak?", duration: "6 mnt", date: "3 Mei 2025",  image: articleMental },
  { id: 4, category: "Tips Wellness",    title: "5 latihan pernapasan yang bisa kamu lakukan di tengah hutan", duration: "4 mnt", date: "28 Apr 2025", emoji: "🌬️" },
  { id: 5, category: "Forest Healing",   title: "Mengapa suara alam bisa mempercepat pemulihan stres?",        duration: "6 mnt", date: "21 Apr 2025", emoji: "🌿" },
  { id: 6, category: "Kesehatan Mental", title: "Journaling di alam: cara sederhana melepas beban pikiran",    duration: "5 mnt", date: "15 Apr 2025", emoji: "📓" },
  { id: 7, category: "Tips Wellness",    title: "Panduan forest bathing untuk pemula: mulai dari mana?",       duration: "8 mnt", date: "10 Apr 2025", emoji: "🚶" },
  { id: 8, category: "Fitonsida",        title: "Pohon pinus vs bambu: mana yang lebih kaya fitonsida?",       duration: "5 mnt", date: "5 Apr 2025",  emoji: "🌲" },
]

export const filters = ["Semua", "Kesehatan Mental", "Forest Healing", "Fitonsida", "Tips Wellness"]

export const videos = [
  { id: 1, category: "Forest Healing",   title: "Bagaimana 20 menit di hutan menurunkan kortisol hingga 15%", duration: "5 mnt", date: "12 Mei 2025", image: articleForest },
  { id: 2, category: "Fitonsida",        title: "Fitonsida: senyawa tersembunyi di udara hutan pinus",        duration: "7 mnt", date: "8 Mei 2025",  image: articleFito },
  { id: 3, category: "Kesehatan Mental", title: "Meditasi di alam terbuka vs ruangan: apa bedanya bagi otak?", duration: "6 mnt", date: "3 Mei 2025",  image: articleMental },
  { id: 4, category: "Tips Wellness",    title: "Panduan forest bathing untuk pemula: langkah demi langkah",  duration: "8 mnt", date: "29 Apr 2025", image: articleForest },
  { id: 5, category: "Forest Healing",   title: "Healing di alam: pengalaman nyata dari peserta GO-Heal",    duration: "10 mnt", date: "26 Apr 2025", image: articleFito },
  { id: 6, category: "Kesehatan Mental", title: "Meditasi pagi di bawah pohon pinus: ikuti panduan ini",     duration: "7 mnt", date: "22 Apr 2025", image: articleMental },
]