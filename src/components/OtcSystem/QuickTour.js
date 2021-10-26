import React from 'react';
import {
  Container,
  Wrapper,
  CardContainer,
  Card,
  CardIcon,
  CardHeading,
} from './styles/QuickTour';
import ImgOne from '../../assests/img/kyc-cryptocurrency_prod1.png';
import ImgTwo from '../../assests/img/banking-cryptocurrency_prod1.png';
import ImgThree from '../../assests/img/exchange-cryptocurrency_prod1.png';
import ImgFour from '../../assests/img/transaction-cryptocurrency_prod1.png';

const QuickTour = () => {
  return (
    <Container>
      <Wrapper className="container">
        <h1 className="text-center mb-4">
          Quick <span className="gradient-text-darkblue">Product Tour</span>
        </h1>
        <CardContainer>
          <Card>
            <CardHeading>01</CardHeading>
            <h5>Our system allows you full control and monitoring ability that can use the platform and plugs smoothly into the boarding process. In order to prevent any possible fraud, every trader has to go through the KYC process. Our system allows the buyers to link their wallets to the platform. This allows the buyers to ensure for other traders that they have full control over the posted assets. 
            </h5>
          </Card>
          <CardIcon>
            <img src={ImgOne} alt="..." />
          </CardIcon>
        </CardContainer>

        <CardContainer>
          <CardIcon>
            <img src={ImgTwo} alt="..." />
          </CardIcon>
          <Card>
            <CardHeading right={true}>02</CardHeading>
            <h5>
            There is always a room for the traders to reconsider, re-price, cancel or validate the transactions because OTC platform locks the prices of assets for 30 seconds while the negotiations are being made for the deal. We offer great incentives for the high net-worth clients and organizations in terms of greater liquidity and priority customer support enabling them to fill the big orders. 
            </h5>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardHeading>03</CardHeading>
            <h5>
            Brokers and traders get complete control, users are given with an option to verify and validate every trade before execution. In order to ensure safe transaction, Two-Factor Authentication (2FA) is in place. Trade is executed spontaneously upon confirmation by the trader. Amazingly Fast! 
            </h5>
          </Card>
          <CardIcon>
            <img src={ImgThree} alt="..." />
          </CardIcon>
        </CardContainer>

        <CardContainer>
          <CardIcon>
            <img src={ImgFour} alt="..." />
          </CardIcon>
          <Card>
            <CardHeading right={true}>04</CardHeading>
            <h5>
            Upon a single click, you will get up to date transactions information for research and analysis. You can keep your eye on time TRX ID, time and date stamp, amount, transaction charges, credentials of opposite party etc. Consequently, you can have a quick audit of your site from single screen. 
            </h5>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default QuickTour;
