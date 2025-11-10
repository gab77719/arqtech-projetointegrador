import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto2 from "../../assets/produto2.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 1,
    nome: "Parafusadeira / Furadeira de Impacto Bateria 12V CXT",
    preco: 499,
    imagem: Produto2,
  };

  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <div className="min-h-screen text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          {/* --- Seção principal --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Imagem do produto */}
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img
                src={Produto2}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: HP333DWYX3</p>

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
                Agrícola / Construção Civil / Diversos / Marcenaria / Metal Mecânica /
                  <br />
                  <strong>Aplicações:</strong>
                  <br />
                  Alumínio / Concreto / Diversos / Inox / Madeira / Mármore e Granito / Metal / Plástico /
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Itens que acompanham:
                </h2>
                <p className="text-gray-300 leading-relaxed">
                1 bateria 12V 1,5 Ah e carregador simples.
                </p>
              </div>
            </div>
          </div>

          {/* --- Descrição técnica --- */}
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>DESCRIÇÃO:</strong>Projetada com a tecnologia CXT.20 níveis de torque.Seletor de funções. 2 velocidades mecânicas. Velocidade variável.
                Freio instantâneo Rotação reversível. Mandril de aperto rápido. Iluminação de trabalho.
              </p>

              <p>
                <strong>ESPECIFICAÇÕES TÉCNICAS:</strong>
                <br />
                Capacidades
                <br />
                - Aço: 10mm
                <br />
                - Madeira: 21mm
                <br />
                - Alvenaria: 8mm
                <br />
                Rotações por minuto
                <br />
                - Alta: 0 - 1.700
                <br />
                - Baixa: 0 - 450
                <br />
                Impactos por minuto
                <br />
                - Alta: 0 - 25.500
                <br />
                - Baixa: 0 - 6.750
                <br />
                Torque
                <br />
                - Junta rígida: 30 N.m
                <br />
                - Junta flexível: 14 N.m
                <br />
                Dimensões (C x L x A): 193 x 66 x 212mm
                <br />
                Peso: 1,1kg
                <br />
                Bateria: 12V
              </p>

              <p>
                <strong>ITENS QUE ACOMPANHAM:</strong> 1 bateria 12V 1,5 Ah e carregador simples.
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
  
}
