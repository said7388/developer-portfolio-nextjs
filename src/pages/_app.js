import React from 'react';
import ThemeContextProvider from '../contexts/ThemeContext';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;