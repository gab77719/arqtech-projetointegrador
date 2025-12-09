import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'; // ← ADICIONAR

const firebaseConfig = {
  apiKey: "AIzaSyAc1YhihDxPqU2eIVAnJJFESu8djwz5Wig",
  authDomain: "arqtech-676cc.firebaseapp.com",
  projectId: "arqtech-676cc",
  storageBucket: "arqtech-676cc.appspot.com",
  messagingSenderId: "15419671347",
  appId: "1:15419671347:web:c9a2b1f8000b3de3d27446",
  measurementId: "G-96HCQL20N8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app); // ← ADICIONAR

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Erro no login com Google:', error);
    throw error;
  }
};

export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await updateProfile(user, {
      displayName: displayName,
      photoURL: `https://ui-avatars.com/api/?name=${displayName}&background=random`
    });
    
    await user.reload();
    return auth.currentUser;
  } catch (error) {
    console.error('Erro no cadastro:', error);
    throw error;
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Erro no logout:', error);
    throw error;
  }
};

export { auth, storage, db }; // ← EXPORTAR db também