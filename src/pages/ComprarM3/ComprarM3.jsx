import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto6 from "../../assets/image 48.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 6,
    nome: "Vergalhão - Reto S",
    preco: 39.99,
    imagem: Produto6,
  };

  return (
    <>
     
      <div className="min-h-screen text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          {/* --- Seção principal --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Imagem do produto */}
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Produto6}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: 7480</p>

              <div className="mb-8">
                <span className="text-blue-500 font-bold text-4xl">CSN</span>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>

              <div className="flex gap-4">
                {/* Botão comprar */}
                <Link to="/Pagamentos">
                  <button className="flex-1 bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                    Comprar
                  </button>
                </Link>

                {/* Botão adicionar ao carrinho */}
                <button
                  className="flex-1 bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
                  onClick={() => {
                    adicionarAoCarrinho(produto);
                    alert("Produto adicionado ao carrinho!");
                  }}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>

          {/* --- Segmentos e Itens --- */}
          <div className="border border-gray-700 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Segmentos:</h2>
                <p className="text-gray-300 leading-relaxed">
                Construção Civil /
                 
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Aplicações:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                fundações / estruturas / concreto-massa / armado / pavimentos / obras/
                </p>
              </div>
            </div>
          </div>

          {/* --- Descrição técnica --- */}
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição:</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
               Os produtos laminados a quente apresentam sobre suas superfícies uma camada de óxido de ferro naturalmente formada durante o processo de produção.<br />
               Com configuração geométrica de núcleo redondo especialmente projetada para maior aderência ao concreto e alta performance em equipamentos de Corte e Dobra, o vergalhão CSN50 foi desenvolvido por meio de altíssima tecnologia, atendendo plenamente as especificações para a categoria CA-50.
                </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                <br />
                - Vergalhões: Diâmetro nominal de 6,3 mm a 32,0 mm;
                <br />
                - Fio máquina: Diâmetro nominal de 5,5 mm a 16,0 mm;
                <br />
                - Perfil laminado: Altura nominal de 100 mm a 530 mm.
                <br />
                - Norma: ABNT NBR 7480
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
  
}
