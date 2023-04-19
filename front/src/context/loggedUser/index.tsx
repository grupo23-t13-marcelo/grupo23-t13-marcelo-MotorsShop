import React, { useState, useEffect, createContext } from 'react';
import { api } from '../../services/api';
interface User {
  id: string;
  name: string;
  description: string;
}

interface AuthContextValue {
  user: User | null;
  
}

export const AuthContext = createContext<AuthContextValue>({ user: null });

const AuthContextProvider: React.FC = ({ children }:any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    try {
      if (user && user.id) {
        const userId = user.id;
        api
          .get(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setUser(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  }, [user?.id]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

