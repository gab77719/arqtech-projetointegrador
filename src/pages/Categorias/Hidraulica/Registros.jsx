export default function Registros() {
    const produtos = [
      {
        id: 1,
        nome: "Registro de Gaveta 3/4 Polegada",
        preco: "R$ 28,90",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Controle total de fluxo de água.",
      },
      {
        id: 2,
        nome: "Registro de Esfera 1/2 Polegada",
        preco: "R$ 24,50",
        imagem: "https://m.media-amazon.com/images/I/71LvkXqzKiL._AC_SL1500_.jpg",
        descricao: "Abertura e fechamento rápido.",
      },
      {
        id: 3,
        nome: "Registro de Pressão Chuveiro",
        preco: "R$ 45,90",
        imagem: "https://m.media-amazon.com/images/I/61rHvLXzJnL._AC_SL1500_.jpg",
        descricao: "Com acabamento cromado para banheiro.",
      },
      {
        id: 4,
        nome: "Registro Angular 1/2x1/2",
        preco: "R$ 32,90",
        imagem: "https://m.media-amazon.com/images/I/61ZLF3HXPBL._AC_SL1500_.jpg",
        descricao: "Para instalação de torneiras e sanitários.",
      },
      {
        id: 5,
        nome: "Registro de Jardim 3/4",
        preco: "R$ 38,50",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Resistente para uso externo.",
      },
      {
        id: 6,
        nome: "Registro Bruto 1 Polegada",
        preco: "R$ 52,90",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Para embutir em alvenaria.",
      },
      {
        id: 7,
        nome: "Registro de Pressão para Máquina de Lavar",
        preco: "R$ 29,90",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Controle eficiente do fluxo de água.",
      },
      {
        id: 8,
        nome: "Registro de Esfera Cromado 3/4 Polegada",
        preco: "R$ 48,50",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Durabilidade e resistência à corrosão.",
      },
      {
        id: 9,
        nome: "Registro de Gaveta 1 Polegada",
        preco: "R$ 65,90",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Ideal para sistemas hidráulicos residenciais.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Registros</h1>
            <p className="text-white text-lg pt-3 mt-10">
              Controle eficiente do fluxo de água
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