import "./Comprar.css"
import { Link } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Produto3 from "../../assets/produto3.png";

export default function Comprar(){
    return(
        <>
        <header>
            <Cabecalho/>
        </header>
            <div className="flex">
        <img src={Produto3} alt="Makita" className="makita w-150 h-150 ml-20" />

        <h1 className="text-3x1 mt-100">Serra de marmore 110MM 4
            3/8mm 127V Makita-37122
        </h1>
        </div>
        </>
    )
}