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
          <span className="gradient-text-blue">Simple Crypto Staking & Defi </span>Lending
        </h1>
        <p>
        Crypto Staking & Defi Lending's technical infrastructure was built with the requirements of crypto networks in mind.
        <br /> Rewards are reliably distributed while risks are minimized.
        
        </p>
        <CardContainer>
          <Card>
            <CardIcon>
              <img src={ImgOne} alt="..." />
            </CardIcon>
            <CardText>
              <h4>
              We have never suffered a slash or an extended downtime despite distributing across five clouds with Kubernetes.
              </h4>
            </CardText>
          </Card>
          <RightArrow src={RightArrowImg} alt="..." />
          <BottomRightArrow src={BottomArrowImg} alt="..." />
          <Card>
            <CardText right={true}>
              <h4>
              In a highly fault-tolerant setting, we have invested considerable resources in developing proprietary software that prevents double-signed transactions.
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
              Our technical infrastructure was reviewed by a team of security professionals and devops professionals from leading protocol, exchange, and custodian companies.
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
