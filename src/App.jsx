import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinasi from './pages/Destinasi'
import Trip from './pages/Trip'
import Edukasi from './pages/Edukasi'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/edukasi" element={<Edukasi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App