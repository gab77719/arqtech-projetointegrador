import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto9 from "../../assets/BoschP3.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 9,
    nome: "Serra Tico-Tico GST-750 220v Bosch",
    preco: 359,
    imagem: Produto9,
  };

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <div className="min-h-screen text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Produto9}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: 84672</p>

              <div className="mb-8">
                <span className="text-red-600 font-bold text-4xl">Bosch</span>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>

              <div className="flex gap-4">
                <Link to="/Endereço">
                  <button className="flex-1 bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                    Comprar
                  </button>
                </Link>

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

        
          <div className="border border-gray-700 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Segmentos:</h2>
                <p className="text-gray-300 leading-relaxed">
                  Construção Civil / Marcenaria / Metalmecânica 
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                  alvenaria / madeira / metal 
            
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                1 Serra Tico-Tico GST-750, 1 manual de instruções, 1 chave allen, 1 lâmina de serra, 1 protetor de cavacos, 1 maleta de transporte, 1 set de extração de pó.
                Garantia 2 anos Bosch.
                </p>
              </div>
            </div>
          </div>

    
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong>A serra tico-tico Bosch GST 90 BE, com potência de 650 W, é versátil e possui motor de alto desempenho. 
                Oferece ótimos resultados em cortes retos e curvos em diversos materiais com controle de velocidade eletrônico e ação pendular de 4 estágios. 
                Para maior durabilidade e estabilidade de corte, a placa base de aço antitorção é reforçada com duas camadas de aço.
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                - Embalagem: Maleta plástica
                <br />
                - Fonte de Energia: Cabo
                <br />
                - Acabamento e composição da ferramenta: Poliamida, metal e elastômero
                <br />
                - Acabamento do Material do cabo: Borracha e cobre
                <br />
                - Potência da ferramenta: 650W
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
  
}
