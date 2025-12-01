import buchas6 from "../../../assets/buchas6.jpg";
import buchas8 from "../../../assets/buchas8.webp";
import buchaquimica from "../../../assets/buchaquimica.jpg";
import buchas10 from "../../../assets/buchas10.webp"; 
import bucham8 from "../../../assets/bucham8.webp";
import buchanylon6mm from "../../../assets/buchanylon6mm.jpg";
import buchas5 from "../../../assets/buchas5.webp";
import buchadry from "../../../assets/buchadry.jpg";
import buchas14 from "../../../assets/buchas14.webp";

export default function Buchas() {
    const produtos = [
      {
        id: 1,
        nome: "Bucha de Nylon S6 100un",
        preco: "R$ 12,90",
        imagem: buchas6,
        descricao: "Para fixação em alvenaria e concreto.",
      },
      {
        id: 2,
        nome: "Bucha de Expansão S8 50un",
        preco: "R$ 18,50",
        imagem: buchas8,
        descricao: "Alta resistência para cargas pesadas.",
      },
      {
        id: 3,
        nome: "Bucha Química 300ml",
        preco: "R$ 45,90",
        imagem: buchaquimica,
        descricao: "Fixação permanente em concreto.",
      },
      {
        id: 4,
        nome: "Bucha S10 Fisher 50un",
        preco: "R$ 16,90",
        imagem: buchas10,
        descricao: "Bucha universal para diversos materiais.",
      },
      {
        id: 5,
        nome: "Bucha Metálica M8 100un",
        preco: "R$ 34,50",
        imagem: bucham8,
        descricao: "Extra resistente para fixações industriais.",
      },
      {
        id: 6,
        nome: "Bucha Duopower S12 25un",
        preco: "R$ 28,90",
        imagem: buchanylon6mm,
        descricao: "Tecnologia bi-material de alta performance.",
      },
      {
        id: 7,
        nome: "Bucha Plástica S5 200un",
        preco: "R$ 10,90",
        imagem: buchas5,
        descricao: "Ideal para fixações leves em drywall.",
      },
      {
        id: 8,
        nome: "Bucha para Drywall 50un",
        preco: "R$ 22,50",
        imagem: buchadry,
        descricao: "Fixação segura em placas de gesso.",
      },
      {
        id: 9,
        nome: "Bucha S14 Fischer 20un",
        preco: "R$ 30,90",
        imagem: buchas14,
        descricao: "Para cargas pesadas em concreto e alvenaria.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Buchas</h1>
            <p className="text-white text-lg pt-3 mt-10">
              Fixação confiável para alvenaria, concreto e mais
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