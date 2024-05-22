import React, { createContext, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean
}

export const AuthProvider: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const AuthContext = createContext<AuthContextType>({
    isLoggedIn: isLoggedIn
  });
  

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      
    </AuthContext.Provider>
  );
};