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
    <Container className="blue-bg">
      <Wrapper className="container">
        <h1 className="text-center text-white">
          The <span className="">Solution</span>
        </h1>
        <CardContainer>
          <Card>
            <CardIcon>
              <img src={ImgOne} alt="..." />
            </CardIcon>
            <CardText>
              <h4>Users rent or combine hashing power to earn block rewards for a range of blockchains.
              </h4>
            </CardText>
          </Card>
          <RightArrow src={RightArrowImg} alt="..." />
          <BottomRightArrow src={BottomArrowImg} alt="..." />
          <Card>
            <CardText right={true}>
              <h4>It supports multi-cryptocurrency mining and its hashrate ranks among the top rankings in the world. Our Mining Pool is safe, stable, profitable and has good services.
              </h4>
            </CardText>
            <CardIcon right={true}>
              <img src={ImgOne} alt="..." />
            </CardIcon>
          </Card>
          <LeftArrow src={LeftArrowImg} alt="..." />
          <BottomLeftArrow src={BottomArrowImg} alt="..." />
          <Card>
            <CardText right={true}>
              <h4>Our Mining Pool offers the first in the industry to develop and take advantage of “the Hashrate Firewall</h4>
            </CardText>
            <CardIcon right={true}>
              <img src={ImgOne} alt="..." />
            </CardIcon>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheSolution;
