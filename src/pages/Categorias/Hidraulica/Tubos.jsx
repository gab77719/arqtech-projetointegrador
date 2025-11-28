export default function Tubos() {
    const produtos = [
      {
        id: 1,
        nome: "Tubo PVC 1/2 Polegada 6m",
        preco: "R$ 18,90",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Para água fria, roscável.",
      },
      {
        id: 2,
        nome: "Tubo PVC 3/4 Polegada 6m",
        preco: "R$ 24,90",
        imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
        descricao: "Alta resistência para instalações prediais.",
      },
      {
        id: 3,
        nome: "Tubo PPR 20mm 3m",
        preco: "R$ 32,50",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Para água quente e fria, termofusível.",
      },
      {
        id: 4,
        nome: "Tubo PEX 1/2 Polegada 50m",
        preco: "R$ 185,90",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Flexível para instalações complexas.",
      },
      {
        id: 5,
        nome: "Tubo de Cobre 15mm 3m",
        preco: "R$ 78,90",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Alta durabilidade para água quente.",
      },
      {
        id: 6,
        nome: "Tubo Esgoto PVC 100mm 6m",
        preco: "R$ 42,90",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Para sistemas de esgoto sanitário.",
      },
      {
        id: 7,
        nome: "Tubo Galvanizado 1 Polegada 3m",
        preco: "R$ 95,50",
        imagem: "https://m.media-amazon.com/images/I/71dP+RwLWyL._AC_SL1500_.jpg",
        descricao: "Resistente à corrosão para água e gás.",
      },
      {
        id: 8,
        nome: "Tubo CPVC 1/2 Polegada 3m",
        preco: "R$ 28,90",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Para água quente, resistente a químicos.",
      },
      {
        id: 9,
        nome: "Tubo Flexível Corrugado 50mm 10m",
        preco: "R$ 65,90",
        imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
        descricao: "Ideal para drenagem e proteção de cabos.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Tubos</h1>
            <p className="text-white text-lg pt-3">
              Tubulações para todas as necessidades hidráulicas
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