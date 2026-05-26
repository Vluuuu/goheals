import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinasi from './pages/Destinasi'
import Trip from './pages/Trip'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App