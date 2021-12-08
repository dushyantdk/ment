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
          <span className="gradient-text-darkblue">Features that set </span> the industry standard
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>A safe and stable environment</CardHeading>
            <CardDescription>
            Using state-of-the-art technology, we ensure that we prevent various attacks and provide stable mining operations through a mining pool architecture that is uniquely ours.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Transparent & Open</CardHeading>
            <CardDescription>
            In addition, revenue data is open and transparent in real time using PPS +, FPPS, and other revenue settlement methods.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Deploying multiple nodes</CardHeading>
            <CardDescription>
            Expert technical team, global deployment across multiple nodes, and stable mining service 24 hours a day, 7 days a week.
            </CardDescription>
          </Card>
        </CardContainer>

        {/* <CardContainer>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>
              Auditable Transactions, Secure Trading
            </CardHeading>
            <CardDescription>
              Perform background checks and verify each trade and user. Every
              transaction is audited.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>Strict Deal Confidentiality</CardHeading>
            <CardDescription>
              Implement strict confidentiality for every offer, deal, and
              counter-offer within the platform. All transactions handled with a
              high degree of privacy.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>
              Greater Liquidity with Institutional Grade Compliance
            </CardHeading>
            <CardDescription>
              We partnered with PrimeTrust for compliance to ensure greater
              liquidity for our clients.
            </CardDescription>
          </Card>
        </CardContainer> */}
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
