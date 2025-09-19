import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroImg from "../assets/hero.jpg"; // Verifique se o nome e extensão estão corretos

function Inicio() {
  return (
    <div className="bg-gray-200 scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="relative mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg flex flex-col justify-center items-center overflow-hidden min-h-[500px]">
        {/* Imagem de fundo */}
        <img
          src={HeroImg}
          alt="Comida deliciosa"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Conteúdo */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-black">
            Descubra o Sabor Gourmet
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black max-w-xl">
            Experimente receitas incríveis com apenas um clique. Baixe nosso app e tenha o melhor da gastronomia na palma da sua mão.
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all">
            Baixar App
          </button>
        </div>
      </section>

      {/* Apresentação */}
      <section
        id="apresentacao"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-20 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Apresentação
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-2xl">
          ABC
        </p>
      </section>

      {/* Funcionalidades */}
      <section
        id="funcionalidades"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-20 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Funcionalidades
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-2xl">
          ABC
        </p>
      </section>

      {/* Depoimentos */}
      <section
        id="depoimentos"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-20 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Depoimentos
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-2xl">
          ABC
        </p>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-20 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Formulário de Contato
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-2xl">
          ABC
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Inicio;
