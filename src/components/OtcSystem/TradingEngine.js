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
        <h1><span class="gradient-text-darkblue">SOLUTION</span></h1>
        <h1 className="text-center">
          Fastest, Most Secure and Successful <span class="gradient-text-darkblue">Trading Engine</span>
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
