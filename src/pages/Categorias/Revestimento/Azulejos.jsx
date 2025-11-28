export default function Azulejos() {
    const produtos = [
      {
        id: 1,
        nome: "Azulejo Branco 20x20cm - Cx 1,5m²",
        preco: "R$ 32,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_branco_20x20cm_elizabeth_1512061268_300x300.jpg",
        descricao: "Clássico e versátil para qualquer ambiente.",
      },
      {
        id: 2,
        nome: "Azulejo Subway Branco 7,5x15cm - Cx 1m²",
        preco: "R$ 48,50",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_subway_branco_75x15cm_portobello_1512061276_300x300.jpg",
        descricao: "Estilo metrô, moderno e elegante.",
      },
      {
        id: 3,
        nome: "Azulejo Decorado 20x20cm - Cx 1,5m²",
        preco: "R$ 58,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_decorado_20x20cm_portobello_1512061284_300x300.jpg",
        descricao: "Estampas exclusivas para dar destaque.",
      },
      {
        id: 4,
        nome: "Azulejo Hidráulico 20x20cm - Cx 1,2m²",
        preco: "R$ 72,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_hidraulico_20x20cm_elizabeth_1512061292_300x300.jpg",
        descricao: "Design vintage com alta durabilidade.",
      },
      {
        id: 5,
        nome: "Azulejo 3D Branco 30x30cm - Cx 1,44m²",
        preco: "R$ 85,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_3d_branco_30x30cm_portobello_1512061300_300x300.jpg",
        descricao: "Textura tridimensional para paredes modernas.",
      },
      {
        id: 6,
        nome: "Azulejo Preto Fosco 20x20cm - Cx 1,5m²",
        preco: "R$ 39,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_preto_fosco_20x20cm_elizabeth_1512061310_300x300.jpg",
        descricao: "Elegância e sofisticação em tons escuros.",
      },
      {
        id: 7,
        nome: "Azulejo Mosaico Colorido 30x30cm - Cx 1,08m²",
        preco: "R$ 95,50",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_mosaico_colorido_30x30cm_portobello_1512061320_300x300.jpg",
        descricao: "Cores vibrantes para um visual único.",
      },
      {
        id: 8,
        nome: "Azulejo Cinza Acetinado 25x40cm - Cx 1,2m²",
        preco: "R$ 44,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_cinza_acetinado_25x40cm_elizabeth_1512061330_300x300.jpg",
        descricao: "Tons neutros para ambientes contemporâneos.",
      },
      {
        id: 9,
        nome: "Azulejo Floral 20x20cm - Cx 1,5m²",
        preco: "R$ 62,90",
        imagem: "https://cdn.leroymerlin.com.br/products/azulejo_floral_20x20cm_portobello_1512061340_300x300.jpg",
        descricao: "Estampa floral para um toque delicado.",
      }
    ];
  
    return (
      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Azulejos</h1>
            <p className="text-white text-lg pt-23">
              Revistam paredes com estilo e praticidade
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