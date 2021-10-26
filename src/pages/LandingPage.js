import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import LandingPageContainer from '../containers/LandingPage';

const LandingPage = () => {
  return (
    <>
      <Header fixed={true} />
      <LandingPageContainer />
      <Footer />
    </>
  );
};

export default LandingPage;
