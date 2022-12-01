import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  img{
    max-width: 100%;
    display: block;
  }

  ul, li, body, h1, h2, h3, h4, h5, h6, p{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a{
    text-decoration: none;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
