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
        <span className="gradient-text-darkblue">What is </span> the process?
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Feel free to invite your friends</CardHeading>
            <CardDescription>
            Your friends can use your QR code or unique link to invite you with their own affiliate links.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Trade with them</CardHeading>
            <CardDescription>
            You get 50% of their escrow fee if they buy Bitcoin from your referral. Additionally, you get 10% of the escrow fee every time an affiliate purchases Bitcoin on Exchange.
            </CardDescription>
          </Card>
          <DividerDiv />
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Earn money</CardHeading>
            <CardDescription>
            Your affiliate wallet builds up automatically as you earn. Once they are in your Exchange wallet, they can be cashed out anytime.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
