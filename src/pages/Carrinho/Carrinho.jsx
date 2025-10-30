import "./Carrinho.css";
import Cabecalho from "../../components/Cabecalho";
import { Link } from "react-router-dom";
import Logo from "../../public/Logo.png";
import { CiLocationOn } from "react-icons/ci";
import Produto1 from "../../assets/produto1.png";
import Produto2 from "../../assets/produto2.png";
import Produto3 from "../../assets/produto3.png";

export default function Carrinho() {
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

    <div className="flex p-2">
      <div className="bg-gray-600 w-6 rounded ">
      </div>
      <p>Todos os produtos </p>
      </div>

      <div className="p-4 flex gap-8">
      <div className="bg-gray-600 w-10 h-10 mt-18 rounded ">
      </div>
        <img src={Produto1} alt="produto1" className="ml-6" />
        <p>Martelete Combinado <br />
        Bateria 18V LXT<br />        
        DHR182Z</p>
      </div>
    </>
  );
}
