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
          <span className="gradient-text-darkblue">Features that Set </span> the Industry Standard
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>The Best Deals Exclusively for you</CardHeading>
            <CardDescription>
            In our platform, you have access to exclusive, quality deals.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Lightning-fast</CardHeading>
            <CardDescription>
            Introduce bespoke deals and instantaneous settlements on a bespoke desk.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Insurance coverage up to $5 million</CardHeading>
            <CardDescription>
            Secure your data against theft, hacking, and malicious activity.
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>
            Transparency, security, and auditability
            </CardHeading>
            <CardDescription>
            Make sure that all trades and users are verified. All transactions are audited.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>Confidentiality clauses in all deals</CardHeading>
            <CardDescription>
            All offers, deals, and counter-offers on the platform should be treated with strict confidentiality. The platform should operate with a high level of privacy.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>
            Institutional-grade compliance with greater liquidity
            </CardHeading>
            <CardDescription>
            To guarantee greater liquidity for our clients, we partnered with PrimeTrust for compliance.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
