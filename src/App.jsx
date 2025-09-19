import Header from "./components/Header";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="bg-gray-200 scroll-smooth">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-24 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Hero Section
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          ABCD
        </p>
      </section>

      {/* Apresentação */}
      <section
        id="apresentacao"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-20 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Apresentação
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          ABCD
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
        <p className="mt-4 text-gray-600 text-center">
          ABCD
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
        <p className="mt-4 text-gray-600 text-center">
          ABCD
        </p>
      </section>

      {/* Sobremesas e Doces */}
      <section
        id="sobremesas"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-12 pb-12 px-4 sm:px-6"
      >
        <Produtos />
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="bg-white mx-2 sm:mx-4 my-4 sm:my-6 rounded-2xl shadow-lg pt-20 pb-12 px-4 sm:px-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Formulário de Contato
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          ABCDE
        </p>
      </section>
    </div>
  );
}

export default App;
