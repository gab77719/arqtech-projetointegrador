import './materiais.css'
import { Link } from 'react-router';
import Ferramenta from '../../assets/ferramentas M.png';
import Cabecalho from '../../components/Cabecalho';
import Footer from '../../components/Footer/Footer'
import Produto1 from '../../assets/image 47.png';
import Produto2 from '../../assets/tijolo.png';
import Produto3 from '../../assets/gesso.png';
import Produto4 from "../../assets/image 46.png";
import Produto5 from "../../assets/image 47.png";
import Produto6 from "../../assets/image 48.png"; 
import Produto7 from "../../assets/sacodeareia.png";
import Produto8 from "../../assets/sacodebrita.png";
import Produto9 from "../../assets/votomassa.png";
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

              <section className="produtos">
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
                        <img src={Produto6} alt="Produto 6" className="produto_imagem" />
                        <h4 className="produto_nome">
                        Vergalhão CA-50 32,0 mm <br/ >
                         12 m - Reto S
                        </h4>
                        <p className="produto_preco">R$ 39,99</p>
                        <div className="btn-comprar">
                           <Link to="/ComprarM3"> <button className="btn-comprar1">Comprar</button></Link>
                        </div>
                      </div>
                      
                      </div>
                  </section>
                
                   <section className="produtos">
                    <div className="produtos_lista">
                      
                      <div className="produto">
                        <img src={Produto7} alt="Produto 7" className="produto_imagem" />
                        <h4 className="produto_nome">
                          Saco de areia 20kg 
                        </h4>
                        <div className="produto_valor">
                          <p className="produto_preco">R$ 10,99</p>
                          <div className="btn-comprar">
                           <Link to="/Materiais1"> <button className="btn-comprar1">Comprar</button></Link>
                          </div>
                        </div>
                      </div>
                      
                      <div className="produto">
                        <img src={Produto8} alt="Produto 2" className="produto_imagem" />
                        <h4 className="produto_nome">
                          Saco de pedra brita 20kg
                        </h4>
                        <p className="produto_preco">R$ 15,50</p>
                        <div className="btn-comprar">
                         <Link to="/Materiais2"> <button className="btn-comprar1">Comprar</button></Link>
                        </div>
                      </div>
              
                      <div className="produto">
                        <img src={Produto9} alt="Produto 9" className="produto_imagem" />
                        <h4 className="produto_nome">
                         Argamassa Flexível AC III Cinza <br />
                         Colante 20kg Votomassa - Votorantim
                        </h4>
                        <p className="produto_preco">R$ 32,99</p>
                        <div className="btn-comprar">
                         <Link to="/Materiais3"> <button className="btn-comprar1">Comprar</button></Link>
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