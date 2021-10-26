import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PrivacyPolicyContainer from '../containers/RefundPolicy';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Termination Of Agreement - Ment Tech</title>
        <meta
          name="description"
          content="Ment Tech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution."
        />
      </Helmet>
      <Header fixed={true} />
      <PrivacyPolicyContainer />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
