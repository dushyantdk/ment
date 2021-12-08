import React from 'react';
import {
  Container,
  Wrapper,
  Grid,
  Card,
  CardIcon,
  CardHeading,
  CardDescription,
  Lists,
} from './styles/UtilityToken';
import FirstImg from '../../assests/img/exchange-cryptocurrency_glass.png';
import SecondImg from '../../assests/img/exchage-group-5470.png';

const NoBank = () => {
  return (
    <Container className="blue-bg pt-4 pb-4">
      <Wrapper className="container">
        <Grid>
          <Card>
            <CardIcon>
              <img src={FirstImg} alt="..." />
            </CardIcon>
            <CardHeading>Tokens for Utility (Loyalty)</CardHeading>
            <CardDescription>
            A utility token can be issued and have functionality attached to it. An example could be to discount trading commissions through the token.
            </CardDescription>
            <Lists>
              <span>
                <span>
                Your exchange's capitalization will increase if your token is professionally designed and correctly developed. 
                </span>
              </span>
              <span>
                <span>Users will find it appealing.</span>
              </span>
            </Lists>
          </Card>

          <Card>
            <CardIcon>
              <img src={SecondImg} alt="..." />
            </CardIcon>
            <CardHeading>Designed to work together, all products are interconnected</CardHeading>
            <CardDescription>
            We work closely with our engineering team to deliver fully tested, well-integrated products. We have already integrated all our products and they are all ready for implementation.
              <br />
              <br />
              As part of our deployment process, we test software at every stage, including during development, pre-implementing updates in the live environment, and before deploying updates to the trading servers.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
