import './Pagamentos.css'
import Logo from '../../public/Logo.png';
import { Link } from 'react-router-dom';

export default function Pagamentos() {
    return (
        <div className="Pagamentos">
            <div className="cabecalho_pagamentos">
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
                <h2>Formas de pagamento</h2>
            </div>
            
            <div className='container-pagamento'>
                <div className='metodo-pagamento'>
                    <div className='icone-pagamento'>
                        <i className="icon-pix">PIX</i>
                    </div>
                    <h3>PIX</h3>
                    <p>Pagamento instantâneo e seguro</p>
                    <button type='button'>Comprar com PIX</button>
                </div>

                <div className='metodo-pagamento'>
                    <div className='icone-pagamento'>
                        <i className="icon-card">💳</i>
                    </div>
                    <h3>Cartão de Crédito</h3>
                    <p>Visa, Mastercard, Elo e mais</p>
                    <button type='button'>Comprar com Cartão</button>
                </div>

                <div className='metodo-pagamento'>
                    <div className='icone-pagamento'>
                        <i className="icon-boleto">📄</i>
                    </div>
                    <h3>Boleto</h3>
                    <p>Pagamento em até 3 dias úteis</p>
                    <button type='button'>Comprar com Boleto</button>
                </div>
            </div>
            
            <footer className='footer-pagamentos'>
                <div className='footer-logo'>
                    <img src={Logo} alt="Logo" />
                </div>
                
                <div className='marcas'>
                    <h4>Marcas Parceiras</h4>
                    <div className='marcas-list'>
                        <span className='marca-item'>Makita</span>
                        <span className='marca-item'>CSN</span>
                        <span className='marca-item'>Bosch</span>
                        <span className='marca-item'>DeWalt</span>
                    </div>
                </div>
                
                <div className='contatos'>
                    <h4>Contatos</h4>
                    <p>📧 contato@empresa.com</p>
                    <p>📱 (11) 9999-9999</p>
                    <div className='redes-sociais'>
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="WhatsApp">WhatsApp</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}