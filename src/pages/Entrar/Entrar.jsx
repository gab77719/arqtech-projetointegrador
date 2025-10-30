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
         
      <div className="inputsE">
         <h1>Entrar</h1>
        <ion-icon name="mail-outline"></ion-icon>
        <input type="email" placeholder="Email" />
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="password" placeholder="Senha" />
        <p className='conta'>Ainda não tem conta? 
        <Link to='/' className='entre'> cadastre-se já</Link></p>
        <div className='G'>
       <ion-icon name="logo-google"></ion-icon>
       <ion-icon name="logo-facebook"></ion-icon>
       </div>
        <Link to="/" className='link-cadastrar'>Entrar</Link>
      </div>
      </div>
    </div>
  )
}