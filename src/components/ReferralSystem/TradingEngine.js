import React from 'react';
import {
  Container,
  Wrapper,
  SliderContainer,
  Image,
} from './styles/TradingExchange';
import Slider from 'infinite-react-carousel';
import BgGif from '../../assests/img/exchange-backgound.gif';

const TradingEngine = () => {
  return (
    <Container id="WhiteLabel-Trading-Engine">
      <Wrapper className="container">
        <h1><span className="gradient-text-darkblue mt-5">SOLUTION</span></h1>
        <h1 className="text-center">
        Rapidly, securely, and successfully <br />
          <b><span className="gradient-text-darkblue">Referral & Affiliate System</span></b>
        </h1>
        <SliderContainer>
          <div>
            <Slider
              autoplay
              dots
              arrows={false}
              className="white-label-laptop-slider"
            >
              <Image src={BgGif} alt="..." />
            </Slider>
          </div>
        </SliderContainer>
      </Wrapper>
    </Container>
  );
};

export default TradingEngine;
