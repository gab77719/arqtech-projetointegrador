import './Entrar.css'
import Logo from '../../public/Logo.png';
import { Link } from 'react-router-dom';

export default function Entrar() {
  return (
    <div className="container-entrar">
      <div className='logo'>
        <Link to="/"><img src={Logo} alt="" /></Link>
      </div>
      <div className='entrar'>
         
      <div className="inputs">
         <h1>Entrar</h1>
        <ion-icon name="mail-outline"></ion-icon>
        <input type="email" placeholder="Email" />
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="password" placeholder="Senha" />
        <p className='conta?'>
          <Link to="/Home">Já tem conta? Entre.</Link>
        </p>
        <Link to={"/Home"}>Entrar</Link>
      </div>
      </div>
    </div>
  )
}