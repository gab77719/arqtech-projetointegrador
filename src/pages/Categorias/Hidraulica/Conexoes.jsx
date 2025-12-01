export default function Conexoes() {
    const produtos = [
      {
        id: 1,
        nome: "Joelho 90° PVC 1/2 Polegada",
        preco: "R$ 2,90",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Conexão para desvio em ângulo reto.",
      },
      {
        id: 2,
        nome: "Tê PVC 3/4 Polegada 10un",
        preco: "R$ 18,50",
        imagem: "https://m.media-amazon.com/images/I/61nMxlQoA7L._AC_SL1500_.jpg",
        descricao: "Para ramificação de tubulações.",
      },
      {
        id: 3,
        nome: "Luva de Correr 1 Polegada",
        preco: "R$ 5,90",
        imagem: "https://m.media-amazon.com/images/I/61rWC5f9YfL._AC_SL1500_.jpg",
        descricao: "União removível entre tubos.",
      },
      {
        id: 4,
        nome: "Bucha de Redução 1x3/4",
        preco: "R$ 3,50",
        imagem: "https://m.media-amazon.com/images/I/51bGqZvKDyL._AC_SL1000_.jpg",
        descricao: "Adaptador para diferentes diâmetros.",
      },
      {
        id: 5,
        nome: "Cap PVC 1/2 Polegada 5un",
        preco: "R$ 8,90",
        imagem: "https://m.media-amazon.com/images/I/71pE8YvKZoL._AC_SL1500_.jpg",
        descricao: "Tampa para vedação de pontas de tubo.",
      },
      {
        id: 6,
        nome: "Kit Conexões Mistas 50 Peças",
        preco: "R$ 85,90",
        imagem: "https://m.media-amazon.com/images/I/71dP+RwLWyL._AC_SL1500_.jpg",
        descricao: "Sortimento completo para instalações.",
      },
      {
        id: 7,
        nome: "Adaptador Rosca Externa 3/4 Polegada",
        preco: "R$ 6,50",
        imagem: "https://m.media-amazon.com/images/I/61T9ZvVqHhL._AC_SL1500_.jpg",
        descricao: "Conexão entre tubos e acessórios roscados.",
      },
      {
        id: 8,
        nome: "Joelho Soldável 45° PVC 1 Polegada",
        preco: "R$ 4,90",
        imagem: "https://m.media-amazon.com/images/I/61dXqKPzVtL._AC_SL1500_.jpg",
        descricao: "Ideal para mudanças de direção suaves.",
      },
      {
        id: 9,
        nome: "Redução Conectora 2x1 Polegada",
        preco: "R$ 7,90",
        imagem: "https://m.media-amazon.com/images/I/51wZqXXqnUL._AC_SL1000_.jpg",
        descricao: "Permite a conexão entre tubos de diferentes diâmetros.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Conexões</h1>
            <p className="text-white text-lg pt-3 mt-10">
              Soluções completas para sistemas hidráulicos
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