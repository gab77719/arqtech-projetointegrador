import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";
import productPlaceholder from "../../assets/product-placeholder.jpg";

export default function Comprar() {
  const { adicionarAoCarrinho } = useCarrinho();
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await fetch(`http://localhost:8000/produtos/${id}`);
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      }
    }

    fetchProduto();
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  const imagemProduto = produto.imagem || productPlaceholder;


  return (
    <>
      <div className="text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
            <img src={imagemProduto} alt={produto.nome} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{produto.nome}</h1>
              <p className="text-lg">{produto.descricao}</p>
              <p className="text-2xl font-semibold">R$ {produto.preco.toFixed(2)}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4"
                onClick={() => adicionarAoCarrinho(produto)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}