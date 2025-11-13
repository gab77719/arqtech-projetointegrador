import { useState } from "react";
import { useCarrinho } from "../../contexts/CarrinhoContext";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import "./Carrinho.css";
import Cabecalho from "../../components/Cabecalho";

export default function Carrinho() {
  const { carrinho, removerDoCarrinho } = useCarrinho();
  const [selecionarTodos, setSelecionarTodos] = useState(false);
  const [selecionados, setSelecionados] = useState({});

  const handleSelecionarTodos = () => {
    const novoValor = !selecionarTodos;
    setSelecionarTodos(novoValor);

    const novasSelecoes = {};
    carrinho.forEach((p) => {
      novasSelecoes[p.id] = novoValor;
    });
    setSelecionados(novasSelecoes);
  };

  const handleSelecionarProduto = (id) => {
    const novasSelecoes = {
      ...selecionados,
      [id]: !selecionados[id],
    };
    setSelecionados(novasSelecoes);
    const todos =
      carrinho.length > 0 && carrinho.every((p) => novasSelecoes[p.id]);
    setSelecionarTodos(todos);
  };

  const handleExcluir = (id) => {
    removerDoCarrinho(id);
    const novasSelecoes = { ...selecionados };
    delete novasSelecoes[id];
    setSelecionados(novasSelecoes);
  };

  const handleExcluirSelecionados = () => {
    carrinho.forEach((p) => {
      if (selecionados[p.id]) removerDoCarrinho(p.id);
    });
    setSelecionados({});
    setSelecionarTodos(false);
  };

  const total = carrinho.reduce((acc, p) => {
    if (selecionados[p.id]) {
      return acc + p.preco;
    }
    return acc;
  }, 0);


  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <div className="p-10 mt-20">
        <h1 className="text-3xl font-bold mb-6">Carrinho de compras</h1>

        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            {/* Localização */}
            <div className="flex items-center gap-2 mb-6">
              <CiLocationOn size={22} />
              <span>Informe seu CEP</span>
            </div>

            {/* Selecionar todos */}
            <div className="flex items-center gap-2 mb-4 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={selecionarTodos}
                onChange={handleSelecionarTodos}
                className="w-5 h-5 accent-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400 cursor-pointer"
              />
              <span
                onClick={handleSelecionarTodos}
                className="font-medium text-white"
              >
                Selecionar todos os produtos
              </span>
            </div>
            <hr className="mb-4" />

            {/* Lista de produtos */}
            {carrinho.map((produto) => (
              <div
                key={produto.id}
                className="flex items-center gap-6 border-b border-gray-300 py-4"
              >
                <input
                  type="checkbox"
                  checked={!!selecionados[produto.id]}
                  onChange={() => handleSelecionarProduto(produto.id)}
                  className="w-5 h-5 accent-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                />
                <img src={produto.imagem} alt={produto.nome} className="w-32" />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{produto.nome}</p>
                  <p className="text-gray-500">R$ {produto.preco.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleExcluir(produto.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Excluir
                </button>
              </div>
            ))}

            {/* Botões e total */}
            <div className="mt-8 flex flex-col gap-6">
              <button
                onClick={handleExcluirSelecionados}
                className="self-start text-red-600 hover:text-red-800 font-medium"
              >
                Excluir selecionados
              </button>

              <h2 className="text-xl font-bold">
                Total: R$ {total.toFixed(2)}
              </h2>

              <Link
                to="/Pagamentos"
                className="inline-block mt-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-max mx-auto"
              >
                Continuar compra
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
