import { createContext, useContext, useState, ReactNode } from 'react';
import { Data } from '@/types/usuarios';

interface UserContextType {
  users: Data[];
  addUser: (user: Data) => void;
  setUsers: (users: Data[]) => void; // Añadimos esta función
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsersState] = useState<Data[]>([]);

  const addUser = (user: Data) => {
    setUsersState((prevUsers) => [...prevUsers, user]);
  };

  const setUsers = (users: Data[]) => {
    setUsersState(users); 
  };

  return (
    <UserContext.Provider value={{ users, addUser, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext debe ser usado dentro de un UserProvider');
  }
  return context;
};
