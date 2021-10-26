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
            <CardHeading>Utility (Loyalty) Token</CardHeading>
            <CardDescription>
            The ability to issue a utility token and give it functionality. For example, a token may allow a discount on trading commission.
            </CardDescription>
            <Lists>
              <span>
                <span>
                A professional, correctly developed token increases the capitalization of your exchange.Attractive to users.
                </span>
              </span>
              <span>
                <span>Attractive to users.</span>
              </span>
            </Lists>
          </Card>

          <Card>
            <CardIcon>
              <img src={SecondImg} alt="..." />
            </CardIcon>
            <CardHeading>All products are built to work together</CardHeading>
            <CardDescription>Our engineers work closely to deliver products that are thoroughly tested and work well together. All our products are already integrated with each other and are ready to go live.
              <br />
              <br />
              We have a proven deployment process and conduct tests, firstly during the development of any software, secondly, prior to all updates of the live environment and also before any updates of the trading servers.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
