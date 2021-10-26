import React from 'react';
import {
  Container,
  Wrapper,
  CardContainer,
  Card,
  CardIcon,
  CardHeading,
} from './styles/QuickTour';
import ImgOne from '../../assets/img/kyc-cryptocurrency_prod1.png';
import ImgTwo from '../../assets/img/banking-cryptocurrency_prod1.png';
import ImgThree from '../../assets/img/exchange-cryptocurrency_prod1.png';
import ImgFour from '../../assets/img/transaction-cryptocurrency_prod1.png';

const QuickTour = () => {
  return (
    <Container>
      <Wrapper>
        <h2>
          Quick <span>Product Tour</span>
        </h2>
        <CardContainer>
          <Card>
            <CardHeading>01</CardHeading>
            <h5>
              Our software plugs seamlessly into your onboarding process,
              allowing full control of who can use your platform.
              <br />
              <br />
              Every trader goes through a KYC process, designed to eliminate
              fraud. Your customers can link their custody wallets to the
              platform as proof to other traders that the posted assets are in
              their full control.
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
              OTC platform locks in asset prices for 30 seconds while the deal
              is completing negotiations. This gives traders time to reconsider,
              re-price, validate or cancel.
              <br />
              <br />
              In Over-the-counter (OTC) trading, we offer deeper liquidity and a
              private, more personalized service to institutions and high
              net-worth individuals needing to fill large orders.
            </h5>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardHeading>03</CardHeading>
            <h5>
              Traders get full control. Users verify and validate deal details
              before executing each trade. Security is enhanced with 2-Factor
              Authentication (2FA) to ensure safety.
              <br />
              <br />
              Once the trader confirms execution, the trade is settled
              instantly. Blazingly fast.
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
              Get up to date information on deal transactions at the click of a
              button. Locate the transaction ID, time stamp, transaction amount,
              fees, counterparty information, and more. Now you can easily audit
              your deals from one screen.
              <br />
              <br />
              Our OTC desk can support all fiat currencies and digital assets
              currencies for the coverage of global markets.
            </h5>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default QuickTour;
