import React, { useState } from 'react';
import "./Conta.css";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer/Footer";
import { FaCamera } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Conta() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(user?.photoURL || null);
  const [error, setError] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione uma imagem válida');
      return;
    }

    // Validar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('A imagem deve ter no máximo 5MB');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Criar preview local
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Fazer upload para o Firebase
      const downloadURL = await uploadProfilePicture(user.uid, file);

      // Atualizar perfil do usuário no Firebase Auth
      await updateProfile(auth.currentUser, {
        photoURL: downloadURL
      });

      // Atualizar contexto local
      setUser({
        ...user,
        photoURL: downloadURL
      });

      console.log('Foto atualizada com sucesso!');
      
    } catch (err) {
      console.error('Erro ao fazer upload:', err);
      setError('Erro ao fazer upload da foto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <div className="container-conta mt-20">
        <section>
          <div className="p-20 ">
            <div className="profile-picture-container">
              <div className="profile-image-wrapper">
                {preview ? (
                  <img 
                    src={preview} 
                    alt="Foto de perfil" 
                    className="profile-image w-30 rounded-full"
                  />
                ) : (
                  <div className="profile-placeholder">
                    Sem foto
                  </div>
                )}
                
                <label htmlFor="profile-pic-input" className="camera-button">
                  <FaCamera size={20} />
                  {loading && <span className="ml-2">⏳</span>}
                </label>
                
                <input
                  id="profile-pic-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={loading}
                  style={{ display: 'none' }}
                />
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>

          <p className="ml-20 text-3xl">Informações da conta</p>
          <div className="inputsC">
            <input
              type="text"
              placeholder="E-mail cadastrado"
              className="Email"
              value={user?.email || ''}
              readOnly
            />

            <input
              type="password"
              placeholder="Senha cadastrada"
              className="Email"
            />

            <input
              type="password"
              placeholder="Cartão cadastrado"
              className="Email"
            />
            
            <div className="flex">
              <input
                type="text"
                placeholder="Localização"
                className="Email"
              />
            </div>
          </div>
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}