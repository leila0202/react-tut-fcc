import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
  const [name, setName] = useState('test');
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
