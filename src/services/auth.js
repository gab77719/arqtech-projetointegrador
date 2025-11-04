
import { auth, provider, signInWithPopup } from '../firebase';

export async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // retorna o usuário logado
  } catch (error) {
    console.error('Erro no login com Google:', error);
    throw error;
  }
}
