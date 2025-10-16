import "./Cabecalho.css";
import Logo from "../../public/Logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Cabecalho() {
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

      <nav className="cabecalho-nav">
        <Link to="/">Categorias</Link>
        <Link to="/">Ferramentas</Link>
        <Link to="/Materiais">Materiais</Link>
        <Link to="/Parcerias">Parcerias</Link>
      </nav>
    </>
  );
}
