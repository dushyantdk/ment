import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardContainer,
  CardIcon,
  CardText,
  RightArrow,
  LeftArrow,
  BottomRightArrow,
  BottomLeftArrow,
} from './styles/TheSolution';
import ImgOne from '../../assests/img/otc-mobile-money.svg';
import RightArrowImg from '../../assests/img/otc-solution-arrow-right.svg';
import LeftArrowImg from '../../assests/img/otc-solution-arrow-left.svg';
import BottomArrowImg from '../../assests/img/otc-dot-line-arrow-down.svg';

const TheSolution = () => {
  return (
    <Container id="otc-solution" className="p-y-100">
      <div className="container ">
      <Wrapper>
        <h1 className="text-center text-white">
          <span className="">Crypto Staking & Defi Lending</span> Made Easy
        </h1>
        <p>Crypto Staking & Defi Lending technical infrastructure was designed from the ground up for the unique requirements of crypto networks. We deliver rewards reliably while minimizing slashing risks.
        </p>
        <CardContainer>
          <Card>
            <CardIcon>
              <img src={ImgOne} alt="..." />
            </CardIcon>
            <CardText>
              <h4>
              In order to distribute across 5 clouds, we use Kubernetes encapsulated with automatic failover. This is the reason, we never observed extended downtime or slashing for last 3 years. 
              </h4>
            </CardText>
          </Card>
          <RightArrow src={RightArrowImg} alt="..." />
          <BottomRightArrow src={BottomArrowImg} alt="..." />
          <Card>
            <CardText right={true}>
              <h4>
              We have spent considerable resources implementing and testing proprietary software that prevents double signing in a highly fault tolerant setting.
              </h4>
            </CardText>
            <CardIcon right={true}>
              <img src={ImgOne} alt="..." />
            </CardIcon>
          </Card>
          <LeftArrow src={LeftArrowImg} alt="..." />
          <BottomLeftArrow src={BottomArrowImg} alt="..." />
          <Card>
            <CardIcon>
              <img src={ImgOne} alt="..." />
            </CardIcon>
            <CardText>
              <h4>
              On continual basis, security and developer teams audit our technical infrastructure and ensure compliance with world-class protocols. 
              </h4>
            </CardText>
          </Card>
        </CardContainer>
      </Wrapper>
      </div>
    </Container>
  );
};

export default TheSolution;
