import './Cabecalho.css';
import Logo from '../../public/Logo.png';

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <img src={Logo} alt="Logo da empresa" className="cabecalho__logo" />
            <input type="text" placeholder='Pesquisar...'/>
            <nav className="cabecalho__nav">
                <a href="#home" className="cabecalho__link">Conta</a>
                <a href="#sobre" className="cabecalho__link">Cadastre-se</a>
                <a href="#servicos" className="cabecalho__link">🛒</a>
            </nav>
        </header>
    );
}