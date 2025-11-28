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
    {
      id: 4,
      nome: "Piso Porcelanato 60x60cm Cinza - Cx 2,16m²",
      preco: "R$ 112,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_porcelanato_60x60cm_cinza_polido_elizabeth_1512061258_300x300.jpg",
      descricao: "Acabamento polido para áreas sofisticadas.",
    },
    {
      id: 5,
      nome: "Piso de Madeira Maciça Ipê - Cx 1,5m²",
      preco: "R$ 159,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_madeira_macica_ipe_1512061266_300x300.jpg",
      descricao: "Durabilidade e beleza natural.",
    },
    {
      id: 6,
      nome: "Piso de Cimento Queimado - Cx 2m²",
      preco: "R$ 74,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_cimento_queimado_1512061274_300x300.jpg",
      descricao: "Estilo industrial para ambientes modernos.",
    },
    {
      id: 7,
      nome: "Piso de Pedra Natural São Tomé - Cx 1,2m²",
      preco: "R$ 129,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_pedra_natural_sao_tome_1512061282_300x300.jpg",
      descricao: "Beleza rústica e resistência.",
    },
    {
      id: 8,
      nome: "Piso Epóxi Autonivelante - Cx 1m²",
      preco: "R$ 95,50",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_epoxi_autonivelante_1512061290_300x300.jpg",
      descricao: "Acabamento liso e durável para áreas industriais.",
    },
    {
      id: 9,
      nome: "Piso de Borracha Antiderrapante - Cx 1,5m²",
      preco: "R$ 58,90",
      imagem: "https://cdn.leroymerlin.com.br/products/piso_borracha_antiderrapante_1512061298_300x300.jpg",
      descricao: "Segurança e conforto para áreas de alto tráfego.",
    }
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
              className="bg-black rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-56 object-contain p-4 bg-gray-100"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white-800 mb-2">
                  {item.nome}
                </h2>
                <p className="text-white-600 text-sm mb-3">{item.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white-600">
                    {item.preco}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                    Comprar
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