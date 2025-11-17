import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto7 from "../../assets/BoschP1.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 7,
    nome: "Furadeira de impacto Bosch GSB 550 RE 550W",
    preco: 359,
    imagem: Produto7,
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
                src={Produto7}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: 57122</p>

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
                  Construção Civil / Marmoraria /
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                  alvenaria / madeira / metal / 
            
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                1 Furadeira de Impacto GSB 550 e 1 manual de instruções e chave de troca de mandril, acompanhada de uma maleta de transporte.
                </p>
              </div>
            </div>
          </div>

    
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong>A Furadeira de Impacto Bosch GSB 550 RE tem potente motor de 550W e velocidade eletrônica variável para perfurações em diferentes materiais,
                 além de função reversível para utilização em aplicações de parafusamentos.
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                - Embalagem: Caixa de papelão
                <br />
                - Fonte de Energia: Cabo
                <br />
                - Acabamento e composição da ferramenta: Poliamida, metal e elastômero
                <br />
                - Acabamento do Material do cabo: Borracha e cobre
                <br />
                - Potência da ferramenta: 550W
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
