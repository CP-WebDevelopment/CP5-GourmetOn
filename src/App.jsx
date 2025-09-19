import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-200 ">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-64 bg-white mx-4 my-6 rounded-2xl shadow-lg pt-24 px-6 flex items-center"
      >
        <h1 className="text-3xl font-bold">Hero Section</h1>
      </section>

      {/* Apresentação */}
      <section
        id="apresentacao"
        className="h-64 bg-white mx-4 my-6 rounded-2xl shadow-lg pt-24 px-6 flex items-center"
      >
        <h1 className="text-2xl font-semibold">Apresentação</h1>
      </section>

      {/* Funcionalidades */}
      <section
        id="funcionalidades"
        className="h-64 bg-white mx-4 my-6 rounded-2xl shadow-lg pt-24 px-6 flex items-center"
      >
        <h1 className="text-2xl font-semibold">Funcionalidades</h1>
      </section>

      {/* Depoimentos */}
      <section
        id="depoimentos"
        className="h-64 bg-white mx-4 my-6 rounded-2xl shadow-lg pt-24 px-6 flex items-center"
      >
        <h1 className="text-2xl font-semibold">Depoimentos</h1>
      </section>

      {/* Sobremesa e doces */}
      <section
        id="sobremesas"
        className="h-64 bg-white mx-4 my-6 rounded-2xl shadow-lg pt-24 px-6 flex items-center"
      >
        <h1 className="text-2xl font-semibold">Doces e Sobremesas</h1>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="h-64 bg-white mx-4 my-6 rounded-2xl shadow-lg pt-24 px-6 flex items-center"
      >
        <h1 className="text-2xl font-semibold">Formulário de Contato</h1>
      </section>
    </div>
  );
}

export default App;
