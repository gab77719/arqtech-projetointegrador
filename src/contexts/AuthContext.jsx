import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStoredToken, getStoredUser } from '../lib/AuthHandler';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getStoredToken();
    const storedUser = getStoredUser();

    if (token && storedUser) {
      setLogged(true);
      setUser(storedUser);
    }
    
    setLoading(false);
    
  }, []);

  return (
    <AuthContext.Provider value={{ logged, setLogged, user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}