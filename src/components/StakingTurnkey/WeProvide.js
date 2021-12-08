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
        <h1 className="text-white mt-5 mb-4 text-center">Each project is assigned a dedicated expert</h1>
        <Grid>
          <Card>
            <CardIcon>
              <img src={FirstImg} alt="..." />
            </CardIcon>
            <CardHeading>Product/Project Manager</CardHeading>
            <CardDescription>
            Whenever our clients have questions or concerns, their personal project manager is always available to assist them.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              <img src={SecondImg} alt="..." />
            </CardIcon>
            <CardHeading>DevOps & QA Engineer</CardHeading>
            <CardDescription>
            In addition to having deep knowledge of our technical solutions, our DevOps and Quality Assurance Engineers are ready to assist our clients with any questions they may have.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>
              <img src={ThirdImg} alt="..." />
            </CardIcon>
            <CardHeading>UI & Graphics Engineer</CardHeading>
            <CardDescription>
            As part of our UI/UX & Graphic design service, we will create a website landing page that matches your companies theme & UI kit.
            </CardDescription>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
