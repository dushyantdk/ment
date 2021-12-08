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
    <Container id="otc-features" className="p-y-100 blue-bg">
      <div className="container">
      <Wrapper>
        <h1 className="text-center text-white">
          <span className="gradient-text-red ">Features that set </span>the industry standard
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Infrastructure with high availability</CardHeading>
            <CardDescription>
            Kubernetes allows us to distribute across 5 clouds with automatic failover, so we have never experienced any downtime or service disruption in three years.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Best-in-class diligence</CardHeading>
            <CardDescription>
            A team of security and devops professionals from leading protocols, exchanges, and custodians reviewed our technical infrastructure.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Coverage of broadest spectrum of assets</CardHeading>
            <CardDescription>
            Ment Fintech offers rewards across an array of more than 100 crypto assets, and 50 more are coming soon.
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>Optimizing rewards</CardHeading>
            <CardDescription>
            Using a custom algorithm, we optimize rewards based on each chain and protocol we support.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>A universal API</CardHeading>
            <CardDescription>
            A seamless integration of staking, Defi lending, and reporting capabilities is made possible through programmatic access.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>Reporting Multi-Assets</CardHeading>
            <CardDescription>
            The block-level reporting is exportable and intended for fund administrators and accountants.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
      </div>
    </Container>
  );
};

export default TheProblem;
