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
            If you want help when something happens, we will never refuse and say it's not our responsibility, we will never direct you to others.
              <br /> Our Support Team of experts records everything, along with the developer's complete information and comments across our complete range of products, and helps you, also not asking many questions.
             
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
