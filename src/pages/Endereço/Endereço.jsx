import "./Endereço.css";
import Cabecalho from "../../components/Cabecalho";
import { FaHouse } from "react-icons/fa6";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { Link } from "react-router";

export default function Endereço() {
  return (
    <>
      

      <h1 className=" text-3xl mt-22 flex justify-center">Adicione um endereço</h1>

      <div className="containerEndereço">
        <div className="grid" >
          <p className="-ml-85 mt-10">CEP</p>
          <input className="-ml-85 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 0514100" />
        </div>
        <div className="flex gap-10 mt-10">
          <div className="grid">
            <p>Rua/Avenida</p>
            <input className="border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: Avenida Padua,9082" />
          </div>

          <div className="grid">
            <p>Número</p>
            <input className="border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 091212" />
          </div>
        </div>



        <p className="-ml-126 mt-15">Complemento(opcional)</p>
        <input className="-ml-90 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 201" />




        <p className="-ml-80 mt-10">Informações adicionais deste endereço (opcional)</p>
        <input className="-ml-18 border-2 border-gray-500 rounded w-150 h-30" type="text" placeholder="EX: Entre ruas, Cor do edificio, não tem campainha" />

        <div className="" >
          <p className="-ml-83 mt-15">Este é seu trabalho ou sua casa?</p>
        </div>

        <div className='p-20 flex gap-50 -mt-5'>
          <div className="grid ">
          <div className='flex gap-3'>
            <h1 className='-ml-2'>Casa </h1>
            <FaHouse className="mt-1" />
          </div>
            <input
              type="checkbox"
              class="w-5 h-5 accent-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400" />
          </div>


          <div className="grid ">
          <div className='flex gap-3'>
            <h1 className='-ml-2'>Trabalho</h1>
            <BsFillSuitcaseLgFill   className="mt-1" />
          </div>
            <input
              type="checkbox"
              class="ml-4 w-5 h-5 accent-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>



        <p className="-ml-30 ">Dados de contato <br />
          Se houver algum problema no envio, você receberá uma ligação neste número.</p>

        <p className="-ml-130 mt-15">Nome e Sobrenome</p>
        <input className='-ml-17 border-2 border-gray-500 rounded w-150 h-15' type="text" />

        <p className="-ml-131 mt-10">Telefone de contato</p>
        <input className='-ml-17 border-2 border-gray-500 rounded w-150 h-15' type="text" />

        <Link to="/Pagamentos"><button className="-ml-15 mt-10 mb-10 inline-block  bg-blue-600 text-white px-30 py-3 rounded-md hover:bg-blue-700" >
          Salvar
        </button></Link>
      </div>

    </>
  );
}