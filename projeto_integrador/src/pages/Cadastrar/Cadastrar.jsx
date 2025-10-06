import './Cadastro.css' 
import Logo from '../../public/Logo.png';
import { Link } from 'react-router-dom';

export default function Cadastrar() {
  return (
    <div className="container-cadastrar">
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='cadastrar'>
         
      <div className="inputs">
         <h1>Cadastrar-se</h1>
        N
        <input type="text" placeholder="Nome" />
        <ion-icon name="mail-outline"></ion-icon>
        <input type="email" placeholder="Email" />
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="password" placeholder="Senha" />
        <p className='conta?'>Já tem conta? entre já</p>
        <Link to={"/"}>Cadastrar-se</Link>
      </div>
      </div>
    </div>
  )
}