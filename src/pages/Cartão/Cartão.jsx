import "./Cartão.css";
import Cabecalho from "../../components/Cabecalho";
import { FaHouse } from "react-icons/fa6";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { Link } from "react-router";

export default function Cartão() {
  return (
    <>
      

      <h1 className=" text-3xl mt-22 flex justify-center">Adicione um novo cartão</h1>

      <div className="containerEndereço">
        <div className="grid" >
          <p className="-ml-85 mt-10">Número do cartão</p>
          <input className="-ml-85 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 1234 1234 1234 1234" />
        </div>

        <div className="grid" >
          <p className="-ml-85 mt-10">Nome do titular</p>
          <input className="-ml-85 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 1234 1234 1234 1234" />
        </div>

        <div className="flex gap-10 mt-10">
          <div className="grid">
            <p>Vencimento</p>
            <input className="border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="MM/AA" />
          </div>

          <div className="grid">
            <p>Código de segurança</p>
            <input className="border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 123" />
          </div>
        </div>

        <div className="grid" >
          <p className="-ml-85 mt-10">Documento do titular</p>
          <input className="-ml-85 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="CPF/CNPJ | 999.999.999-99" />
        </div>

        <Link to="/Pagamentos"><button className="-ml-15 mt-10 mb-10 inline-block  bg-blue-600 text-white px-20 py-3 rounded-md hover:bg-blue-700" >
          Continuar
        </button></Link>
      </div>

    </>
  );
}