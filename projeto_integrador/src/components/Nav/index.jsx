import "./Nav.css"
import Furadeira from "../../assets/furadeira.png"

export default function Nav() {
    return (
        <section className="nav">
            <nav className="cabecalho__nav">
                <a href="#home" className="cabecalho__link">Categorias</a>
                <a href="#sobre" className="cabecalho__link">Ferramentas</a>
                <a href="#servicos" className="cabecalho__link">Materiais</a>
                <a href="#servicos" className="cabecalho__link">Parcerias</a>
            </nav>
            <img src= {Furadeira} alt="Furadeira" />

        </section>
        
    );
}