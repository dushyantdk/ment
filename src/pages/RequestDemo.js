import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { Helmet } from 'react-helmet';
import ContactUsContainer from '../containers/RequestDemo';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Request Demo - Ment Tech</title>
        <meta
          name="description"
          content="Ment Tech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution."
        />
      </Helmet>
      <Header />
      <ContactUsContainer />
      <Footer />
    </>
  );
};

export default ContactUs;
