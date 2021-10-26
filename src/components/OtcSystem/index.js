import React from 'react';
import Hero from './Hero';
import TradingEngine from './TradingEngine';
import Tabs from './Tabs';
import WhyUs from './WhyUs';
import TurnkeyAdvantages from './TurnkeyAdvantages';
import MultiSecurity from './MultiSecurity';
import ManyProducts from './ManyProducts';
import Education from './Education';
import MajorLanguage from './MajorLanguage';
import WeProvide from './WeProvide';
import AntiFraud from './AntiFraud';
import WorkBest from './WorkBest';
import Description from './Description';
import DarkSection from './DarkSection';
// import LiquidityCoin from './LiquidityCoin';
import TheProblem from './TheProblem';
import TheSolution from './TheSolution';
import QuickTour from './QuickTour';
import IndustryLeading from './IndustryLeading';
import TrustedPartners from './TrustedPartners';
import Footer from '../Footer/Footer';
import CopyRight from '../Footer/CopyRight';

const ExchangeSolution = ({
  // selectedAsset,
  // handleAssets,
  fixedTop,
  message,
  name,
  email,
  phone,
  company,
  loading,
  status,
  onChangeHandler,
  submitHandler,
  lockActive,
  handleLockState,
}) => {
  return (
    <div className="innerfooter product-new">
      <Hero
        message={message}
        name={name}
        email={email}
        phone={phone}
        company={company}
        loading={loading}
        status={status}
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
      />
      <Tabs fixedTop={fixedTop} />
      <Description />
      <DarkSection />
      <TheProblem />
      <TheSolution />
      <QuickTour />
      <IndustryLeading />
      <TrustedPartners />
      {/* <Coins selectedAsset={selectedAsset} handleAssets={handleAssets} /> */}
      {/* <LiquidityCoin selectedAsset={2} handleAssets={handleAssets} /> */}
      <TradingEngine />
      <TurnkeyAdvantages />
      <MultiSecurity />
      <AntiFraud lockActive={lockActive} handleLockState={handleLockState} />
      <ManyProducts />
      <Education />
      <MajorLanguage />
      <WeProvide />
      <WhyUs />
      <WorkBest />
      <Footer/>
      <CopyRight/>
    </div>
  );
};

export default ExchangeSolution;
