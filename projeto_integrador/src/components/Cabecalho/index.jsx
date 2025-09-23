import './Cabecalho.css';
import Logo from '../../public/Logo.png';
import furadeira from '../../assets/furadeira.png';

export default function Cabecalho() {
    return (
        <>
            <header className="cabecalho">
                <img src={Logo} alt="Logo da empresa" className="cabecalho__logo" />
                
                <div className="cabecalho__search">
                    <input type="text" placeholder="Pesquisar..." />
                    <ion-icon name="search" className="cabecalho__search-icon"></ion-icon>
                </div>
                
                <div className="cabecalho__actions">
                    <a href="#conta" className="cabecalho__link">Conta</a>
                    <a href="#cadastro" className="cabecalho__link">Cadastre-se</a>
                    <a href="#carrinho" className="cabecalho__cart">
                        <ion-icon name="cart-outline"></ion-icon>
                    </a>
                </div>
            </header>
            
            <nav className="cabecalho-nav">
                <a href="#categorias" className="cabecalho-nav__link">Categorias</a>
                <a href="#ferramentas" className="cabecalho-nav__link">Ferramentas</a>
                <a href="#materiais" className="cabecalho-nav__link">Materiais</a>
                <a href="#parcerias" className="cabecalho-nav__link">Parcerias</a>
            </nav>

            <img src={furadeira} alt="Logo da empresa" className="cabecalho__logo"></img> 
        </>

    );
}