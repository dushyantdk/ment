import React from 'react';
import {
  Container,
  Wrapper,
  Grid,
  Card,
  CardIcon,
  CardHeading,
  CardDescription,
} from './styles/WeProvide';
import FirstImg from '../../assests/img/exchange-tk_man1.png';
import SecondImg from '../../assests/img/exchange-tk_man2.png';
import ThirdImg from '../../assests/img/exchange-tk_man3.png';

const NoBank = () => {
  return (
    <Container id="liquidity-operations" className="blue-bg pb-5">
      <Wrapper className="container">
        <h1 className="text-white mt-5 mb-4 text-center">We assign dedicated experts for each project</h1>
        <Grid>
          <Card>
            <CardIcon>
              <img src={FirstImg} alt="..." />
            </CardIcon>
            <CardHeading>Product/Project Manager</CardHeading>
            <CardDescription>
              All our clients are assigned a personal project manager who is
              always on hand to answer questions and deal with all their
              requirements.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              <img src={SecondImg} alt="..." />
            </CardIcon>
            <CardHeading>DevOps & QA Engineer</CardHeading>
            <CardDescription>
              Our DevOps & QA Engineer are deeply knowledgeable about our
              technical solutions and are there to assist our clients with any
              specifics needed.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              <img src={ThirdImg} alt="..." />
            </CardIcon>
            <CardHeading>UI & Graphics Engineer</CardHeading>
            <CardDescription>
              Our UI & Graphics Engineer will make sure to match the product
              UI/UX according to your company theme & UI kit and will help you
              with your business website landing page.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
