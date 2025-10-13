import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const SoreContextProvider = ({ children }) => {
  const [name, setName] = useState('Harsha');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default SoreContextProvider;
