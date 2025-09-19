import React, { useState, useEffect } from "react";

function Header() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Opacidade diminui até 80% quando rola a página
      setOpacity(scrollY > 50 ? 80 : 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-opacity duration-500`}
      style={{ opacity: opacity / 100 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-600">FoodApp 🍔</h1>

        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#hero" className="hover:text-pink-600 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a
                href="#apresentacao"
                className="hover:text-pink-600 transition-colors"
              >
                Apresentação
              </a>
            </li>
            <li>
              <a
                href="#funcionalidades"
                className="hover:text-pink-600 transition-colors"
              >
                Funcionalidades
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                className="hover:text-pink-600 transition-colors"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#sobremesas"
                className="hover:text-pink-600 transition-colors"
              >
                Doces e Sobremesas
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-pink-600 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
