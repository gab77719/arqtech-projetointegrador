import Cabecalho from "../../components/Cabecalho";
import QR from "../../assets/QR.png";
import "./Pix.css";

export default function Pix() {
    return(
        <>
        <p className="mt-30 text-center text-2xl ">Pague via Pix para concluir sua compra</p>
       <div className="flex items-center justify-center h-screen">
  <div className="flex items-center justify-center border border-white h-140 w-140 rounded-lg shadow-lg">
        <div className="grid">
            <p className="-ml-10 -mt-10 text-center text-1xl ">Escaneie o código QR para pagar</p>
    <img src={QR} className="h-70 " />
    <button className="flex -ml-8 mt-10 mb-10 inline-block border-2 border-white-500  bg-blue-600 text-white px-30 py-3 rounded-md hover:bg-blue-700" >
         Pix Copia e Cola
        </button>
        
    </div>
  </div>
</div>



        </>

    )
}