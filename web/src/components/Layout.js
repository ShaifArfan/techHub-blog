import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css/normalize.css';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
