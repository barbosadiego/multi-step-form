import { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
  const [data, setData] = useState({
    steps: [0, 1, 2, 3],
    atualStep: 0,
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
