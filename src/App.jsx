import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Capa from './pages/Capa'
import Introducao from './pages/Introducao'
import Plug from './pages/Plug'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black text-white flex flex-col">

        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Capa />} />
            <Route path="/introducao" element={<Introducao />} />
            <Route path="/plug" element={<Plug />} />
          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  )
}