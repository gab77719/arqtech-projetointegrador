import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAc1YhihDxPqU2eIVAnJJFESu8djwz5Wig",
    authDomain: "arqtech-676cc.firebaseapp.com",
    projectId: "arqtech-676cc",
    storageBucket: "arqtech-676cc.firebasestorage.app",
    messagingSenderId: "15419671347",
    appId: "1:15419671347:web:c9a2b1f8000b3de3d27446",
    measurementId: "G-96HCQL20N8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

async function signInWithGooglePopup() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      throw error;
  }
  }
  
  //Função para logout
  async function logout() {
      await signOut(auth);
  }
  
  export { auth, googleProvider, signInWithGooglePopup, logout };