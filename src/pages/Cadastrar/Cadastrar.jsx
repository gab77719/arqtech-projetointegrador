import './Cadastro.css' 
import Logo from '../../public/Logo.png';
import { Link } from 'react-router';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

export default function Cadastrar() {
  return (
    <>
    <div className='logo'>
    <Link to="/"><img src={Logo} alt="" /></Link>
  </div>
    <div className="container-cadastrar">
     
      <div className='cadastrar'>
         
      <div className="inputs">
         <h1 className='text-2xl'>Cadastrar-se</h1>
        N
        <input type="text" placeholder="Nome" />
        <CiMail size={30}/>
        <input type="email" placeholder="Email" />
        <CiLock size={30}/>
        <input type="password" placeholder="Senha" />
       <p className='conta'>Já tem conta? 
        <Link to='/Entrar' className='entre'> Entre já</Link></p>
       <div className='flex gap-10 alin-items-center justify-center '>
       <FcGoogle size={40}/>
       <FaFacebookSquare size={40}/>
       </div>
        <Link to={"/Entrar"} className='link-cadastrar'>Cadastrar-se</Link>
      </div>
      </div>
    </div>
    </>
  )
}