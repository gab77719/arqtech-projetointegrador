import "./Produtos.css";
import Produto1 from "../../assets/produto1.png";
import Produto2 from "../../assets/produto2.png";
import Produto3 from "../../assets/produto3.png";
import { Link } from "react-router";

export default function Produtos() {
  return (
    <section className="produtos">
      <h1 className="Destaque text-3xl">Linha Elétrica - Mais vendidas</h1>
      <hr />
      <div className="produtos_lista">
        <div className="produto">
          <img src={Produto1} alt="Produto 1" className="produto_imagem" />
          <h4 className="produto_nome">
            Martelete Combinado Bateria 18V <br /> LXTDHR182Z
          </h4>
          <div className="produto_valor">
            <p className="produto_preco">R$ 999,99</p>
            <div className="btn-comprar">
             <Link to="/Comprar2"> <button className="btn-comprar1">Comprar</button></Link>
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
          <Link to="/Comprar3"> <button className="btn-comprar1">Comprar</button></Link>
          </div>
        </div>

        <div className="produto">
          <img src={Produto3} alt="Produto 3" className="produto_imagem" />
          <h4 className="produto_nome">
            Serra Mármore 12000w MO400B <br /> 127V-Makita
          </h4>
          <p className="produto_preco">R$ 436,00</p>
          <div className="btn-comprar">
            <Link to="/Comprar"> <button className="btn-comprar3">Comprar</button></Link>
          </div>
        </div>
        </div>
        <div className="btn-mais">
          <Link to='/Parcerias'><button className="btn-mais1">Mais</button></Link>
        </div>
     
    </section>
  );
}
