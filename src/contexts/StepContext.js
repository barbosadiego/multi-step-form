import { createContext } from 'react';

export const StepContext = createContext();

const data = {
  step: ['one', 'two', 'three', 'four'],
  user: {
    name: '',
    email: '',
    phone: '',
    company: '',
  },
  services: ['development', 'web design', 'marketing', 'other'],
  budget: [],
};

export const StepContextProvider = ({ children }) => (
  <StepContext.Provider value={{ data }}>{children}</StepContext.Provider>
);
