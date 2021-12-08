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
            <CardHeading>Neither a bank nor a chargeback fraud are involved</CardHeading>
            <CardDescription>
            Integration of cryptocurrency payments is a good idea for two good reasons: simplicity of acceptance and ease of international transfers. A bank account does not need to be opened, which can be a lengthy process without a respectable license.
              <br />
              <br />
              With cryptocurrencies, you can accept deposits and make withdrawals much cheaper than other payment methods, giving you a chance to offer your clients additional bonuses or benefits.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              <img src={SecondImg} alt="..." />
            </CardIcon>
            <CardHeading>
            Money transfers are cheaper and faster with a higher ROI
            </CardHeading>
            <CardDescription>
            Transferring cryptocurrency is cheaper than transferring money by bank or credit card, and it is faster. In less than five minutes, your clients' money is available on their trading accounts as opposed to being held in a bank payment system or similar.
              <br />
              <br />
              By reducing the time between when your client first sees your advert and when he starts trading, you also greatly increase the likelihood that your client will trade with you.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
