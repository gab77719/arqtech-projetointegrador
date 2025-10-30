import "./Conta.css";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer/Footer";
import Logo from "../../public/Logo.png";
import { Link } from "react-router";

export default function Conta() {
  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <div className="container-conta">
        <section>
          <div className="p-20 flex">
            <div className="bg-white rounded-full w-50 h-50 ">.</div>
          </div>

          <p className="ml-20 text-3xl">Informações da conta</p>
          <div className="inputsC">
            <input
              type="text"
              placeholder="E-mail cadastrado"
              className="Email"
            />

            <input
              type="password"
              placeholder="Senha cadastrada"
              className="Email"
            />

            <input
              type="password"
              placeholder="Cartão cadastrado"
              className="Email"
            />
            <div className="flex">
              <input
                type="text"
                placeholder="Localização"
                className="Email"
              />
            </div>
            <Link to="/">
              <button className="btn-mudar mt-20 ml-300">
                Clique aqui para alterar <br />
                os seus dados
              </button>
            </Link>
          </div>
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
