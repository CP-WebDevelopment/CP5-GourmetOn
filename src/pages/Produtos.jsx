import { useState, useEffect } from "react";
import HeaderProdutos from "../components/HeaderProdutos";

function Produtos() {
  const [doces, setDoces] = useState([]);

  useEffect(() => {
    const fetchDoces = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=French&query=dessert&number=6&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        );

        const data = await response.json();
        setDoces(data.results); // ✅ Correção aqui
      } catch (error) {
        console.error("Erro ao buscar doces:", error);
      }
    };
    fetchDoces();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen scroll-smooth">
      <HeaderProdutos />

      <div className="py-24 px-2 sm:px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-pink-600">
          Doces e Sobremesas
        </h1>

        {doces.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Carregando doces...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {doces.map((doce) => (
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
