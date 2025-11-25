export default function Pastilhas() {
    const produtos = [
      {
        id: 1,
        nome: "Pastilha Vidro Mix Azul - Placa 30x30cm",
        preco: "R$ 38,90",
        imagem: "https://cdn.leroymerlin.com.br/products/pastilha_vidro_mix_azul_30x30cm_1512061326_300x300.jpg",
        descricao: "Tons de azul para piscinas e banheiros.",
      },
      {
        id: 2,
        nome: "Pastilha Porcelana Branca - Placa 30x30cm",
        preco: "R$ 42,50",
        imagem: "https://cdn.leroymerlin.com.br/products/pastilha_porcelana_branca_30x30cm_1512061334_300x300.jpg",
        descricao: "Acabamento clean e sofisticado.",
      },
      {
        id: 3,
        nome: "Pastilha Aço Inox - Placa 30x30cm",
        preco: "R$ 68,90",
        imagem: "https://cdn.leroymerlin.com.br/products/pastilha_aco_inox_30x30cm_1512061342_300x300.jpg",
        descricao: "Design moderno para cozinhas gourmet.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Pastilhas</h1>
            <p className="text-white text-lg pt-23">
              Detalhes que fazem toda a diferença 🔥🔥🔥
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