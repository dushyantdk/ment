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
            <h2 className="text-white text-center">One support team for multiple products</h2>
            <CardDescription>
            We will never say, "Sorry, this is not our responsibility" and refer you to someone else when something happens and you need help.
              <br /> We log everything, including all the comments and details from developers, across our entire product line so you can be sure we are helping you without asking you multiple questions.
             
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
