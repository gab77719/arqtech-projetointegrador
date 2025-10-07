import './materiais.css'
import Logo from '../../public/Logo.png';
import { Link } from 'react-router-dom';
import Ferramenta from '../../assets/ferramentas.png';
export default function Materiais() {   
    return (
     <>
            <header className="cabecalho">
                <img src={Logo} alt="Logo da empresa" className="cabecalho__logo" />
                
                <div className="cabecalho__search">
                    <input type="text" placeholder="Pesquisar..." />
                    <ion-icon name="search" className="cabecalho__search-icon"></ion-icon>
                </div>
                
                <div className="cabecalho__actions">
                    <Link to="/s">Conta</Link>
                    <Link to="/Cadastrar">Cadastrar</Link>
                    <Link to="/">
                        <ion-icon name="cart-outline"></ion-icon>
                  </Link>
                </div>
            </header>
            
            <nav className="cabecalho-nav">
                <a href="#categorias">Categorias</a>
                <a href="#ferramentas" >Ferramentas</a>
                <Link to="/Materias">Materiais</Link>
                <a href="#parcerias">Parcerias</a>
            </nav>

            <img src={Ferramenta} alt="banner" className="cabecalho_banner"></img> 
        </>

    )
}