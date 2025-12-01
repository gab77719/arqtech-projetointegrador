export default function Valvulas() {
    const produtos = [
      {
        id: 1,
        nome: "Válvula de Retenção 3/4",
        preco: "R$ 35,90",
        imagem: "https://m.media-amazon.com/images/I/61ZLF3HXPBL._AC_SL1500_.jpg",
        descricao: "Impede o retorno de água na tubulação.",
      },
      {
        id: 2,
        nome: "Válvula de Descarga Deca",
        preco: "R$ 89,90",
        imagem: "https://m.media-amazon.com/images/I/61rHvLXzJnL._AC_SL1500_.jpg",
        descricao: "Cromada, para vaso sanitário.",
      },
      {
        id: 3,
        nome: "Válvula de Escoamento Click",
        preco: "R$ 42,50",
        imagem: "https://m.media-amazon.com/images/I/71LvkXqzKiL._AC_SL1500_.jpg",
        descricao: "Para pia e lavatório, abre e fecha com toque.",
      },
      {
        id: 4,
        nome: "Válvula de Alívio 1/2",
        preco: "R$ 48,90",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Proteção contra excesso de pressão.",
      },
      {
        id: 5,
        nome: "Válvula Reguladora de Pressão",
        preco: "R$ 125,90",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Mantém pressão constante na rede.",
      },
      {
        id: 6,
        nome: "Válvula Solenoide 3/4 12V",
        preco: "R$ 78,90",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Automação de sistemas hidráulicos.",
      },
      {
        id: 7,
        nome: "Válvula de Bolha PVC 1/2",
        preco: "R$ 22,50",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Para controle de fluxo em sistemas hidráulicos.",
      },
      {
        id: 8,
        nome: "Válvula de Retenção Inox 1 Polegada",
        preco: "R$ 95,50",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Alta resistência à corrosão para água e outros fluidos.",
      },
      {
        id: 9,
        nome: "Válvula de Alívio de Pressão 3/4",
        preco: "R$ 68,90",
        imagem: "https://m.media-amazon.com/images/I/61ZLF3HXPBL._AC_SL1500_.jpg",
        descricao: "Evita danos ao sistema por excesso de pressão.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Válvulas</h1>
            <p className="text-white text-lg pt-3 mt-10">
              Controle e segurança para sistemas hidráulicos
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