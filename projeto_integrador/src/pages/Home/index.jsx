import "./Home.css";
import Cabecalho from "../../components/Cabecalho";
import Bolinha from "../../components/Bolinhas";
import Produtos from "../../components/Produtos";
import Sobre from "../../components/Sobre";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <section>
        <img src={furadeira} alt="banner" className="cabecalho_banner"></img>
      </section>
      <div className="container">
        <div className="item">
          <div className="bolinha">
            <IoCartOutline />
          </div>
          <h3>Compra online</h3>
        </div>

        <div className="item">
          <div className="bolinha">
            <SlWallet />
          </div>
          <h3>Parcelamento em até 10x</h3>
        </div>

        <div className="item">
          <div className="bolinha">
            <CiDeliveryTruck />
          </div>
          <h3>Entrega rapida</h3>
        </div>

        <div className="item">
          <div className="bolinha">
            <CiLocationOn />
          </div>
          <h3>Combine a troca e pagamento</h3>
        </div>
      </div>

      <section className="produtos">
      <h1 className="Destaque">Linha Elétrica - Mais vendidas</h1>
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
              <button className="btn-comprar1">Comprar</button>
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
            <button className="btn-comprar1">Comprar</button>
          </div>
        </div>

        <div className="produto">
          <img src={Produto3} alt="Produto 3" className="produto_imagem" />
          <h4 className="produto_nome">
            Serra Mármore 12000w MO400B <br /> 127V-Makita
          </h4>
          <p className="produto_preco">R$ 436,00</p>
          <div className="btn-comprar">
            <button className="btn-comprar1">Comprar</button>
          </div>
        </div>
        </div>
        <div className="btn-mais">
          <Link to='/Parcerias'><button className="btn-comprar1">Mais</button></Link>
        </div>
    </section>

     <section className='sobre-section'>
            <h1 className='titulo'> Sobre Nós</h1>
            <hr />
            <div className='sobre-container'>
            <p className='sobre'>A Arqtech é uma plataforma online especializada na <br/>
                 venda de ferramentas manuais, elétricas e acessórios <br/>
                 para uso doméstico ou profissional. Ele permite que <br/>
                 clientes escolham, comparem e comprem produtos de <br/>
                 forma rápida e segura, com entrega em domicílio. <br/><br/>
                 
                 O objetivo é oferecer praticidade, variedade e bom <br/>
                 custo-benefício para quem precisa de ferramentas com<br/>
                  agilidade e confiança.
                  <br /><br />

                  Ferramentas de ponta com preços que cabem no seu <br/>
                  bolso. Algo que você só encontra aqui, na ARQTECH <br/>
                  engenharia. 
                 </p>
                 <img src={Logo} alt="" />
                 </div>

                 <img src={Dps} alt="" className='imagem' />
        </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
