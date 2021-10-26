import React from 'react';
import {
  Container,
  Wrapper,
  CardContainer,
  Card,
  CardIcon,
  CardHeading,
  CardDescription,
  DividerDiv,
} from './styles/IndustryLeading';
import ImgOne from '../../assests/img/otc-deal.svg';
import ImgTwo from '../../assests/img/otc-blazing-speed.svg';
import ImgThree from '../../assests/img/otc-dollar-shield.svg';
// import ImgFour from '../../assets/img/otc-security-shield.svg';
// import ImgFive from '../../assets/img/otc-file.svg';
// import ImgSix from '../../assets/img/otc-certificate.svg';

const TheProblem = () => {
  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <h1 className="text-center text-white">
          <span className="">Industry</span> Leading Features
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Safe & Stable</CardHeading>
            <CardDescription>Our mining pool applies the leading technology, effectively preventing various attacks and maintaining stable operation of the mining service with unique mining pool architecture.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Open & Transparent</CardHeading>
            <CardDescription>PPS +, FPPS and other revenue settlement methods are used to automatically settle and pay revenue daily, and the revenue data is open and transparent in real time.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Multi-Node Deployment</CardHeading>
            <CardDescription>Top technical team, multi-node deployment around the world, 24 * 7 stable global mining service.
            </CardDescription>
          </Card>
        </CardContainer>xs
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
