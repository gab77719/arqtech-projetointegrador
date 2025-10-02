import 'Pagamentos.css'
import Logo from '../../public/Logo.png';

export default function Pagamentos() {
    return (
        <div className="Pagamentos">
            <div className="cabecalho_pagamentos">
                <a href=""><img src={Logo} /></a>
                <h2>Formas de pagamento</h2>
            </div>
            <div className='container-pagamento'>
                <img src="" />
                <h3>PIX</h3>
                <button type='submit'>Comprar</button>

                <img src="" />
                <h3>Cartão ViSA</h3>
                <button type='submit'>Comprar</button>

                <img src="" />
                <h3>Boleto</h3>
                <button type='submit'>Comprar</button>
            </div>
            <footer>
                <img src={Logo} />
                <div className='marcas'>
                    <img src="" alt="makita" />
                    <img src="" alt="csn " />
                    <img src="" alt="bosh" />
                    <img src="" alt="dewalt" />
                </div>
                <div className='contatos'>
                    
                </div>
            </footer>