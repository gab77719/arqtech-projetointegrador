import { Link } from "react-router";
import Cabecalho from "../../components/Cabecalho";
import Produto7 from "../../assets/sacodeareia.png";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";


export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = {
    id: 13,
    nome: "Saco de areia 20kg",
    preco: 10.99,
    imagem: Produto7,
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
                src={Produto7}
                alt={produto.nome}
                className="w-full h-auto max-w-md object-contain"
              />
            </div>

            {/* Informações principais */}
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-gray-400 mb-6">Código: 16697</p>

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
                 segurança / treinamento físico / projetos criativos 
                </p>
              </div>
            </div>
          </div>

          {/* --- Descrição técnica --- */}
          <div className="border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Descrição:</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
               A areia é um agregado granular essencial, geralmente composto por dióxido de silício, usado na fabricação de concreto e argamassa para diversas aplicações. 
            </p>
    
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
  
}
