import { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
  const [data, setData] = useState({
    steps: ['one', 'two', 'three', 'four'],
    atualStep: '',
    user: {
      name: '',
      email: '',
      phone: '',
      company: '',
    },
    service: '',
    budget: '',
  });

  return (
    <StepContext.Provider value={{ data, setData }}>
      {children}
    </StepContext.Provider>
  );
};
