import React from "react";

export default function Furadeiras() {
  const produtos = [
    {
      id: 1,
      nome: "Furadeira Bosch GSB 450W",
      preco: "R$ 249,90",
      imagem: "https://m.media-amazon.com/images/I/61KQoxE8TuL._AC_SL1500_.jpg",
      descricao: "Compacta e potente, ideal para uso doméstico e profissional leve.",
    },
    {
      id: 2,
      nome: "Furadeira DeWalt 550W",
      preco: "R$ 319,00",
      imagem: "https://m.media-amazon.com/images/I/61-6nUQtrgL._AC_SL1500_.jpg",
      descricao: "Alta durabilidade e velocidade variável com reversão.",
    },
    {
      id: 3,
      nome: "Furadeira Makita 600W",
      preco: "R$ 369,90",
      imagem: "https://m.media-amazon.com/images/I/71MfXTu6F4L._AC_SL1500_.jpg",
      descricao: "Excelente desempenho com empunhadura ergonômica e mandril metálico.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Furadeiras</h1>
          <p className="text-gray-600 text-lg">
            Escolha a melhor furadeira para seu projeto!
          </p>
        </div>

        {/* Lista de produtos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-56 object-contain p-4 bg-gray-100"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.nome}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {item.descricao}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    {item.preco}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            *Os preços e disponibilidade estão sujeitos a alterações sem aviso prévio.
          </p>
        </div>
      </div>
    </div>
  );
}
