import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinasi from './pages/Destinasi'
import Trip from './pages/Trip'
import Edukasi from './pages/Edukasi'
import PDFViewer from './pages/PDFViewer'
import Pembayaran from './pages/Pembayaran'
import Konfirmasi from './pages/Konfirmasi'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pdf" element={<PDFViewer />} />
        <Route path="/" element={<Home />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/konfirmasi" element={<Konfirmasi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App