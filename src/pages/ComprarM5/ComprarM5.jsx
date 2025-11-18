import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto8 from "../../assets/BoschP2.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 8,
    nome: "Esmerilhadeira Bosch GWS 9-125 S 900W eixo M14",
    preco: 500,
    imagem: Produto8,
  };

  return (
    <>
     

      <div className="min-h-screen text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Produto8}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: 84672</p>

              <div className="mb-8">
                <span className="text-blue-500 font-bold text-4xl">Bosch</span>
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
                  Construção Civil / Marcenaria / Metalurgia / Serralheria
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                  metal / ferro / aço / aço inox / alumínio / madeira
                 
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                1 Esmerilhadeira GWS 9-125 S, 1 Chave de aperto, 1 porca de apoio, 1 porca de aperto, 1 Capa protetora, 1 punho auxiliar e 1 manual
                </p>
              </div>
            </div>
          </div>

    
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong>A esmerilhadeira angular Bosch GWS 9-125 S possui um motor slim de 900 Watts de potência e é a solução ideal para realização de cortes e desbastes em qualquer tipo de materiais metálicos, como ferro e aço.
                 A ferramenta conta com capa de proteção com sistema de fixação por meio de parafuso, que garante que a capa não se desloque em caso de rompimento do disco, oferecendo mais segurança ao operador da ferramenta. 
                 Seu interruptor de acionamento na lateral da esmerilhadeira traz praticidade mesmo para trabalhos mais longos..
                 
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
  
}
