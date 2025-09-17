import './Produtos.css';
import Produto1 from '../../assets/produto1.png'; 
import Produto2 from '../../assets/produto2.png'; 
import Produto3 from '../../assets/produto3.png'; 

export default function Produtos() {
    return (
        <section className="produtos">
            <h1 className='Destaque'>Linha Elétrica - Mais vendidas</h1>
            <div className="produtos__lista">
                <div className="produto">
                    <img src= {Produto1} alt="Produto 1" className="produto__imagem" />
                    <h4 className="produto__nome">Martelete Combinado
                    Bateria 18V LXTDHR182Z</h4>
                    <p className="produto__preco">R$ 999,99</p>
                </div>
                <div className='btn-comprar'>
                    <button className='btn-comprar1'>Comprar</button>
                </div>
                <div className="produto">
                    <img src={Produto2} alt="Produto 2" className="produto__imagem" />
                    <h4 className="produto__nome">Parafusadeira-Bateria 40V XGTHP002GA201</h4>
                    <p className="produto__preco">R$ 499,99</p>
                </div>
                <div className='btn-comprar'>
                    <button className='btn-comprar1'>Comprar</button>
                </div>
                <div className="produto">
                    <img src= {Produto3} alt="Produto 3" className="produto__imagem" />
                    <h4 className="produto__nome">Serra Mármore 12000w 110mm MO400B
                    127V-Makita </h4>
                    <p className="produto__preco">R$ 436,00</p>
                </div>
                <div className='btn-comprar'>
                    <button className='btn-comprar1'>Comprar</button>
                </div>
                <div className='btn-comprar'>
                    <button className='btn-comprar1'>Mais</button>
                </div>
            </div>
        </section>
    );
}