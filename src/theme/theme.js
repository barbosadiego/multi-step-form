import React from 'react';
import { ThemeProvider } from 'styled-components';
import pxToRem from '../helpers/pxToRem';

const theme = {
  color: {
    primary: '#4A3AFF',
    secondary: '#ffc226',
    neutral800: '#14142b',
    neutral700: '#4e4b66',
    neutral600: '#6e7191',
    neutral500: '#a0a3bd',
    neutral400: '#d9dbe9',
    neutral300: '#eff0f6',
    neutral200: '#d9db39',
    neutral100: '#ffffff',
  },
  fontSize: {
    title1: pxToRem(50),
    title2: pxToRem(34),
    title3: pxToRem(24),
    title4: pxToRem(22),
    title5: pxToRem(18),
    title6: pxToRem(16),
    paragraph: pxToRem(18),
    paragraphLarge: pxToRem(24),
    paragraphSmall: pxToRem(15),
  },
  letterSpacing: '0.24em',
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
