import React from 'react';
import {
  Container,
  Wrapper,
  StatsContainer,
  StatsWrapper,
  Stats,
  TopText,
  BottomText,
} from './styles/Description';

const Description = () => {
  return (
    <Container id="liquidity-introduction" className="p-y-100">
      <div className="container">
      <Wrapper>
        <h1 className="">
        What Makes Ment's  <span className="gradient-text-pink">Crypto Staking & Defi Lending Turnkey Different?</span>
        </h1>
        <p>
        Ment's secure, reliable and non-custodial infrastructure is used by leading exchanges, custodians and apps to earn rewards for their customers. Ment Fintech provides an easy-to-use solution for integrating crypto assets of all types.
        </p>
        <p>
        Furthermore, the firm provides 24/7/365 support, comprehensive APIs, and audited smart contracts in addition to crypto staking and defi lending solutions. The company currently offers fixed income services for over 30 PoS assets and defi assets.
        </p>
        <p>
        We have never had a slash, hack or extended downtime on our Crypto Staking & Defi Lending Turnkey in the last 3 years on dozens of different networks.
        </p>
        <p>
        Integrations are easy and seamless since all functions for staking, Defi lending, and reporting are available through the interface. Ment Fintech offers custom versions of its defi lending service as well as support for a wide variety of node types and custody schemes.
        </p>
    {/*    <StatsContainer>
          <StatsWrapper>
            <Stats>
              <TopText>Market Pair</TopText>
              <BottomText>100+</BottomText>
            </Stats>
             <Stats>
              <TopText>Margin Requirements</TopText>
              <BottomText>20%</BottomText>
            </Stats> 
            <Stats>
              <TopText>Liquidity Venues</TopText>
              <BottomText>5</BottomText>
            </Stats>
            <Stats>
              <TopText>Execution From</TopText>
              <BottomText>
                5 <span>ms</span>
              </BottomText>
            </Stats>
            <Stats>
              <TopText>Exchanges Connected</TopText>
              <BottomText>50+</BottomText>
            </Stats>
            <Stats>
              <TopText>Technical Support</TopText>
              <BottomText>24/7</BottomText>
            </Stats>
          </StatsWrapper>
        </StatsContainer>*/}
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
