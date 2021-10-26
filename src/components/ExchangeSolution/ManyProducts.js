import React from 'react';
import {
  Container,
  Wrapper,
  Grid,
  Card,
  CardIcon,
  CardHeading,
  CardDescription,
} from './styles/ManyProducts';
import FirstImg from '../../assests/img/exchange-tk_book.png';

const NoBank = () => {
  return (
    <Container className="blue-bg pb-4">
      <Wrapper className="container">
        <Grid>
          <Card>
            <CardIcon>
              <img src={FirstImg} alt="..." />
            </CardIcon>
            <h2 className="text-white text-center">Many products – Single support team 24/7</h2>
            <CardDescription>
              If something happens and you need help, we will never say ,
              “Sorry, it is not our duty” and refer you on to someone else.
              <br /> Our technical support team logs everything, including all
              details and comments from developers across our entire
              <br /> product range and will help you without asking you numerous
              questions.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
