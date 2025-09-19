import SocialImage from "../assets/midias.png";

export default function Footer() {
  return (
    <footer className="bg-pink-300 text-black py-3 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2">

        
        <div className="flex items-center gap-2">
          <h1 className="text-lg md:text-xl font-bold">
            GourmetOn
          </h1>
        </div>

        {/* Frase */}
        <p className="text-center text-black text-xs md:text-sm max-w-sm leading-snug">
          Entre em contato pelo email: gourmeton@gmail.com
        </p>

        {/* Redes sociais */}
        <div>
          <img
            src={SocialImage}
            alt="Redes sociais"
            className="w-28 md:w-40 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-xs text-black/80 text-center">
          &copy; 2025 Todos os direitos reservados. Trabalho acadêmico Fiap.
        </p>
      </div>
    </footer>
  );
}
