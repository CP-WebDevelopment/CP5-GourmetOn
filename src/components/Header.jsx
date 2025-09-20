import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [opacity, setOpacity] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpacity(window.scrollY > 50 ? 90 : 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "transition-colors hover:text-[#822626] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6DDBC] rounded";

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-md z-50 transition-opacity duration-500"
      style={{ opacity: opacity / 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[64px] py-0 flex justify-between items-center">
        <a href="#hero" className="relative flex items-center h-full shrink-0" aria-label="Ir para o início">
          <img
            src={Logo}
            alt="GourmetOn"
            className="h-full w-auto object-contain origin-left scale-[2.03] select-none"
            draggable="false"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <a href="#hero" className={linkBase}>Início</a>
          <a href="#apresentacao" className={linkBase}>Apresentação</a>
          <a href="#funcionalidades" className={linkBase}>Funcionalidades</a>
          <a href="#depoimentos" className={linkBase}>Depoimentos</a>
          <a href="#contato" className={linkBase}>Contato</a>
        </nav>

        <button
          onClick={() => setIsOpen(v => !v)}
          className="md:hidden text-gray-800 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6DDBC]"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white/95 backdrop-blur border-t`}>
        <nav className="flex flex-col px-6 py-4 space-y-2 text-gray-800 font-medium">
          <a href="#hero" onClick={() => setIsOpen(false)} className={linkBase}>Início</a>
          <a href="#apresentacao" onClick={() => setIsOpen(false)} className={linkBase}>Apresentação</a>
          <a href="#funcionalidades" onClick={() => setIsOpen(false)} className={linkBase}>Funcionalidades</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className={linkBase}>Depoimentos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className={linkBase}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
