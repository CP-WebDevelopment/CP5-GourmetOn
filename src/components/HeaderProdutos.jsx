import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderProdutos() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-600">GourmetOn 🧁🍪</h1>
        {/* Menu desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-600 transition-colors">
                Início
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão hambúrguer */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
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
        </div>
      )}
    </header>
  );
}

export default HeaderProdutos;
