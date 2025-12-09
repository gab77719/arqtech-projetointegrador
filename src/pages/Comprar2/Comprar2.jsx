import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto1 from "../../assets/produto1.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 1,
    nome: "Martelete Combinado bateria 18V LXT DHR182Z",
    preco: 999.00,
    imagem: Produto1,
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
                src={Produto1}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: DHR202Z</p>

              <div className="mb-8">
                <span className="text-red-600 font-bold text-4xl">Makita</span>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>

              <div className="flex gap-4">
                {/* Botão comprar */}
                <Link to="/Endereço">
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
                Construção Civil / Diversos / Metal Mecânica /
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                  Concreto / Diversos / Madeira / Mármore e Granito / Metal / Plástico /
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                Punho Lateral, limitador de profundidade.
                Ferramentas não acompanha bateria, carregador e maleta.
                </p>
              </div>
            </div>
          </div>

          {/* --- Descrição técnica --- */}
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong> Bateria 18V LXT /
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                <br />
                Rotações por minuto: 0 - 1.000
                <br />
                Impactos por minuto: 0 - 4.000
                <br />
                Capacidades
                <br />
                - Concreto: 20mm
                <br />
                - Aço: 13mm
                <br />
                - Madeira: 26mm
                <br />
                Força: 1,9 Joules
                <br />
                Peso: 2,56Kg (Peso sem Bateria)
                <br />
              </p>

              <p>
                <strong>ITENS QUE ACOMPANHAM:</strong> Punho Lateral, limitador de profundidade.
                Ferramentas não acompanha bateria, carregador e maleta.
              </p>
            </div>
          </div>
        </div>
      </div>


    

    <Footer />
    </>
  );
  
}
