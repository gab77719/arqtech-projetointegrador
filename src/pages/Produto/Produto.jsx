import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import Footer from "../../components/Footer/Footer";
import productPlaceholder from "../../assets/product-placeholder.jpg";
import { Link } from "react-router-dom";

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

  const imagemProduto = produto.imagem_url || productPlaceholder;


  return (
    <>
      <div className="text-white p-10 mt-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2  mb-8">
            <div>
            <img src={imagemProduto} className="h-110 w-120"/>
            </div>
            <div className="border border-gray-700 rounded-lg p-8">
              <h1 className="text-3xl font-bold">{produto.nome}</h1>
              <img src={produto.logo} alt="" />
                <p className="text-2xl font-semibold mt-20">R$ {produto.preco.toFixed(2)}</p>
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
                <p className="text-lg mt-30 border border-gray-700 rounded-lg p-8 w-300">{produto.descricao}</p>
              
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}