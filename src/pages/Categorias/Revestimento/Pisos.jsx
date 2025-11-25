import React from "react";

export default function Pisos() {
  const produtos = [
    {
      id: 1,
      nome: "Piso Cerâmico 45x45cm Bege - Cx 2,5m²",
      preco: "R$ 42,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_ceramico_45x45cm_bege_acetinado_elizabeth_1512061234_300x300.jpg",
      descricao: "Acabamento acetinado para ambientes internos.",
    },
    {
      id: 2,
      nome: "Piso Laminado Eucafloor - Cx 2,14m²",
      preco: "R$ 89,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_laminado_eucafloor_evidence_1512061242_300x300.jpg",
      descricao: "Imitação madeira, fácil instalação.",
    },
    {
      id: 3,
      nome: "Piso Vinílico 30x30cm - Cx 2m²",
      preco: "R$ 68,50",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_vinilico_30x30cm_tarkett_1512061250_300x300.jpg",
      descricao: "Resistente à água, ideal para cozinhas.",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Pisos</h1>
          <p className="text-white text-lg pt-23">
            Transforme seus ambientes com pisos de qualidade
          </p>
        </div>
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
                <p className="text-gray-600 text-sm mb-3">{item.descricao}</p>
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
      </div>
    </div>
  );
}