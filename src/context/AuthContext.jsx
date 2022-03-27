import { createContext, useContext, useState } from 'react';
import { auth } from '../auth/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
