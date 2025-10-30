import './materiais.css'
import { Link } from 'react-router';
import Ferramenta from '../../assets/ferramentas M.png';
import Cabecalho from '../../components/Cabecalho';
import Footer from '../../components/Footer/Footer'
import Produto1 from '../../assets/image 47.png';
import Produto2 from '../../assets/tijolo.png';
import Produto3 from '../../assets/gesso.png';
import Produto4 from '../../assets/enxada.png';
import Produto5 from '../../assets/call.png';
import Produto6 from '../../assets/votoran.png';
import Logo from '../../public/Logo.png';
import makita1 from "../../assets/makita1.png";
import CSN1 from "../../assets/CSN1.png";
import bosch1 from "../../assets/bosch1.png";
import DeWalt1 from "../../assets/DeWalt1.png";

export default function Materiais() {   
    return (
     <>           
        <header>
            <Cabecalho />
        </header>
            <div className='banner'>
            <img src={Ferramenta} alt="banner" className="cabecalho_banner"></img>
            </div> 
            <section>
                <p className='materiais'>Materiais</p>
            </section>

              <section className="produtos">
                    <div className="produtos_lista">
                      <div className="produto">
                        <img src={Produto1} alt="Produto 1" className="produto_imagem" />
                        <h4 className="produto_nome">
                          Cimento CP II-32-50kg CSN
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
                          Tijolo bahiano-8 furos(11,5x19x19)
                        </h4>
                        <p className="produto_preco">R$ 499,99</p>
                        <div className="btn-comprar">
                          <button className="btn-comprar1">Comprar</button>
                        </div>
                      </div>
              
                      <div className="produto">
                        <img src={Produto3} alt="Produto 3" className="produto_imagem" />
                        <h4 className="produto_nome">
                         Gesso 1kg Fortaleza
                        </h4>
                        <p className="produto_preco">R$ 436,00</p>
                        <div className="btn-comprar">
                          <button className="btn-comprar1">Comprar</button>
                        </div>
                      </div>
                      
                      </div>
                  </section>
                
                   <section className="produtos">
                    <div className="produtos_lista">
                      <div className="produto">
                        <img src={Produto4} alt="Produto 1" className="produto_imagem" />
                        <h4 className="produto_nome">
                          Cimento CP II-32-50kg CSN
                        </h4>
                        <div className="produto_valor">
                          <p className="produto_preco">R$ 999,99</p>
                          <div className="btn-comprar">
                            <button className="btn-comprar1">Comprar</button>
                          </div>
                        </div>
                      </div>
                      <div className="produto">
                        <img src={Produto5} alt="Produto 2" className="produto_imagem" />
                        <h4 className="produto_nome">
                          Tijolo bahiano-8 furos(11,5x19x19)
                        </h4>
                        <p className="produto_preco">R$ 499,99</p>
                        <div className="btn-comprar">
                          <button className="btn-comprar1">Comprar</button>
                        </div>
                      </div>
              
                      <div className="produto">
                        <img src={Produto6} alt="Produto 3" className="produto_imagem" />
                        <h4 className="produto_nome">
                         Gesso 1kg Fortaleza
                        </h4>
                        <p className="produto_preco">R$ 436,00</p>
                        <div className="btn-comprar">
                          <button className="btn-comprar1">Comprar</button>
                        </div>
                      </div>
                      
                      </div>
                  </section>

                  <footer >
                       <Footer/>
                     </footer>
        
        </>

    )
}