import { useState } from "react";
import { Link } from "react-router-dom";

import carrinhoIcon from "../assets/carrinho.png";
import lupaIcon from "../assets/lupa.png";
import perfilIcon from "../assets/perfil.png";

function HeaderProdutos() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-600">GourmetOn 🧁🍪</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-600 transition-colors">Início</Link>

          {/* Ícones */}
          <div className="flex items-center space-x-4 ml-6">
            <img src={perfilIcon} alt="Perfil" className="w-6 h-6 cursor-pointer" />
            <img src={lupaIcon} alt="Buscar" className="w-6 h-6 cursor-pointer" />
            <img src={carrinhoIcon} alt="Carrinho" className="w-6 h-6 cursor-pointer" />
          </div>
        </nav>

        {/* Botão hambúrguer com texto */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 font-bold"
        >
          {isOpen ? "X" : "="}
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white shadow-md`}>
        <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-600 transition-colors"
            >
              Início
            </Link>
          </li>
        </ul>

        {/* Ícones no menu mobile */}
        <div className="flex justify-center space-x-6 mt-4">
          <img src={perfilIcon} alt="Perfil" className="w-6 h-6 cursor-pointer" />
          <img src={lupaIcon} alt="Buscar" className="w-6 h-6 cursor-pointer" />
          <img src={carrinhoIcon} alt="Carrinho" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default HeaderProdutos;
