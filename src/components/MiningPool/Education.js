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
          <h2 className="text-white">Tutorials and Materials</h2>
          <CardDescription  className="text-white">
            MentFintech is committed to working alongside its clients to ensure ultimate user satisfaction. An extensive range of tutorials and materials is available to assist with all technical aspects.
          </CardDescription>
        </Card>

        <Card>
          <h2 className="text-white">Education</h2>
          <CardDescription className="text-white">
           Education is an all-important part of our service. We offer a variety of training materials including videos and demos to help our clients understand the business.
          </CardDescription>
        </Card>
      </Grid>
    </Wrapper>
  </Container>
  );
};

export default NoBank;
