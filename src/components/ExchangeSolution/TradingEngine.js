import React from 'react';
import {
  Container,
  Wrapper,
  SliderContainer,
  Image,
} from './styles/TradingExchange';
import Slider from 'infinite-react-carousel';
import FirstImg from '../../assests/img/table.246ce0d2.png';
import SecondImg from '../../assests/img/section6.c534fd21.png';
import ThirdImg from '../../assests/img/trading-engine-third.png';
import FourthImg from '../../assests/img/trading-engine-fourth.png';
import FifthImg from '../../assests/img/trading-engine-fifth.png';
import SixthImg from '../../assests/img/trading-engine-sixth.png';
import SeventhImg from '../../assests/img/trading-engine-seventh.png';
import EightImg from '../../assests/img/trading-engine-eight.png';

const TradingEngine = () => {
  return (
    <Container id="WhiteLabel-Trading-Engine" className="">
      <div className="conainer wide-block">
      <Wrapper>
        <h1>
          Fastest and Most Secure <span className="gradient-text-darkblue">Trading Engine</span>
        </h1>
        <SliderContainer>
          <div>
            <Slider
              autoplay
              dots
              arrows={false}
              className="white-label-laptop-slider"
            >
              <Image src={FirstImg} alt="..." />
              <Image src={SecondImg} alt="..." />
              <Image src={ThirdImg} alt="..." />
              <Image src={FourthImg} alt="..." />
              <Image src={FifthImg} alt="..." />
              <Image src={SixthImg} alt="..." />
              <Image src={SeventhImg} alt="..." />
              <Image src={EightImg} alt="..." />
            </Slider>
          </div>
        </SliderContainer>
      </Wrapper>
      </div>
    </Container>
  );
};

export default TradingEngine;
