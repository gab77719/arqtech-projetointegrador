import "./Conta.css";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer/Footer";
import Logo from "../../public/Logo.png";
import { Link } from "react-router-dom";

export default function Conta() {
  return (
    <>
    
      <header>
        <Cabecalho />
      </header>
      <div className="container-conta">
      <section >
        <div className="p-20 flex">
          <div className="bg-white rounded-full w-50 h-50 ">.</div>

        
        </div>

        <p className="ml-20 text-3xl">Informações da conta</p>

        <input
          type="text"
          placeholder="E-mail cadastrado"
          className="block border border-white rounded mt-10 ml-20 w-100 b-white h-10"
        />

        <input
          type="text"
          placeholder="Senha cadastrada"
          className="block border border-white rounded mt-20 ml-20 w-100 h-10"
        />

        <input
          type="text"
          placeholder="Cartão cadastrado"
          className="block border border-white rounded mt-20 ml-20 w-100 h-10"
        />
  <div className="flex">
        <input
          type="text"
          placeholder="Localização"
          className="border border-white rounded mt-20 ml-20 w-100 h-10"
        />
          <div>
            <Link to="/">
            <button className="btn-mudar mt-20 ml-250">
              Clique aqui para alterar <br />
              os seus dados
            </button>
            </Link>
          </div>
</div>
      </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
