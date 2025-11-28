export default function Parafusos() {
    const produtos = [
      {
        id: 1,
        nome: "Parafuso Fenda Phillips 100un",
        preco: "R$ 15,90",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Aço galvanizado 4x40mm para uso geral.",
      },
      {
        id: 2,
        nome: "Parafuso Sextavado M8 50un",
        preco: "R$ 28,90",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Para fixações estruturais robustas.",
      },
      {
        id: 3,
        nome: "Parafuso Madeira Cabeça Chata",
        preco: "R$ 19,90",
        imagem: "https://m.media-amazon.com/images/I/71LvkXqzKiL._AC_SL1500_.jpg",
        descricao: "Kit 200 peças sortidas para madeira.",
      },
      {
        id: 4,
        nome: "Parafuso Allen M6 100un",
        preco: "R$ 32,50",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Cabeça sextavado interno, alta precisão.",
      },
      {
        id: 5,
        nome: "Parafuso Rosca Soberba 5x70mm",
        preco: "R$ 24,90",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "120 unidades para fixação profissional.",
      },
      {
        id: 6,
        nome: "Parafuso Auto Perfurante 500un",
        preco: "R$ 38,90",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Ideal para metal e chapas finas.",
      },
      {
        id: 7,
        nome: "Parafuso Cabeça Panela M5 150un",
        preco: "R$ 21,50",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Acabamento arredondado para eletrônicos.",
      },
      {
        id: 8,
        nome: "Parafuso Flangeado M10 80un",
        preco: "R$ 45,90",
        imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
        descricao: "Com arruela integrada para fixação rápida.",
      },
      {
        id: 9,
        nome: "Parafuso Inox A2 4x40mm 100un",
        preco: "R$ 52,90",
        imagem: "https://m.media-amazon.com/images/I/71LvkXqzKiL._AC_SL1500_.jpg",
        descricao: "Resistência máxima contra oxidação.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Parafusos</h1>
            <p className="text-white text-lg pt-3">
              Fixação segura e resistente para todos os projetos
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