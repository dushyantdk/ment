import React from 'react';
import {
  Container,
  Wrapper,
  Grid,
  Card,
  CardHeading,
  CardDescription,
} from './styles/Education';

const NoBank = () => {
  return (
    <Container className="blue-bg pb-4">
    <Wrapper className="container">
      <Grid>
        <Card>
          <h2 className="text-white">Resources and Tutorials</h2>
          <CardDescription  className="text-white">
          To ensure the ultimate user experience, Ment Fintech works closely with their clients. To assist with all technical aspects, there are a wide range of tutorials and materials available.
          </CardDescription>
        </Card>

        <Card>
          <h2 className="text-white">Instruction</h2>
          <CardDescription className="text-white">
          Our service includes education. To help our clients better understand the business, we offer video training and demos.
          </CardDescription>
        </Card>
      </Grid>
    </Wrapper>
  </Container>
  );
};

export default NoBank;
