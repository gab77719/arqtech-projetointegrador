import './Entrar.css'
import Logo from '../../public/Logo.png';
import { Link } from 'react-router';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";


export default function Entrar() {
  return (
    <>
    <div className='logo'>
    <Link to="/"><img src={Logo} alt="" /></Link>
  </div>
    <div className="container-entrar">
     
      <div className='entrar'>
         
      <div className="inputsE">
         <h1 className='text-2xl'>Entrar</h1>
         <CiMail size={30}/>
        <input type="email" placeholder="Email" />
        <CiLock size={30}/>
        <input type="password" placeholder="Senha" />
        <p className='conta'>Ainda não tem conta? 
        <Link to='/Cadastrar' className='entre'> cadastre-se já</Link></p>
        <div className='flex gap-10 alin-items-center justify-center '>
        <FcGoogle size={40}/>
        <FaFacebookSquare size={40}/>
       </div>
        <Link to="/" className='link-cadastrar'>Entrar</Link>
      </div>
      </div>
    </div>
    </>
  )
}