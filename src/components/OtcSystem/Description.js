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
        <h1>
        How does <span className="gradient-text-darkblue">OTC trading work?</span>
        </h1>
        <p>
        By definition, over-the-counter (OTC) trading is a transaction between two parties that does not require the oversight of an exchange.
        </p>
        <p>
        The assets that are traded over the counter include commodities to financial instruments such as cryptocurrencies and derivatives. Trading on OTC markets is done through dealer networks rather than traditional exchanges because OTC markets are decentralized and have no physical location. Middlemen, such as brokers, can provide assistance to traders, who may not be involved directly in the process.
        </p>
        <p>
        Currently, the daily volume of crypto OTC trading is larger than the majority of the major exchanges, according to some estimates. By comparison, TABB Group and Digital Assets Research found that every day in April 2018, about $250 million to $30 billion in trades occurred on the OTC market, while around $15 billion were traded on the exchanges.
        </p>
      {/*   <StatsContainer>
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
