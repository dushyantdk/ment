import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Wrapper,
  TopContainer,
  TopWrapper,
  BottomContainer,
  Card,
  CardHeading,
  CardBody,
  CardBottom,
  BigPhoneImage,
  BigLaptopImage,
  Button,
} from './styles/WhyUs';
import PhoneImg from '../../assests/img/index_earn_iphonex-311bdf2e.svg';
import LaptopImg from '../../assests/img/pay-merchant-ui-1-17c8a970.svg';

const WhyUs = () => {
  return (
    <Container>
      <Wrapper>
        <TopContainer>
          <TopWrapper>
          <div>
              <h2 className="text-white">2,000,000</h2>
              <p>Total Active Users</p>
            </div>
            <div>
              <h2 className="text-white">USD 75M+</h2>
              <p>Total Crypto Purchased</p>
            </div>
            <div>
              <h2 className="text-white">USD 10M+</h2>
              <p>Total Crypto Invested</p>
            </div>
          </TopWrapper>
        </TopContainer>
        <BottomContainer>
          <Card>
            <CardHeading>
              <h1 className="text-center">A Guide for New Traders</h1>
              <h3>Easier than ever to build your cryptocurrency portfolio</h3>
            </CardHeading>
            <CardBody>
              <BigPhoneImage src={PhoneImg} alt="..." />
            </CardBody>
            <CardBottom>
              <h2>WHY US?</h2>
              <ul>
                <li>We offer instant buy and sell services</li>
                <li>An easy-to-use interface</li>
                <li>Support from a dedicated team</li>
              </ul>
              <Link to="/quotation">
                <Button color="#c26a57" fontColor="#fff" marginTop={10}>
                  Get Quote
                </Button>
              </Link>
            </CardBottom>
          </Card>

          <Card bg="#0E1B2E">
            <CardHeading color="#fff">
              <h1 className="text-center">For Advanced Traders</h1>
              <h3>Engage in trading devoid of Inexhaustible Liquidity</h3>
            </CardHeading>
            <CardBody>
              <BigLaptopImage src={LaptopImg} alt="..." />
            </CardBody>
            <CardBottom color="#fff">
              <h2>WHY US?</h2>
              <ul>
                <li>Trading without restrictions</li>
                <li>Spreads that are very low </li>
                <li>Access through single point</li>
              </ul>
              <Link to="/quotation">
                <Button color="#1199fa" fontColor="#fff" marginTop={20}>
                  Get Quote
                </Button>
              </Link>
            </CardBottom>
          </Card>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default WhyUs;
