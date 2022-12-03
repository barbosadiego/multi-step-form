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
    services: ['development', 'web design', 'marketing', 'other'],
    budget: [],
  });

  return (
    <StepContext.Provider value={{ data, setData }}>
      {children}
    </StepContext.Provider>
  );
};
