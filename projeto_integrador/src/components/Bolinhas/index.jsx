import './Bolinha.css'
import furadeira from '../../assets/furadeira.png';
import { IoCartOutline } from "react-icons/io5";
import { SlWallet } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
export default function Bolinha() {
  return (
    <>
    <section>
        <img src={furadeira} alt="banner" className="cabecalho_banner"></img> 
    </section>
    <div className="container">
      
      <div className="item">
        <div className= "bolinha"><IoCartOutline size={40}/></div>
        <h3>Compra online</h3>
      </div>

      <div className="item">
        <div className="bolinha"><SlWallet size={40}/></div>
        <h3>Parcelamento em até 10x</h3>
      </div>

      <div className="item">
        <div className="bolinha"><CiDeliveryTruck size={50}/></div>
        <h3>Entrega rapida</h3>
      </div>

      <div className="item">
        <div className="bolinha"><CiLocationOn size={40}/></div>
        <h3>Combine a troca e
        pagamento</h3>
      </div>
    </div>

 
    </>
  )
}