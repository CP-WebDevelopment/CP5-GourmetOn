import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [opacity, setOpacity] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY > 50 ? 80 : 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-opacity duration-500"
      style={{ opacity: opacity / 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">GourmetOn 🧁🍪</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-pink-600">Início</a>
          <a href="#apresentacao" className="hover:text-pink-600">Apresentação</a>
          <a href="#funcionalidades" className="hover:text-pink-600">Funcionalidades</a>
          <a href="#depoimentos" className="hover:text-pink-600">Depoimentos</a>
          <Link to="/produtos" className="hover:text-pink-600">Produtos</Link>
          <a href="#contato" className="hover:text-pink-600">Contato</a>
        </nav>

        {/* Botão hambúrguer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t`}>
        <nav className="flex flex-col px-6 py-4 space-y-2 text-gray-700 font-medium">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Início</a>
          <a href="#apresentacao" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Apresentação</a>
          <a href="#funcionalidades" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Funcionalidades</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Depoimentos</a>
          <Link to="/produtos" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Produtos</Link>
          <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
