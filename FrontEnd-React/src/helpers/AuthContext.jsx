import { parseCookies } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const cookies = parseCookies()
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.userData);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (cookies.userData) {
      setIsLoggedIn(true);
    }
    else {
        setIsLoggedIn(false)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}