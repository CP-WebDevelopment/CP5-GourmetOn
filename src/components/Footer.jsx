// src/components/Footer.jsx
import SocialImage from "../assets/midias.png";

export default function Footer() {
  return (
    <footer className="bg-[#822626] text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3">
       
        <div className="flex items-center gap-2">
          <h1 className="text-lg md:text-xl font-extrabold tracking-tight">
            GourmetOn
          </h1>
        </div>

       
        <p className="text-center text-white/85 text-xs md:text-sm max-w-sm leading-snug">
          Entre em contato pelo email: gourmeton@gmail.com
        </p>

      
        <div>
          <img
            src={SocialImage}
            alt="Redes sociais"
            className="w-28 md:w-40 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-xs text-white/75 text-center">
          &copy; {new Date().getFullYear()} Todos os direitos reservados. Trabalho acadêmico Fiap.
        </p>
      </div>
    </footer>
  );
}
