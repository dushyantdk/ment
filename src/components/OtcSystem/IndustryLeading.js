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
import ImgFour from '../../assests/img/otc-security-shield.svg';
import ImgFive from '../../assests/img/otc-file.svg';
import ImgSix from '../../assests/img/otc-certificate.svg';

const TheProblem = () => {
  return (
    <Container className="blue-bg p-y-100">
      <Wrapper className="container">
      <h1 className="text-center text-white">
          <span className="">Salient </span> Features 
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Priority Accessibility for Best Available Deals </CardHeading>
            <CardDescription>
            Priority Accessibility for Best Available Deals m.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Amazingly High Speed </CardHeading>
            <CardDescription>
            With our desk, you will enjoy amazingly fast transactions and deals.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Insurance of worth upto 5 million </CardHeading>
            <CardDescription>
            In case of theft, loss, spiteful activity or hacking, Insurance of 5 million worth provides you peace of mind. 
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>
            Auditable Safe Trading 
            </CardHeading>
            <CardDescription>
            You will run a number of checks to verify and confirm each user and transaction. Our fool-proof system audits each transaction. 
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>Every Deal Is Strictly Confidential </CardHeading>
            <CardDescription>
            Our platform ensures strict privacy for each deal, offer, and proffer. High end privacy is in place for each transaction. 
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>
            Greater Liquidity with Institutional Grade Compliance
            </CardHeading>
            <CardDescription>
            In order offer deeper liquidity to our clients, we collaborate with PrimeTrust. 
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
