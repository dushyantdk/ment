import React from 'react';
import {
  Container,
  Wrapper,
  Grid,
  Card,
  CardIcon,
  CardHeading,
  CardDescription,
} from './styles/NoBank';
import FirstImg from '../../assests/img/exchange-no-bank.png';
import SecondImg from '../../assests/img/exchange-pac_crypto1.png';

const NoBank = () => {
  return (
    <Container className="blue-bg pt-4 pb-4">
      <Wrapper className="container">
        <Grid>
          <Card>
            <CardIcon>
              <img src={FirstImg} alt="..." />
            </CardIcon>
            <CardHeading>No Banks and No Chargeback Fraud</CardHeading>
            <CardDescription>
              Simplicity of acceptance and ease of international transfers are
              two good reasons to integrate cryptocurrency payments. There’s no
              need to open a bank account which can be a lengthy process without
              having a respected licence.
              <br />
              <br />
              Accepting deposits and making withdrawals via cryptocurrencies is
              many times cheaper than any other fiat payment systems, giving you
              the opportunity to offer additional bonuses or benefits to your
              clients.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              <img src={SecondImg} alt="..." />
            </CardIcon>
            <CardHeading>
              Get a higher ROI with faster and cheaper money transfers
            </CardHeading>
            <CardDescription>
              Cryptocurrency transfers are not just cheaper than bank or card
              transfers, but much faster. Your clients’ money is not held up in
              a bank payment system or similar for days or weeks, but is
              available for them on their trading accounts in as little as a few
              minutes.
              <br />
              <br />
              This has the added benefit of greatly decreasing the time period
              from when your client first saw your advert and the time that he
              starts trading.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
