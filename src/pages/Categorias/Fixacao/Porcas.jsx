export default function PorcasArruelas() {
    const produtos = [
      {
        id: 1,
        nome: "Porca Sextavada M8 100un",
        preco: "R$ 22,90",
        imagem: "https://m.media-amazon.com/images/I/61rHvLXzJnL._AC_SL1500_.jpg",
        descricao: "Aço carbono zincado de alta qualidade.",
      },
      {
        id: 2,
        nome: "Arruela Lisa M8 200un",
        preco: "R$ 14,50",
        imagem: "https://m.media-amazon.com/images/I/61ZLF3HXPBL._AC_SL1500_.jpg",
        descricao: "Distribuição uniforme de pressão.",
      },
      {
        id: 3,
        nome: "Kit Porcas e Arruelas Misto",
        preco: "R$ 35,90",
        imagem: "https://m.media-amazon.com/images/I/71dP+RwLWyL._AC_SL1500_.jpg",
        descricao: "300 peças em tamanhos variados.",
      },
      {
        id: 4,
        nome: "Porca Autotravante M10 50un",
        preco: "R$ 28,90",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Com anel de nylon para trava segura.",
      },
      {
        id: 5,
        nome: "Arruela de Pressão M6 150un",
        preco: "R$ 16,90",
        imagem: "https://m.media-amazon.com/images/I/71LvkXqzKiL._AC_SL1500_.jpg",
        descricao: "Evita afrouxamento por vibração.",
      },
      {
        id: 6,
        nome: "Porca Borboleta M8 30un",
        preco: "R$ 19,50",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Aperto manual sem ferramentas.",
      },
      {
        id: 7,
        nome: "Arruela de Vedação M10 100un",
        preco: "R$ 24,90",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Ideal para aplicações hidráulicas.",
      },
      {
        id: 8,
        nome: "Porca Flangeada M12 40un",
        preco: "R$ 32,50",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Maior área de contato para fixação segura.",
      },
      {
        id: 9,
        nome: "Arruela de Pressão Inox M8 100un",
        preco: "R$ 45,90",
        imagem: "https://m.media-amazon.com/images/I/61YqE4R7MNL._AC_SL1500_.jpg",
        descricao: "Resistência superior à corrosão.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Porcas e Arruelas
            </h1>
            <p className="text-white text-lg pt-3">
              Componentes essenciais para fixações perfeitas
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