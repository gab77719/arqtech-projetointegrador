import './Cadastro.css' 
import Logo from '../../public/Logo.png';
import { Link } from 'react-router';

export default function Cadastrar() {
  return (
    <div className="container-cadastrar">
      <div className='logo'>
        <Link to="/"><img src={Logo} alt="" /></Link>
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
       <p className='conta'>Já tem conta? 
        <Link to='/Entrar' className='entre'> Entre já</Link></p>
       <div className='G'>
       <ion-icon name="logo-google"></ion-icon>
       <ion-icon name="logo-facebook"></ion-icon>
       </div>
        <Link to={"/"} className='link-cadastrar'>Cadastrar-se</Link>
      </div>
      </div>
    </div>
  )
}