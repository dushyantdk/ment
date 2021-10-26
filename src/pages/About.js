import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { Helmet } from 'react-helmet';
import AboutContainer from '../containers/About';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Ment Tech</title>
        <meta
          name="description"
          content="Ment Tech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution."
        />
      </Helmet>
      <Header />
      <AboutContainer />
      <Footer />
    </>
  );
};

export default About;
