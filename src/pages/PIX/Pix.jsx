import Cabecalho from "../../components/Cabecalho";
import QR from "../../assets/QR.png";
import "./Pix.css";

export default function Pix() {
    return(
        <>
        <Cabecalho />
        <p className="mt-30 text-center text-2xl ">Pix</p>
       <div className="flex items-center justify-center h-screen">
  <div className="flex items-center justify-center border border-white h-140 w-140 rounded-lg shadow-lg">
        <div className="grid">
    <img src={QR} className="h-50" />

    <button className="Btn-voltar">Voltar</button>
    </div>
  </div>
</div>



        </>

    )
}