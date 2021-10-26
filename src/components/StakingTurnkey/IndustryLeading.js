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
          <span className="">Industry</span> Leading Features
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Readily Available Infrastructure</CardHeading>
            <CardDescription>
              In order to distribute across 5 clouds, we use Kubernetes encapsulated with automatic failover. This is the reason; we never observed extended downtime or slashing for last 3 years. 
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Diligence by the Best</CardHeading>
            <CardDescription>
            On continual basis, security and developer teams audit our technical infrastructure and ensure compliance with world-class protocols. 
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Broadest Coverage for Assets </CardHeading>
            <CardDescription>
              MentFintech ensures reward over the broadest assets coverage ranging 100+ available assets. In addition to these 100+ assets, 50+ are in pipeline. 
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>Excellent Rewards</CardHeading>
            <CardDescription>
            We use a custom set of rules to optimize the reward which is totally based on the specific dynamics of every protocol or chain we support.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>API for Everything</CardHeading>
            <CardDescription>
            To all staking, reporting, and defi lending functions makes integrations seamless and smooth.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>Reporting of Multiple-Asset</CardHeading>
            <CardDescription>
            Funds designed for accountants and Admins, block-level reports can be exportable.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
      </div>
    </Container>
  );
};

export default TheProblem;
