import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // ← ADICIONAR ESTA LINHA

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAc1YhihDxPqU2eIVAnJJFESu8djwz5Wig",
  authDomain: "arqtech-676cc.firebaseapp.com",
  projectId: "arqtech-676cc",
  storageBucket: "arqtech-676cc.firebasestorage.app",
  messagingSenderId: "15419671347",
  appId: "1:15419671347:web:c9a2b1f8000b3de3d27446",
  measurementId: "G-96HCQL20N8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // ← ADICIONAR ESTA LINHA

// Provider do Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Login com Google (já existente)
export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Erro no login com Google:', error);
    throw error;
  }
};

// Cadastro com Email e Senha
export const signUpWithEmail = async (email, password, displayName) => {
  try {
    // Cria o usuário
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Atualiza o perfil com o nome
    await updateProfile(user, {
      displayName: displayName,
      photoURL: `https://ui-avatars.com/api/?name=${displayName}&background=random`
    });
    
    // Recarrega o usuário para pegar os dados atualizados
    await user.reload();
    
    return auth.currentUser;
  } catch (error) {
    console.error('Erro no cadastro:', error);
    throw error;
  }
};

// Login com Email e Senha
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

// Logout
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Erro no logout:', error);
    throw error;
  }
};

export { auth, storage }; // ← EXPORTAR O STORAGE AQUI