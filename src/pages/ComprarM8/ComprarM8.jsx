import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto11 from "../../assets/chave-de-impacto.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 11,
    nome: "Multi Ferramenta Oscilante Dewalt 20v MAX",
    preco: 2310,
    imagem: Produto11,
  };

  return (
    <>
      

      <div className="min-h-screen text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Produto11}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: DCF961B-B3</p>

              <div className="mb-8">
                <span className="text-yellow-500 font-bold text-4xl">DeWALT</span>
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
                    construção civil / marcenaria / carpintaria / reformas residenciais
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                    manutenção automotiva / montagem industrial / estruturas metálicas  
            
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                 1 chave de impacto, duas baterias (com diferentes capacidades de mAh, como 2.0Ah ou 4.0Ah), 1 carregador, 1 bolsa de transporte ou maleta.  
                </p>
              </div>
            </div>
          </div>

    
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong>A Multi Ferramenta Oscilante Dewalt 20v MAX DCS356B é uma solução versátil e robusta para profissionais e entusiastas do DIY que buscam eficiência e precisão em suas tarefas. 
                Projetada para proporcionar um desempenho excepcional, esta ferramenta é ideal para uma variedade de aplicações, incluindo cortes, lixas e raspagens em materiais como madeira, drywall e metal.
                O sistema de troca de acessórios sem chave permite uma troca rápida e fácil, aumentando a produtividade e a agilidade durante o trabalho.
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                - Tecnologia: Motor Brushless - Sem escovas de carvão. Maior durabilidade.
                <br />
                - Bateria e carregador: Não acompanha. Itens vendidos separadamente.
                <br />
                - Voltagem: 20v MAX
                <br />
                - Torque máximo: 1.627 Nm
                <br />
                - Torque de reversão: 2.119 Nm
                <br />
                - Velocidades: 3 + Precision wrench™
                <br />
                - Rotações: 1.200 rpm
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
