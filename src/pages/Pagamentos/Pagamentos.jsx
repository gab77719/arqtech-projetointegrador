import "./Pagamentos.css";
import Logo from "../../public/Logo.png";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer/Footer";

export default function Pagamentos() {
  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <div className="Pagamentos">
        <div className="container-pagamento">
          <div className="metodo-pagamento">
            <div className="icone-pagamento">
              <i className="icon-pix">PIX</i>
            </div>
            <h3>PIX</h3>
            <p>Pagamento instantâneo e seguro</p>
            <button type="button">Comprar com PIX</button>
          </div>

          <div className="metodo-pagamento">
            <div className="icone-pagamento">
              <i className="icon-card">💳</i>
            </div>
            <h3>Cartão de Crédito</h3>
            <p>Visa, Mastercard, Elo e mais</p>
            <button type="button">Comprar com Cartão</button>
          </div>

          <div className="metodo-pagamento">
            <div className="icone-pagamento">
              <i className="icon-boleto">📄</i>
            </div>
            <h3>Boleto</h3>
            <p>Pagamento em até 3 dias úteis</p>
            <button type="button">Comprar com Boleto</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
