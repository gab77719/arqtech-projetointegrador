export default function Porcelanatos() {
    const produtos = [
      {
        id: 1,
        nome: "Porcelanato 60x60cm Polido - Cx 1,8m²",
        preco: "R$ 79,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_60x60cm_polido_portobello_1512061292_300x300.jpg",
        descricao: "Brilho intenso e alta resistência.",
      },
      {
        id: 2,
        nome: "Porcelanato 80x80cm Marmorizado - Cx 2,56m²",
        preco: "R$ 129,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_80x80cm_marmorizado_portobello_1512061300_300x300.jpg",
        descricao: "Imitação mármore, sofisticação garantida.",
      },
      {
        id: 3,
        nome: "Porcelanato 90x90cm Cimento - Cx 3,24m²",
        preco: "R$ 159,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_90x90cm_cimento_portobello_1512061318_300x300.jpg",
        descricao: "Estilo industrial moderno.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Porcelanatos</h1>
            <p className="text-white text-lg pt-23">
              Sofisticação e durabilidade para seus projetos
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
  