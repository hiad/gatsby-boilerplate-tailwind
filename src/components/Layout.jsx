import * as React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/layout.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
