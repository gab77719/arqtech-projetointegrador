import React from "react";
import bosch from "../../../assets/booosch.webp";
import boschhh from "../../../assets/boschhh.webp";
import dewalt from "../../../assets/dewalttt.jpg";
import makita from "../../../assets/makita_serra.webp";
import blackdecker from "../../../assets/blackdeckeeer.webp";
import stanley from "../../../assets/stanley_sabre.webp";
import einhell from "../../../assets/einhell_serra.webp";
import ryobi from "../../../assets/ryobii.webp";
import hitachi from "../../../assets/hitachii.webp";

export default function Serras() {
    const produtos = [
      {
        id: 1,
        nome: "Serra Circular Bosch 1400W",
        preco: "R$ 389,90",
        imagem: bosch,
        descricao: "Cortes precisos em madeira e derivados.",
      },
      {
        id: 2,
        nome: "Serra Tico-Tico DeWalt 500W",
        preco: "R$ 299,00",
        imagem: dewalt,
        descricao: "Ideal para cortes curvos e detalhados.",
      },
      {
        id: 3,
        nome: "Serra Mármore Makita 1200W",
        preco: "R$ 449,90",
        imagem: makita,
        descricao: "Potência para cortar mármore, granito e cerâmica.",
      },
      {
        id: 4,
        nome: "Serra de Esquadria Black & Decker 1500W",
        preco: "R$ 599,90",
        imagem: blackdecker,
        descricao: "Cortes angulares precisos para molduras e acabamentos.",
      },
      {
        id: 5,
        nome: "Serra Sabre Stanley 800W",
        preco: "R$ 349,90",
        imagem: stanley,
        descricao: "Versátil para cortes em madeira, metal e plástico.",
      },
      {
        id: 6,
        nome: "Serra Fita Einhell 250W",
        preco: "R$ 499,90",
        imagem: einhell,
        descricao: "Cortes precisos em madeira com ajuste de velocidade.",
      },
      {
        id: 7,
        nome: "Serra Circular Ryobi 1600W",
        preco: "R$ 429,90",
        imagem: ryobi,
        descricao: "Alta potência para cortes rápidos e eficientes.",
      },
      {
        id: 8,
        nome: "Serra Tico-Tico Hitachi 550W",
        preco: "R$ 319,90",
        imagem: hitachi,
        descricao: "Cortes precisos com controle de velocidade variável.",
      },
      {
        id: 9,
        nome: "Serra Mármore Bosch 1300W",
        preco: "R$ 459,90",
        imagem: boschhh,
        descricao: "Desempenho superior em cortes de pedra e cerâmica.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Serras</h1>
            <p className="text-white text-lg pt-23">
              Encontre a serra ideal para cada tipo de corte!
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
  