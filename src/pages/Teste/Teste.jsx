import React, { useState } from "react";

export default function Carrinho() {
  const [tudoMarcado, setTudoMarcado] = useState(false);

  const checkboxes = ["Opção 1", "Opção 2", "Opção 3"];

  const alternarSelecao = () => {
    setTudoMarcado(!tudoMarcado);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Selecione as opções:</h3>

      {checkboxes.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={tudoMarcado} readOnly /> {item}
        </div>
      ))}

      <br />
      <button onClick={alternarSelecao}>
        {tudoMarcado ? "Desmarcar todas" : "Selecionar todas"}
      </button>
    </div>
  );
}