import React, { useState } from 'react';
import "./Conta.css";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer/Footer";
import { FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { updateProfile, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../../firebase';

export default function Conta() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(user?.photoURL || null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  // Estados para alteração de senha
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [passwordLoading, setPasswordLoading] = useState(false);

  // Upload da foto de perfil
  const uploadProfilePicture = async (userId, file) => {
    const storageRef = ref(storage, `profile-pictures/${userId}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione uma imagem válida');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('A imagem deve ter no máximo 5MB');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);

      const downloadURL = await uploadProfilePicture(user.uid, file);

      await updateProfile(auth.currentUser, {
        photoURL: downloadURL
      });

      // Recarregar o usuário atualizado do Firebase
      await auth.currentUser.reload();
      
      // Criar objeto de usuário atualizado
      const updatedUser = {
        ...user,
        photoURL: downloadURL,
        name: user.name || auth.currentUser.displayName,
        email: user.email || auth.currentUser.email,
        uid: user.uid || auth.currentUser.uid
      };
      
      // Atualizar o contexto para sincronizar com o Cabecalho
      setUser(updatedUser);
      
      // CRÍTICO: Salvar no localStorage também
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setSuccess('Foto atualizada com sucesso!');
      
    } catch (err) {
      console.error('Erro ao fazer upload:', err);
      setError('Erro ao fazer upload da foto');
      setPreview(user?.photoURL || null);
    } finally {
      setLoading(false);
    }
  };

  // Alterar senha
  const handlePasswordChange = async () => {
    setPasswordLoading(true);
    setError(null);
    setSuccess(null);

    // Validações
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError('Preencha todos os campos');
      setPasswordLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError('A nova senha deve ter no mínimo 6 caracteres');
      setPasswordLoading(false);
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('As senhas não coincidem');
      setPasswordLoading(false);
      return;
    }

    try {
      // Reautenticar o usuário
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        passwordData.currentPassword
      );
      
      await reauthenticateWithCredential(auth.currentUser, credential);

      // Atualizar a senha
      await updatePassword(auth.currentUser, passwordData.newPassword);

      setSuccess('Senha alterada com sucesso!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      setTimeout(() => {
        setShowPasswordModal(false);
        setSuccess(null);
      }, 2000);

    } catch (err) {
      console.error('Erro ao alterar senha:', err);
      
      if (err.code === 'auth/wrong-password') {
        setError('Senha atual incorreta');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Muitas tentativas. Tente novamente mais tarde');
      } else {
        setError('Erro ao alterar senha. Tente novamente');
      }
    } finally {
      setPasswordLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <>
      
      <div className="container-conta mt-20">
        <section>
          <div className="p-20">
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
                    {user?.displayName?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                
                <label htmlFor="profile-pic-input" className="camera-button">
                  <FaCamera size={20} />
                  
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
              {error && <p className="error-text text-red-500 mt-2">{error}</p>}
              {success && <p className="success-text text-green-500 mt-2">{success}</p>}
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

            <div className="flex items-center gap-3">
              <input
                type="password"
                placeholder="Senha cadastrada"
                className="Email flex-1"
                value="••••••••"
                readOnly
              />
              <button
                onClick={() => setShowPasswordModal(true)}
                className="px-4 py-2 text-blue-500 hover:text-blue-700 font-semibold whitespace-nowrap"
              >
                Alterar senha
              </button>
            </div>

            <input
              type="text"
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

      {/* Modal de alteração de senha */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Alterar Senha</h2>
            
            <div>
              {/* Senha atual */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 mb-2">Senha Atual</label>
                <input
                  type={showPasswords.current ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Digite sua senha atual"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-3 top-10 text-gray-500"
                >
                  {showPasswords.current ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Nova senha */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 mb-2">Nova Senha</label>
                <input 
                  type={showPasswords.new ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Digite a nova senha (mín. 6 caracteres)"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-10 text-gray-500"
                >
                  {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Confirmar senha */}
              <div className="mb-6 relative">
                <label className="block text-gray-700 mb-2">Confirmar Nova Senha</label>
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Confirme a nova senha"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handlePasswordChange();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-10 text-gray-500"
                >
                  {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPasswordData({currentPassword: '', newPassword: '', confirmPassword: ''});
                    setError(null);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  disabled={passwordLoading}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handlePasswordChange}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  disabled={passwordLoading}
                >
                  {passwordLoading ? 'Alterando...' : 'Confirmar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
}