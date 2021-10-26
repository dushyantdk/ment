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
    <Container id="otc-solution" className="blue-bg">
      <Wrapper>
        <h1 className="text-center text-white">
          The <span className="">Solution</span>
        </h1>
        <CardContainer>
          <Card>
            <CardIcon>
              <img src={ImgOne} alt="..." />
            </CardIcon>
            <CardText>
              <h4>
                High transaction volume platform featuring a pool of available
                deals enabling direct trading
              </h4>
            </CardText>
          </Card>
          <RightArrow src={RightArrowImg} alt="..." />
          <BottomRightArrow src={BottomArrowImg} alt="..." />
          <Card>
            <CardText right={true}>
              <h4>
              Customized Search for Audience and Advance Analytics Tools 
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
              A vast and verified network of OTC brokers and trading platforms across the globe. 
              </h4>
            </CardText>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheSolution;
