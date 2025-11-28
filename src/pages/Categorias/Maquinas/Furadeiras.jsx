import React from "react";
import bosch from "../../../assets/bosch.jpg";
import dewalt from "../../../assets/dewalt.webp";
import makita from "../../../assets/makita.jpg";
import blackdecker from "../../../assets/blackdecker.webp";
import stanley from "../../../assets/stanley.webp";
import ryobi from "../../../assets/ryobi.jpg";
import einhell from "../../../assets/einhell.jpeg";
import hitachi from "../../../assets/hitachi.jpg";
import skil from "../../../assets/skil.webp";

export default function Furadeiras() {
  const produtos = [
    {
      id: 1,
      nome: "Furadeira Bosch GSB 450W",
      preco: "R$ 249,90",
      imagem: bosch,
      descricao: "Compacta e potente, ideal para uso doméstico e profissional leve.",
    },
    {
      id: 2,
      nome: "Furadeira DeWalt 550W",
      preco: "R$ 319,00",
      imagem: dewalt,
      descricao: "Alta durabilidade e velocidade variável com reversão.",
    },
    {
      id: 3,
      nome: "Furadeira Makita 600W",
      preco: "R$ 369,90",
      imagem: makita,
      descricao: "Excelente desempenho com empunhadura ergonômica.",
    },
    {
      id: 4,
      nome: "Furadeira Black & Decker 500W",
      preco: "R$ 229,90",
      imagem: blackdecker,
      descricao: "Leve e fácil de manusear, perfeita para pequenos reparos.",
    },
    {
      id: 5,
      nome: "Furadeira Stanley 650W",
      preco: "R$ 279,90",
      imagem: stanley,
      descricao: "Potente com controle de velocidade e função de impacto.",
    },
    {
      id: 6,
      nome: "Furadeira Ryobi 700W",
      preco: "R$ 399,90",
      imagem: ryobi,
      descricao: "Ideal para trabalhos pesados com alta performance.",
    },
    {
      id: 7,
      nome: "Furadeira Einhell 550W",
      preco: "R$ 259,90",
      imagem: einhell,
      descricao: "Versátil e confiável, com mandril sem chave.",
    },
    {
      id: 8,
      nome: "Furadeira Hitachi 600W",
      preco: "R$ 349,90",
      imagem: hitachi,
      descricao: "Design compacto com alta eficiência energética.",
    },
    {
      id: 9,
      nome: "Furadeira Skil 500W",
      preco: "R$ 219,90",
      imagem: skil,
      descricao: "Perfeita para uso doméstico com ótimo custo-benefício.",
    }
  ];

  return (
    <div className="min-h-screen bg-black py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Furadeiras</h1>
          <p className="text-white text-lg pt-23">
            Escolha a melhor furadeira para seu projeto!
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