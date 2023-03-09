import React from 'react';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;