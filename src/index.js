import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import pxToRem from './helpers/pxToRem';
import { StepContextProvider } from './contexts/StepContext';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  img{
    max-width: 100%;
    display: block;
  }

  a{
    text-decoration: none;
  }

  ul, li, body, h1, h2, h3, h4, h5, h6, p{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1{
    font-size: ${pxToRem(50)};
    font-weight: 700;
    line-height: ${pxToRem(62)};
  }

  h2{
    font-size: ${pxToRem(34)};
    font-weight: 700;
    line-height: ${pxToRem(46)};
  }

  h3{
    font-size: ${pxToRem(24)};
    font-weight: 700;
    line-height: ${pxToRem(35)};
  }

  h4{
    font-size: ${pxToRem(22)};
    font-weight: 700;
    line-height: ${pxToRem(28)};
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <StepContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StepContextProvider>
  </React.StrictMode>,
);
