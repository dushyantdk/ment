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
        An Overview of  <span className="gradient-text-darkblue">the Product</span>
        </h1>
        <CardContainer>
          <Card>
            <CardHeading>01</CardHeading>
            <h5>
            You can fully control who can use your platform with our software that integrates seamlessly into your onboarding process.
              <br />
              <br />
              KYC is used to eliminate fraud from the trading process. As proof to other traders that the posted assets are fully controlled by your customers, your company's platform allows them to link their custody wallets to the platform.
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
            In OTC deals, there is a 30-second lock in the asset price while the negotiations are completed. The trader can, therefore, refund, re-price, validate, or cancel the order.
              <br />
              <br />
              Our Over-the-counter (OTC) trading service provides institutions and high-net-worth individuals with extra liquidity and individualized service in order to fill large orders.
            </h5>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardHeading>03</CardHeading>
            <h5>
            Full control is given to traders. Before each trade is executed, the details are verified and validated. To ensure safety, we utilize two-factor authentication (2FA).
              <br />
              <br />
              The trade is settled instantly as soon as the trader confirms execution. That's lightning fast.
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
            At the click of a button, you can get up-to-date deals information. Details about the transaction, such as the ID, time stamp, amount, fees, and counterparty, can be located. Now you can keep track of all your transactions in one screen.
              <br />
              <br />
              We support all fiat currencies and digital asset currencies on our OTC desk in order to cover all global markets.
            </h5>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default QuickTour;
