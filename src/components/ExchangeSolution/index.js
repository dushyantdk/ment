import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Coins from './Coins';
import TradingEngine from './TradingEngine';
import Tabs from './Tabs';
import WhyUs from './WhyUs';
import TurnkeyAdvantages from './TurnkeyAdvantages';
import NoBank from './NoBank';
import StructureSlider from './StructureSlider';
import MultiSecurity from './MultiSecurity';
import ReliableHosting from './ReliableHosting';
import UtilityToken from './UtilityToken';
import ManyProducts from './ManyProducts';
import Education from './Education';
import MajorLanguage from './MajorLanguage';
import WeProvide from './WeProvide';
import AntiFraud from './AntiFraud';
import WorkBest from './WorkBest';
import Footer from '../Footer/Footer';
import CopyRight from '../Footer/CopyRight';

const ExchangeSolution = ({
  productDropdownOpen,
  handleProductDropdown,
  selectedAsset,
  handleAssets,
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
      <Products
        productDropdownOpen={productDropdownOpen}
        handleProductDropdown={handleProductDropdown}
      />
      <Coins selectedAsset={selectedAsset} handleAssets={handleAssets} />
      <TradingEngine />
      {/* <Review /> */}
      {/* <Steps /> */}
      <TurnkeyAdvantages />
      <NoBank />
      <StructureSlider />
      <MultiSecurity />
      <AntiFraud lockActive={lockActive} handleLockState={handleLockState} />
      <ReliableHosting />
      <UtilityToken />
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
