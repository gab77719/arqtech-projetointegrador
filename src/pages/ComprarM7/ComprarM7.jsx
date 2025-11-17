import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto10 from "../../assets/DewaltP1.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 10,
    nome: "Pinador Brushless Dewalt 20v MAX",
    preco: 3000,
    imagem: Produto10,
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
                src={Produto10}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: DCN680B</p>

              <div className="mb-8">
                <span className="text-yellow-500 font-bold text-4xl">DeWalt</span>
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
                marcenaria / carpintaria / montagem de móveis
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                    fixação de molduras / fixação de acabamentos / montagem de móveis 
            
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                1 Pinador Brushless Dewalt 20v MAX , 1 manual de instruções, 1 presilha para cinto, 1 Liberador de bloqueios
                </p>
              </div>
            </div>
          </div>

    
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong>O Pinador Brushless Dewalt 20v MAX Sem Baterias DCN680B é uma ferramenta projetada para atender às demandas de profissionais que buscam eficiência e praticidade em suas aplicações de fixação. 
                Com um motor sem escovas, este pinador oferece um desempenho superior e uma vida útil prolongada, eliminando a necessidade de manutenção constante. Ideal para uso em obras, marcenarias e reformas, o DCN680B é capaz de realizar uma variedade de tarefas, desde a fixação de molduras até o trabalho com painéis de madeira, proporcionando precisão e agilidade. 
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                - Tecnologia: Motor Brushless - Sem escovas de carvão. Maior durabilidade.
                <br />
                - Bateria e carregador: Não acompanha. Itens vendidos separadamente.
                <br />
                - Voltagem: 20v MAX
                <br />
                - Tipo de prego: 18 Ga brad 5/8’’ ~ 2-1/8’’ / 16 mm ~ 54 mm
                <br />
                - Capacidade: 110 Pregos
                <br />
                - Embalagem: Caixa de papelão
          
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
  
}
