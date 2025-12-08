import React from "react";
import "./Compras.css";
import Cabecalho from "../../components/Cabecalho";


export default function Compras() {
  const pedidos = [
    {
      id: "PED-001",
      data: "10/11/2025",
      status: "Cancelado",
      total: 459.90,
      produtos: [
        { nome: "Furadeira Bosch 500W", qtd: 1, preco: 299.90 },
        { nome: "Parafusos 100un", qtd: 1, preco: 160.00 },
      ],
    },
    {
      id: "PED-002",
      data: "28/10/2025",
      status: "Entregue",
      total: 189.90,
      produtos: [
        { nome: "Lixadeira Makita 300W", qtd: 1, preco: 189.90 },
      ],
    },
    {
      id: "PED-003",
      data: "15/09/2025",
      status: "Processando",
      total: 749.80,
      produtos: [
        { nome: "Serra Circular DeWalt 1200W", qtd: 1, preco: 549.80 },
        { nome: "Discos de Corte 5un", qtd: 1, preco: 200.00 },
      ],
    }
  ];

  return (

    <>

      <div className="compras-container">
        <h1>Minhas Compras</h1>
        {pedidos.length === 0 ? (
          <p className="sem-compras">Você ainda não fez nenhuma compra.</p>
        ) : (
          <div className="lista-pedidos">
            {pedidos.map((pedido) => (
              <div key={pedido.id} className="pedido-card">
                <div className="pedido-header">
                  <div>
                    <h2>Pedido #{pedido.id}</h2>
                    <p>Data: {pedido.data}</p>
                  </div>
                  <span
                    className={`status ${pedido.status === "Entregue"
                        ? "status-entregue"
                        : pedido.status === "Cancelado"
                          ? "status-cancelado"
                          : "status-processando"
                      }`}
                  >
                    {pedido.status}
                  </span>

                </div>

                <div className="pedido-produtos">
                  {pedido.produtos.map((p, index) => (
                    <div key={index} className="produto-item">
                      <span>{p.nome}</span>
                      <span>
                        {p.qtd}x R$ {p.preco.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pedido-footer">
                  <strong>Total: R$ {pedido.total.toFixed(2)}</strong>
                  <button className="detalhes-btn">Ver detalhes</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}