export default function Lixadeiras() {
    const produtos = [
      {
        id: 1,
        nome: "Lixadeira Orbital Bosch 250W",
        preco: "R$ 189,90",
        imagem: "https://m.media-amazon.com/images/I/71vqvW5HXHL._AC_SL1500_.jpg",
        descricao: "Acabamento suave em superfícies planas.",
      },
      {
        id: 2,
        nome: "Lixadeira de Cinta Makita 850W",
        preco: "R$ 549,00",
        imagem: "https://m.media-amazon.com/images/I/61y7JCYpRdL._AC_SL1000_.jpg",
        descricao: "Remoção rápida de material em grandes áreas.",
      },
      {
        id: 3,
        nome: "Lixadeira Roto Orbital DeWalt 300W",
        preco: "R$ 279,90",
        imagem: "https://m.media-amazon.com/images/I/71BWN1KXPfL._AC_SL1500_.jpg",
        descricao: "Movimento duplo para acabamento profissional.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Lixadeiras</h1>
            <p className="text-white text-lg pt-23">
              Acabamento perfeito para seus projetos!!!
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-full h-56 object-contain p-4 bg-gray-100"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.nome}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">{item.descricao}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
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
  