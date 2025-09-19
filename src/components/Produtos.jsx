import React, { useState, useEffect } from "react";

function Produtos() {
  const [doces, setDoces] = useState([]);

  useEffect(() => {
    const fetchDoces = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=6&tags=dessert&apiKey=9c26c285d09d48c1b53c620fa11c99af"
        );
        const data = await response.json();
        setDoces(data.recipes);
      } catch (error) {
        console.error("Erro ao buscar doces:", error);
      }
    };
    fetchDoces();
  }, []);

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Doces Aleatórios 🍭
      </h1>

      {doces.length === 0 ? (
        <p className="text-center text-gray-500">Carregando doces...</p>
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
                Realizar Compra 🛒
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Produtos;
