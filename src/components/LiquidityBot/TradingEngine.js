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
    <Container id="WhiteLabel-Trading-Engine" className="p-y-100">
      <Wrapper className="container">
        <h1 className="text-center">
        A Liquidity Engine that is  <span className="gradient-text-darkblue">Fast, Secure, and Successful</span>
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
