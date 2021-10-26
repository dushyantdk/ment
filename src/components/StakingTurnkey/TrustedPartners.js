import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  Divider,
  ImgContainer,
} from './styles/TrustedPartners';
//import ImgOne from '../../../assests/img/Crypto-Mainframe-Logo-FINAL-white.svg';
import ImgTwo from '../../assests/img/freedomexchange.png';
import ImgThree from '../../assests/img/iza-logo.png';
//import ImgFour from '../../../assests/img/QUBIT_exchange-color-Q-1.png';
import ImgFive from '../../assests/img/tradecoinx.png';

const TrustedPartners = () => {
  return (
    <Container className="blue-bg pb-4">
      <div className="container">
      <Wrapper>
        <h1 className="text-center text-white">
          Our <span class="">Trusted Partners</span>
        </h1>
        <h5>
        Companies that are helping us build the greatest fintech products and solutions of all time.
        </h5>
        <Card>
          {/* <ImgContainer>
            <img src={ImgOne} alt="..." />
          </ImgContainer> */}
          <Divider />
          <ImgContainer>
            <img src={ImgTwo} alt="..." />
          </ImgContainer>
          <Divider />
          <ImgContainer>
            <img src={ImgThree} alt="..." />
          </ImgContainer>
          <Divider />
          {/* <ImgContainer>
            <img src={ImgFour} alt="..." />
          </ImgContainer> */}
          <Divider />
          <ImgContainer>
            <img src={ImgFive} alt="..." />
          </ImgContainer>
        </Card>
      </Wrapper>
      </div>
    </Container>
  );
};

export default TrustedPartners;
