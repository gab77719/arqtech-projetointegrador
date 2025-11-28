export default function Pregos() {
    const produtos = [
      {
        id: 1,
        nome: "Prego com Cabeça 18x30 1kg",
        preco: "R$ 18,90",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Ideal para marcenaria e construção geral.",
      },
      {
        id: 2,
        nome: "Prego sem Cabeça 15x15 500g",
        preco: "R$ 12,50",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Acabamento invisível em madeiras.",
      },
      {
        id: 3,
        nome: "Prego para Concreto 2.1/2 100un",
        preco: "R$ 24,90",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Aço temperado para fixação em alvenaria.",
      },
      {
        id: 4,
        nome: "Prego Ardox Torcido 19x36 1kg",
        preco: "R$ 22,90",
        imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
        descricao: "Maior aderência e resistência ao arrancamento.",
      },
      {
        id: 5,
        nome: "Prego Galvanizado 17x27 1kg",
        preco: "R$ 26,50",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Proteção contra corrosão para áreas externas.",
      },
      {
        id: 6,
        nome: "Kit Pregos Sortidos 2kg",
        preco: "R$ 35,90",
        imagem: "https://m.media-amazon.com/images/I/71dP+RwLWyL._AC_SL1500_.jpg",
        descricao: "Diversos tamanhos para todas as aplicações.",
      },
      {
        id: 7,
        nome: "Prego Cimento 3.1/2 100un",
        preco: "R$ 29,90",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Especial para fixação em concreto e alvenaria.",
      },
      {
        id: 8,
        nome: "Prego de Aço Inox 16x25 500g",
        preco: "R$ 32,50",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Resistência superior à corrosão para ambientes úmidos.",
      },
      {
        id: 9,
        nome: "Prego Cabo de Aço 2.5mm 50un",
        preco: "R$ 45,90",
        imagem: "https://m.media-amazon.com/images/I/61YqE4R7MNL._AC_SL1500_.jpg",
        descricao: "Alta resistência para aplicações industriais.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Pregos</h1>
            <p className="text-white text-lg pt-3">
              Fixação rápida e eficiente para madeira e construção
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