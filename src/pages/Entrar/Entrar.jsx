import React, { useState } from 'react';
import './Entrar.css';
import Logo from '../../public/Logo.png';
import { Link, useNavigate } from 'react-router';
import { CiMail, CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

import { signInWithGooglePopup, signInWithEmail } from '../../firebase';
import { doLogin } from '../../lib/AuthHandler';
import { useAuth } from '../../contexts/AuthContext';

export default function Entrar() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const { setLogged, setUser } = useAuth();

  async function handleEmailSignIn(e) {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userObj = await signInWithEmail(email, password);

      if (!userObj) throw new Error('Usuário não encontrado');

      const token = await userObj.getIdToken();

      const userData = {
        name: userObj.displayName || email.split('@')[0],
        email: userObj.email,
        photoURL: userObj.photoURL || `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`,
        uid: userObj.uid
      };

      doLogin(token, userData);
      setLogged(true);
      setUser(userData);

      console.log('Usuário logado:', userData);
      navigate('/');

    } catch (err) {
      console.error('Erro ao fazer login:', err);
      
      // Mensagens de erro em português
      if (err.code === 'auth/user-not-found') {
        setError('Usuário não encontrado');
      } else if (err.code === 'auth/wrong-password') {
        setError('Senha incorreta');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Muitas tentativas. Tente novamente mais tarde');
      } else {
        setError(err.message || 'Erro no login');
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
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

      console.log('Usuário logado:', userData);
      navigate('/');

    } catch (err) {
      console.error('Erro ao fazer login com Google:', err);
      setError(err.message || 'Erro no login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='logo'>
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
      </div>

      <div className="container-entrar">
        <div className='entrar'>
          <form className="inputsE" onSubmit={handleEmailSignIn}>
            <h1 className='text-2xl'>Entrar</h1>

            <CiMail size={30} />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />

            <CiLock size={30} />
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />

            <p className='conta'>
              Ainda não tem conta?
              <Link to='/Cadastrar' className='entre'>Cadastre-se já</Link>
            </p>

            <div className='flex gap-10 alin-items-center justify-center'>
              <button 
                type="button"
                onClick={handleGoogleSignIn} 
                disabled={loading} 
                className="google-btn"
              >
                <FcGoogle size={40} />
              </button>

              <FaFacebookSquare size={40} className='face-btn'/>
            </div>

            <button 
              type="submit" 
              className='link-cadastrar'
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}