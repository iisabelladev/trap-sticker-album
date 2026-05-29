import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex items-center justify-between border-b border-zinc-800">
      
      <h1 className="text-2xl font-bold">
        Trap Album
      </h1>

      <div className="flex gap-6 text-sm uppercase">
        <Link to="/">Capa</Link>
        <Link to="/introducao">Introdução</Link>
        <Link to="/plug">Plug</Link>
      </div>

    </nav>
  )
}