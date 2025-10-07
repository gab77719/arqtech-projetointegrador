import './materiais.css'
import { Link } from 'react-router-dom';
import Ferramenta from '../../assets/ferramentas M.png';
import Cabecalho from '../../components/Cabecalho';
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

                  <footer className="footer">
                       <div className="logos-footer">
                         <img src={Logo} alt="Arqtech" />
                         <div className="parcerias">
                           <img src={makita1} alt="Makita" />
                           <img src={CSN1} alt="CSN" />
                           <img src={bosch1} alt="Bosch" />
                           <img src={DeWalt1} alt="DeWalt" />
                         </div>
                       </div>
                       <div className="contatos">
                         <p>
                           <strong>Contatos</strong> <br />
                           <br />
                           E-mail: arqtech@gmail.com <br />
                           Telefone: (12) 1234-9089
                         </p>
                       </div>
                       <div className="rede-social">
                         <p>
                           <strong>Siga-nos nas Redes sociais</strong>
                         </p>
                         <a
                           href="https://www.facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <ion-icon name="logo-facebook"></ion-icon>
                         </a>
                         <a
                           href="https://www.instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <ion-icon name="logo-instagram"></ion-icon>
                         </a>
                       </div>
                 
                       <div className="localizacao">
                         <p>
                           <strong>Localização</strong> <br />
                           <br />
                           Av. das Palmeiras, 123 – Centro, <br />
                           Cidade Exemplo – SP, CEP <br />
                           01234-567{" "}
                         </p>
                       </div>
                     </footer>
        
        </>

    )
}