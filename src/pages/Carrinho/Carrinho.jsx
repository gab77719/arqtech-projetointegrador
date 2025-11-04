import "./Carrinho.css";
import Cabecalho from "../../components/Cabecalho";
import { Link } from "react-router";
import Logo from "../../public/Logo.png";
import { CiLocationOn } from "react-icons/ci";
import Produto1 from "../../assets/produto1.png";
import Produto2 from "../../assets/produto2.png";
import Produto3 from "../../assets/produto3.png";
import React, { useState } from "react";


export default function Carrinho() {
 const [tudoMarcado, setTudoMarcado] = useState(false);
 const checkboxes1 = [""];
 const checkboxes2 = [""];
 const checkboxes3 = [""];
 const alternarSelecao = () => {
    setTudoMarcado(!tudoMarcado);
  };
  return (
    <>
      <header className="cabecalho">
        <Link to="/">
          <img src={Logo} alt="Logo da empresa" className="cabecalho__logo" />
        </Link>

        <div className="cabecalho__search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="cabecalho__actions">
          <Link to="/Conta">Conta</Link>
          <Link to="/Cadastrar">Cadastrar</Link>
          <Link to="/Carrinho">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </div>
      </header>

      <h1 className="font-bold text-2xl	 p-2"> Carrinho de compras</h1>

      <div className="flex p-2">
        <CiLocationOn />
        <h3>informe seu CEP</h3>
      </div>

      <div className="p-7 flex items-center gap-2 cursor-pointer select-none">
        <button onClick={alternarSelecao} className="w-10 h-10 accent-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400">
        {tudoMarcado ? "Desmarcar todas" : "Selecionar todas"}
      </button>
       
       
        
      </div>
      <hr />
      <div className="flex mt-20- p-10 text-2xl font-ExtraBold">
        <p>Produtos Makita</p>
      </div>

      <div className="p-10 flex gap-10">
        <div className="p-4 flex items-center cursor-pointer select-none">
          {checkboxes1.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={tudoMarcado} readOnly /> {item}
        </div>
      ))}
        </div>

        <img src={Produto1} alt="produto1" className="ml-6" />
        <div className="">
          <p>
            Martelete Combinado <br />
            Bateria 18V LXT
            <br />
            DHR182Z
          </p>
          <h1 className="text-xl text-red-500 mt-10">Excluir</h1>
        </div>
      </div>
      <hr />

      <div className="p-10 flex gap-10">
        <div className="p-4 flex items-center cursor-pointer select-none">
          {checkboxes2.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={tudoMarcado} readOnly /> {item}
        </div>
      ))}
        </div>
        <img src={Produto2} alt="produto2" className="ml-6" />
        <div className="">
          <p>
            Parafusadeira / Furadeira de Impacto
            <br />
            Bateria 40V XGT
            <br />
            HP002GA201
          </p>
          <h1 className="text-xl text-red-500 mt-10">Excluir</h1>
        </div>
      </div>
      <hr />

      <div className="p-10 flex gap-10">
        <div className="p-4 flex items-center cursor-pointer select-none">
          {checkboxes3.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={tudoMarcado} readOnly /> {item}
        </div>
      ))}
        </div>
        <img src={Produto3} alt="produto3" className="ml-6 w-58 " />
        <div className="">
          <p>
            Serra Mármore
            <br />
            12000w 110mm MO400B
            <br />
            127V-Makita
          </p>
          <h1 className="text-xl text-red-500 mt-10">Excluir</h1>
        </div>
      </div>
      <hr />

      <div className="p-30 flex gap-350 -mt-15">
        <h1 className="textlight-3xl"> Produtos (3)</h1>
        <h1 className="textlight-3xl "> R$ 1934,00</h1>
      </div>

      <div className="p-30 flex gap-357 -mt-60">
        <h1 className="textlight-3xl"> Frete (3)</h1>
        <h1 className="textlight-3xl "> R$ 15,00</h1>
      </div>

      <div className="p-30 flex gap-351 -mt-40">
        <h1 className="font-medium text-2xl"> Total:</h1>
        <h1 className="font-medium text-2xl "> R$ 1949,00</h1>
      </div>

      <div class="flex justify-center -mt-35 ">
        <a
          href="../arqtech-projetointegrador/Pagamentos"
          class=" text-2xl px-50 py-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md shadow-sm transition-colors duration-200"
        >
          Continuar a compra
        </a>
      </div>
    </>
  );
}
