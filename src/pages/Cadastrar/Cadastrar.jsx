import React, { useState } from 'react';
import './Cadastro.css';
import Logo from '../../public/Logo.png';
import { Link, useNavigate } from 'react-router';
import { CiMail, CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

import { signInWithGooglePopup } from '../../firebase';
import { doLogin } from '../../lib/AuthHandler';
import { useAuth } from '../../contexts/AuthContext';

export default function Cadastrar() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setLogged, setUser } = useAuth();

  async function handleGoogleSignUp() {
    setLoading(true);
    setError(null);

    try {
      const userObj = await signInWithGooglePopup();

      if (!userObj) throw new Error('Usuário não encontrado');

      const token = await userObj.getIdToken();

      const userData = {
        name: userObj.displayName,
        email: userObj.email,
        photoURL: userObj.photoURL,
        uid: userObj.uid
      };

      doLogin(token, userData);
      setLogged(true);
      setUser(userData);

      console.log('Usuário cadastrado:', userData);
      navigate('/');

    } catch (err) {
      console.error('Erro ao fazer cadastro com Google:', err);
      setError(err.message || 'Erro no cadastro');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='logo'>
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
      </div>

      <div className="container-cadastrar">
        <div className='cadastrar'>
          <div className="inputs">
            <h1 className='text-2xl'>Cadastrar-se</h1>

            <input type="text" placeholder="Nome" />

            <CiMail size={30} />
            <input type="email" placeholder="Email" />

            <CiLock size={30} />
            <input type="password" placeholder="Senha" />

            <p className='conta'>
              Já tem conta?
              <Link to='/Entrar' className='entre'> Entre já</Link>
            </p>

            <div className='flex gap-10 alin-items-center justify-center'>
              <button onClick={handleGoogleSignUp} disabled={loading} className="google-btn">
                <FcGoogle size={40} />
              </button>

              <FaFacebookSquare size={40} className='face-btn' />
            </div>

            <Link to="/" className='link-cadastrar'>Cadastrar-se</Link>

            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}