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
      {
        id: 4,
        nome: "Porcelanato 45x90cm Acetinado - Cx 2,43m²",
        preco: "R$ 99,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_45x90cm_acetinado_elizabeth_1512061326_300x300.jpg",
        descricao: "Acabamento suave para ambientes elegantes.",
      },
      {
        id: 5,
        nome: "Porcelanato Rústico 60x60cm - Cx 1,8m²",
        preco: "R$ 89,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_rustico_60x60cm_elizabeth_1512061334_300x300.jpg",
        descricao: "Textura antiderrapante para áreas externas.",
      },
      {
        id: 6,
        nome: "Porcelanato Esmaltado 30x60cm - Cx 1,44m²",
        preco: "R$ 69,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_esmaltado_30x60cm_portobello_1512061342_300x300.jpg",
        descricao: "Variedade de cores e designs modernos.",
      },
      {
        id: 7,
        nome: "Porcelanato Técnico 120x60cm - Cx 2,88m²",
        preco: "R$ 199,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_tecnico_120x60cm_portobello_1512061350_300x300.jpg",
        descricao: "Alta resistência para áreas comerciais.",
      },
      {
        id: 8,
        nome: "Porcelanato HD 75x75cm - Cx 2,25m²",
        preco: "R$ 139,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_hd_75x75cm_elizabeth_1512061360_300x300.jpg",
        descricao: "Imagem de alta definição para um visual único.",
      },
      {
        id: 9,
        nome: "Porcelanato Ecológico 60x60cm - Cx 1,8m²",
        preco: "R$ 109,90",
        imagem: "https://cdn.leroymerlin.com.br/products/porcelanato_ecologico_60x60cm_elizabeth_1512061370_300x300.jpg",
        descricao: "Sustentabilidade com alta performance.",
      }
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
  