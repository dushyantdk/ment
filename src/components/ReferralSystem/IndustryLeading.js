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
    <Container className="blue-bg p-t-50">
      <Wrapper className="container">
        <h1 className="text-center text-white">
        <span className="">How does</span> it works?
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Invite your friends</CardHeading>
            <CardDescription>
              Share your unique link or QR code with your friends and have them
              invite their with their own affiliate links.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Get them to trade</CardHeading>
            <CardDescription>
              Every time they buy Bitcoin you get 50% of their escrow fee as
              commission. You also make 10% of the escrow fee every time one of
              their affiliates buys Bitcoin on Exchange.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Get paid</CardHeading>
            <CardDescription>
              Your earning automatically build up in your affiliate wallet. You
              can cash them out anytime by moving them to your Exchange wallet.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
