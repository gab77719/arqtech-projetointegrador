import lixadeiraorbital from "../../../assets/lixadeiraorbital.webp";
import lixadeiramakita from "../../../assets/lixadeiramakita.webp";
import lixadeirabosch from "../../../assets/lixadeirabosch.webp";
import lixadeiraparedes from "../../../assets/lixadeiraparedes.webp";
import lixadeirablackecker from "../../../assets/lixadeirablackdecker.png";
import lixadeiraryobi from "../../../assets/lixadeiraryobi.jpg";
import lixadeirastanley from "../../../assets/lixadeirastanley.jpg";
import retifica from "../../../assets/retifica.jpg";
import pneumatica from "../../../assets/pneumatica.webp";

export default function Lixadeiras() {
  const produtos = [
    {
      id: 1,
      nome: "Lixadeira Orbital Bosch 250W",
      preco: "R$ 189,90",
      imagem: lixadeirabosch,
      descricao: "Acabamento suave em superfícies planas.",
    },
    {
      id: 2,
      nome: "Lixadeira de Cinta Makita 850W",
      preco: "R$ 549,00",
      imagem: lixadeiramakita,
      descricao: "Remoção rápida de material em grandes áreas.",
    },
    {
      id: 3,
      nome: "Lixadeira Roto Orbital DeWalt 300W",
      preco: "R$ 279,90",
      imagem: lixadeiraorbital,
      descricao: "Movimento duplo para acabamento profissional.",
    },
    {
      id: 4,
      nome: "Lixadeira de Parede Einhell 600W",
      preco: "R$ 399,90",
      imagem: lixadeiraparedes,
      descricao: "Ideal para lixamento de paredes e tetos.",
    },
    {
      id: 5,
      nome: "Lixadeira Angular Black & Decker 200W",
      preco: "R$ 159,90",
      imagem: lixadeirablackecker,
      descricao: "Compacta e fácil de manusear em cantos.",
    },
    {
      id: 6,
      nome: "Lixadeira de Disco Ryobi 400W",
      preco: "R$ 329,90",
      imagem: lixadeiraryobi,
      descricao: "Perfeita para desbaste e acabamento em madeira.",
    },
    {
      id: 7,
      nome: "Lixadeira de Fita Stanley 700W",
      preco: "R$ 459,90",
      imagem: lixadeirastanley,
      descricao: "Alta performance para trabalhos pesados.",
    },
    {
      id: 8,
      nome: "Lixadeira Manual Dremel 130W",
      preco: "R$ 219,90",
      imagem: retifica,
      descricao: "Detalhes precisos em pequenos projetos.",
    },
    {
      id: 9,
      nome: "Lixadeira Pneumática Industrial",
      preco: "R$ 599,90",
      imagem: pneumatica,
      descricao: "Potência e durabilidade para uso contínuo.",
    }
  ];

  return (
    <div className="min-h-screen bg-black py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Lixadeiras</h1>
          <p className="text-white text-lg pt-23">
            Acabamento perfeito para seus projetos!!!
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
