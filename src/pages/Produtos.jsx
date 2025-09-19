import { useState, useEffect } from "react";
import HeaderProdutos from "../components/HeaderProdutos";

function Produtos() {
  const [doces, setDoces] = useState([]);
  const [erroApi, setErroApi] = useState(false);
  const [ordenacao, setOrdenacao] = useState("padrao");
  const [tipoSelecionado, setTipoSelecionado] = useState("todos");
  const [tiposDisponiveis, setTiposDisponiveis] = useState([]);

  useEffect(() => {
    const fetchDoces = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=French&query=dessert&number=6&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        );

        if (!response.ok) {
          if (response.status === 402) {
            setErroApi(true);
          }
          throw new Error(`Erro ${response.status}`);
        }

        const data = await response.json();

        // Buscar detalhes de cada receita para obter dishTypes
        const detalhes = await Promise.all(
          data.results.map(async (doce) => {
            const res = await fetch(
              `https://api.spoonacular.com/recipes/${doce.id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
            );
            const info = await res.json();
            return {
              ...doce,
              preco: Math.floor(Math.random() * (80 - 20 + 1)) + 20,
              tipo: info.dishTypes?.[0] || "Desconhecido",
            };
          })
        );

        const tiposUnicos = [
          "todos",
          ...new Set(detalhes.map((d) => d.tipo).filter(Boolean)),
        ];

        setDoces(detalhes);
        setTiposDisponiveis(tiposUnicos);
      } catch (error) {
        console.error("Erro ao buscar doces:", error);
      }
    };
    fetchDoces();
  }, []);

  const docesOrdenados = [...doces].sort((a, b) => {
    if (ordenacao === "menor") return a.preco - b.preco;
    if (ordenacao === "maior") return b.preco - a.preco;
    return 0;
  });

  const docesFiltrados = docesOrdenados.filter((doce) =>
    tipoSelecionado === "todos" ? true : doce.tipo === tipoSelecionado
  );

  return (
    <div className="bg-gray-200 min-h-screen scroll-smooth">
      <HeaderProdutos />

      <div className="py-24 px-2 sm:px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-pink-600">
          Doces e Sobremesas
        </h1>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <select
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white shadow-md text-gray-700"
          >
            <option value="padrao">Ordenar por padrão</option>
            <option value="menor">Menor valor</option>
            <option value="maior">Maior valor</option>
          </select>

          <select
            value={tipoSelecionado}
            onChange={(e) => setTipoSelecionado(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white shadow-md text-gray-700"
          >
            {tiposDisponiveis.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Conteúdo */}
        {erroApi ? (
          <p className="text-center text-red-500 text-lg">
            O limite de acesso à API foi atingido hoje. Tente novamente amanhã.
          </p>
        ) : docesFiltrados.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Carregando doces...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {docesFiltrados.map((doce) => (
              <div
                key={doce.id}
                className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <img
                  src={doce.image}
                  alt={doce.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {doce.title}
                </h3>
                <p className="text-pink-600 font-bold text-lg mb-1">
                  Tipo: {doce.tipo}
                </p>
                <p className="text-pink-600 font-bold text-lg mb-2">
                  R$ {doce.preco},00
                </p>
                <button className="mt-auto bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition-colors">
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Produtos;
