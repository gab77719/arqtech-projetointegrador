import React, { useState } from 'react';
import './Cadastro.css';
import Logo from '../../public/Logo.png';
import { Link, useNavigate } from 'react-router';
import { CiMail, CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

import { signInWithGooglePopup, signUpWithEmail } from '../../firebase';
import { doLogin } from '../../lib/AuthHandler';
import { useAuth } from '../../contexts/AuthContext';

export default function Cadastrar() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const { setLogged, setUser } = useAuth();

  async function handleEmailSignUp(e) {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userObj = await signUpWithEmail(email, password, name);

      if (!userObj) throw new Error('Erro ao criar usuário');

      const token = await userObj.getIdToken();

      const userData = {
        name: name,
        email: userObj.email,
        photoURL: `https://ui-avatars.com/api/?name=${name}&background=random`,
        uid: userObj.uid
      };

      doLogin(token, userData);
      setLogged(true);
      setUser(userData);

      console.log('Usuário cadastrado:', userData);
      navigate('/');

    } catch (err) {
      console.error('Erro ao fazer cadastro:', err);
      
      // Mensagens de erro em português
      if (err.code === 'auth/email-already-in-use') {
        setError('Este email já está cadastrado');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else if (err.code === 'auth/weak-password') {
        setError('Senha muito fraca. Use pelo menos 6 caracteres');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Cadastro com email/senha não está habilitado');
      } else {
        setError(err.message || 'Erro no cadastro');
      }
    } finally {
      setLoading(false);
    }
  }

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
          <form className="inputs" onSubmit={handleEmailSignUp}>
            <h1 className='text-2xl'>Cadastrar-se</h1>

            <input 
              type="text" 
              placeholder="Nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />

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
              placeholder="Senha (mínimo 6 caracteres)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              minLength={6}
            />

            <p className='conta'>
              Já tem conta?
              <Link to='/Entrar' className='entre'> Entre já</Link>
            </p>

            <div className='flex gap-10 alin-items-center justify-center'>
              <button 
                type="button"
                onClick={handleGoogleSignUp} 
                disabled={loading} 
                className="google-btn"
              >
                <FcGoogle size={40} />
              </button>

              <FaFacebookSquare size={40} className='face-btn' />
            </div>

            <button 
              type="submit" 
              className='link-cadastrar'
              disabled={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar-se'}
            </button>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}