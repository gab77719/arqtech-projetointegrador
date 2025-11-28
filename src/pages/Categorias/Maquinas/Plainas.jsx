export default function Plainas() {
  const produtos = [
    {
      id: 1,
      nome: "Plaina Elétrica Bosch 650W",
      preco: "R$ 329,90",
      imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
      descricao: "Profundidade de corte regulável para madeira.",
    },
    {
      id: 2,
      nome: "Plaina Manual Makita 82mm",
      preco: "R$ 379,00",
      imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
      descricao: "Largura de 82mm para trabalhos precisos.",
    },
    {
      id: 3,
      nome: "Plaina DeWalt 750W",
      preco: "R$ 419,90",
      imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
      descricao: "Potência e durabilidade para uso intensivo.",
    },
    {
      id: 4,
      nome: "Plaina Black & Decker 600W",
      preco: "R$ 289,90",
      imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
      descricao: "Compacta e fácil de manusear.",
    },
    {
      id: 5,
      nome: "Plaina Stanley 700W",
      preco: "R$ 359,90",
      imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
      descricao: "Ideal para nivelar e alisar superfícies de madeira.",
    },
    {
      id: 6,
      nome: "Plaina Ryobi 650W",
      preco: "R$ 339,90",
      imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
      descricao: "Desempenho confiável com ajuste de profundidade.",
    },
    {
      id: 7,
      nome: "Plaina Einhell 600W",
      preco: "R$ 309,90",
      imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
      descricao: "Perfeita para trabalhos de carpintaria leves.",
    },
    {
      id: 8,
      nome: "Plaina Hitachi 700W",
      preco: "R$ 389,90",
      imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
      descricao: "Alta eficiência com design ergonômico.",
    },
    {
      id: 9,
      nome: "Plaina Dremel 200W",
      preco: "R$ 279,90",
      imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
      descricao: "Compacta para detalhes e acabamentos finos.",
    }
  ];

  return (
    <div className="min-h-screen bg-black py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Plainas</h1>
          <p className="text-white text-lg pt-23">
            Aplaine e nivele superfícies com precisão
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