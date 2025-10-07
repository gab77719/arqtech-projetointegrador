import './Bolinha.css'
import furadeira from '../../assets/furadeira.png';
export default function Bolinha() {
  return (
    <>
    <section>
        <img src={furadeira} alt="banner" className="cabecalho_banner"></img> 
    </section>
    <div className="container">
      
      <div className="item">
        <div className="bolinha">Carro</div>
        <h3>Compra online</h3>
      </div>

      <div className="item">
        <div className="bolinha">Carro</div>
        <h3>Parcelamento em até 10x</h3>
      </div>

      <div className="item">
        <div className="bolinha">Carro</div>
        <h3>Entrega rapida</h3>
      </div>

      <div className="item">
        <div className="bolinha">Carro</div>
        <h3>Combine a troca e
        pagamento</h3>
      </div>
    </div>

 
    </>
  )
}