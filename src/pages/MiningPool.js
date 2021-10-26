import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { Helmet } from 'react-helmet';
import ExchangeSolutionContainer from '../containers/MiningPool';

const ExchangeSolution = () => {
  return (
    <>
      <Helmet>
        <title>Mining Pool System - Ment Tech</title>
        <meta
          name="description"
          content="Ment Tech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution."
        />
      </Helmet>
      <Header />
      <ExchangeSolutionContainer />
      <Footer />
    </>
  );
};

export default ExchangeSolution;
