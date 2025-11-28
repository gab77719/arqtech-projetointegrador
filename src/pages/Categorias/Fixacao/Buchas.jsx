export default function Buchas() {
    const produtos = [
      {
        id: 1,
        nome: "Bucha de Nylon S6 100un",
        preco: "R$ 12,90",
        imagem: "https://images.tcdn.com.br/img/img_prod/650381/bucha_nylon_s6_com_100_unidades_fischer_1531_1_20201210153528.jpg",
        descricao: "Para fixação em alvenaria e concreto.",
      },
      {
        id: 2,
        nome: "Bucha de Expansão S8 50un",
        preco: "R$ 18,50",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Alta resistência para cargas pesadas.",
      },
      {
        id: 3,
        nome: "Bucha Química 300ml",
        preco: "R$ 45,90",
        imagem: "https://m.media-amazon.com/images/I/61YqE4R7MNL._AC_SL1500_.jpg",
        descricao: "Fixação permanente em concreto.",
      },
      {
        id: 4,
        nome: "Bucha S10 Fisher 50un",
        preco: "R$ 16,90",
        imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
        descricao: "Bucha universal para diversos materiais.",
      },
      {
        id: 5,
        nome: "Bucha Metálica M8 100un",
        preco: "R$ 34,50",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Extra resistente para fixações industriais.",
      },
      {
        id: 6,
        nome: "Bucha Duopower S12 25un",
        preco: "R$ 28,90",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Tecnologia bi-material de alta performance.",
      },
      {
        id: 7,
        nome: "Bucha Plástica S5 200un",
        preco: "R$ 10,90",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Ideal para fixações leves em drywall.",
      },
      {
        id: 8,
        nome: "Bucha para Drywall 50un",
        preco: "R$ 22,50",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Fixação segura em placas de gesso.",
      },
      {
        id: 9,
        nome: "Bucha S14 Fischer 20un",
        preco: "R$ 30,90",
        imagem: "https://m.media-amazon.com/images/I/71LvkXqzKiL._AC_SL1500_.jpg",
        descricao: "Para cargas pesadas em concreto e alvenaria.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Buchas</h1>
            <p className="text-white text-lg pt-3">
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