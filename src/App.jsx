import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Capa from './pages/Capa'

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

       <div className="min-h-screen flex items-center justify-center gap-40">

      {/* DIV DO TEXTO */}
      <div className="w-[500px] h-[300px] rounded-2xl p-10 shadow-2x1">

        <h1 className="text-3xl font-bold text-black mb-2 mt-2 ">
          O que é o TrapSticker?
        </h1>

        <h2 className="text-lg leading-relaxed text-black">
          Nesse álbum digital dinâmico, temos como proposta apresentar o trap e suas vertentes, trazendo seus pioneiros e principais ícones desse gênero tão atual neste século.
        </h2>

      </div>

      {/* DIV DA IMAGEM */}
      <div className="w-[350px] h-[500px] bg-zinc-900 border border-purple-500 rounded-3xl shadow-2xl overflow-hidden">

        <img
          src="/capa.png"
          alt="Capa do álbum"
          className="w-full h-full object-cover"
        />

      </div>

    </div>

      <Routes>
        <Route path="/" element={<Capa />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}