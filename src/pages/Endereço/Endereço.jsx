import "./Endereço.css";
import Cabecalho from "../../components/Cabecalho";

export default function Endereço() {
  return (
   <>
   <Cabecalho />

   <h1 className="text-3xl mt-22 flex justify-center">Adicione um endereço</h1>
   
   <div className="containerEndereço">
        <div className="grid" >
        <p className="-ml-85">CEP</p>
        <input className="-ml-85 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 0514100"  />
        </div>
    <div className="flex gap-10 mt-10">
     <div className="grid">
        <p>Rua/Avenida</p>
        <input className="border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: Avenida Padua,9082"  />
        </div>

       <div className="grid">
       <p>Número</p> 
        <input className="border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 091212"  /> 
        </div>
    </div>
       

       
        <p className="-ml-126 mt-15">Complemento(opcional)</p>
        <input className="-ml-90 border-2 border-gray-500 rounded w-80 h-11" type="text" placeholder="EX: 201"  /> 
       

       
       
        <p className="-ml-80 mt-10">Informações adicionais deste endereço (opcional)</p>
        <input className="-ml-18 border-2 border-gray-500 rounded w-150 h-30" type="text" placeholder="EX: Entre ruas, Cor do edificio, não tem campainha"  /> 
      
       <div className="grid" >
       <p className="-ml-76 mt-15"> Este é seu trabalho ou sua casa?</p>
        
        <input className="-ml-100" type="checkbox" /> Casa
        <input className="" type="checkbox" /> Trabalho
        </div>

        <p className="-ml-25 mt-15">Dados de contato <br />
        Se houver algum problema no envio, você receberá uma ligação neste número.</p>

        <p className="-ml-130 mt-15">Nome e Sobrenome</p>
        <input className='-ml-17 border-2 border-gray-500 rounded w-150 h-15' type="text" />

        <p className="-ml-131 mt-10">Telefone de contato</p>
        <input className='-ml-17 border-2 border-gray-500 rounded w-150 h-15' type="text" />
   </div>
   <button className="btnCont">Continuar</button>
   </>
  );
}