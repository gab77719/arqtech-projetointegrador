import "./Parcerias.css";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer/Footer";
import Bosch from "../../assets/Bosch1.png";
import CSN from "../../assets/CSN1.png";
import Makita from "../../assets/Makita1.png";
import Dewalt from "../../assets/Dewalt1.png";
import Produto1 from "../../assets/produto1.png";
import Produto2 from "../../assets/produto2.png";
import Produto3 from "../../assets/produto3.png";
import Produto4 from "../../assets/image 46.png";
import Produto5 from "../../assets/image 47.png";
import Produto6 from "../../assets/image 48.png";
import Produto7 from "../../assets/BoschP1.png";
import Produto8 from "../../assets/BoschP2.png";
import Produto9 from "../../assets/BoschP3.png";
import Produto10 from "../../assets/DewaltP1.png";
import Produto11 from "../../assets/chave-de-impacto.png";
import Produto12 from "../../assets/DewaltP3.png";
import { Link } from "react-router";

export default function Parcerias() {
  return (
    <>
   
      {/* Makita */}
      <img src={Makita} alt="Makita" className="mt-40" />

      <div className="produtos_lista z-auto">
        <div className="produto">
          <img src={Produto1} alt="Produto 1" className="produto_imagem" />
          <h4 className="produto_nome">
            Martelete Combinado Bateria 18V <br /> LXTDHR182Z
          </h4>
          <div className="produto_valor">
            <p className="produto_preco">R$ 999,99</p>
            <div className="btn-comprar">
              <Link to="/Comprar2"><button className="btn-comprar1">Comprar</button></Link>
            </div>
          </div>
        </div>
        <div className="produto">
          <img src={Produto2} alt="Produto 2" className="produto_imagem" />
          <h4 className="produto_nome">
            Parafusadeira-Bateria 40V <br /> XGTHP002GA201
          </h4>
          <p className="produto_preco">R$ 499,99</p>
          <div className="btn-comprar">
           <Link to="/Comprar3"><button className="btn-comprar1">Comprar</button></Link> 
          </div>
        </div>

        <div className="produto">
          <img src={Produto3} alt="Produto 3" className="produto_imagem" />
          <h4 className="produto_nome">
            Serra Mármore 12000w MO400B <br /> 127V-Makita
          </h4>
          <p className="produto_preco">R$ 436,00</p>
          <div className="btn-comprar">
            <Link to="/Comprar"><button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>
      </div>

      <hr />

      {/* CSN */}
      <img src={CSN} className="csn" />

      <div className="produtos_lista">
        <div className="produto">
          <img src={Produto4} alt="Produto 4" className="produto_imagem" />
          <h4 className="produto_nome">
          Cimento CP II-32-50kg CSN
          </h4>
          <div className="produto_valor">
            <p className="produto_preco">R$ 40,00</p>
            <div className="btn-comprar">
              <Link to="/ComprarM"> <button className="btn-comprar1">Comprar</button></Link>
            </div>
          </div>
        </div>
        <div className="produto">
          <img src={Produto5} alt="Produto 5" className="produto_imagem" />
          <h4 className="produto_nome">
          Cimento CP III-40-50kg CSN
          </h4>
          <p className="produto_preco">R$ 49,99</p>
          <div className="btn-comprar">
            <Link to="/ComprarM2"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>

        <div className="produto">
          <img src={Produto6} alt="Produto 3" className="produto_imagem" />
          <h4 className="produto_nome">
            Vergalhão CA-50 32,0 mm 12 m - Reto S
          </h4>
          <p className="produto_preco">R$ 39,99</p>
          <div className="btn-comprar">
            <Link to="/ComprarM3"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>
      </div>
      <hr />

      {/* bosch */}
      <img src={Bosch} className="bosch" />
      <div className="produtos_lista">
        <div className="produto">
          <img src={Produto7} alt="Produto 1" className="produto_imagem" />
          <h4 className="produto_nome">
          Furadeira de Impacto GSB-550 <br />
           550W 220V Bosch
          </h4>
          <div className="produto_valor">
            <p className="produto_preco">R$ 359,00</p>
            <div className="btn-comprar">
            <Link to="/ComprarM4"> <button className="btn-comprar1">Comprar</button></Link>
            </div>
          </div>
        </div>
        <div className="produto">
          <img src={Produto8} alt="Produto 2" className="produto_imagem" />
          <h4 className="produto_nome">
          Esmerilhadeira Bosch GWS <br />
          9-125 S 900W eixo M14
          </h4>
          <p className="produto_preco">R$ 500,00</p>
          <div className="btn-comprar">
          <Link to="/ComprarM5"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>

        <div className="produto">
          <img src={Produto9} alt="Produto 3" className="produto_imagem" />
          <h4 className="produto_nome">
            Serra Tico-Tico GST-750 <br />
            220v Bosch
          </h4>
          <p className="produto_preco">R$ 359,0</p>
          <div className="btn-comprar">
          <Link to="/ComprarM6"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>
      </div>
      <hr />

        {/* Dewalt */}
      <img src={Dewalt} className="dewalt" />
      <div className="produtos_lista">
        <div className="produto">
          <img src={Produto10} alt="Produto 1" className="produto_imagem" />
          <h4 className="produto_nome">
          Pinador 18GA 20V MAX XR LI-ON <br />
           DCN680B DeWalt
          </h4>
          <div className="produto_valor">
            <p className="produto_preco">R$ 3000,00</p>
            <div className="btn-comprar">
            <Link to="/ComprarM7"> <button className="btn-comprar1">Comprar</button></Link>
            </div>
          </div>
        </div>
        <div className="produto">
          <img src={Produto11} alt="Produto 2" className="produto_imagem" />
          <h4 className="produto_nome">
          Dewalt Multi Ferramenta Oscilante,<br />
           Ideal para Cortes 
          </h4>
          <p className="produto_preco">R$ 1299,99</p>
          <div className="btn-comprar">
            <Link to="/ComprarM8"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>

        <div className="produto">
          <img src={Produto12} alt="Produto 3" className="produto_imagem" />
          <h4 className="produto_nome">
          Tesoura de Poda 20v Max <br />
          DCPR320B-B3 DeWalt
          </h4>
          <p className="produto_preco">R$ 1222,00</p>
          <div className="btn-comprar">
          <Link to="/ComprarM9"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>
      </div>
    
      <footer>
        <Footer />
      </footer>
    </>
  );
}
