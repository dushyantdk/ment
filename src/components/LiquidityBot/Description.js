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
        <h1>What is <span className="gradient-text-darkblue">Cryptocurrency Liquidity Solution?</span>
        </h1>
        <p>Liquidity is a financial term that is used to express the easiness by which any asset can be transformed into cash. In cryptocurrency exchange, liquidity is defined as the ability and easiness of a coin to be converted into cash or exchange to some other coins.  
        </p>
        <p>Arguably, liquidity factor is pivotally important for all tradable holdings and cryptocurrencies has no exception. When liquidity is lower, it conveys that volatility still exists into the market and may cause the surges in crypto prices. Contrarily, higher liquidity conveys the stability of market but still occasional fluctuations may be seen. </p>
        <p>So, buying or selling the cryptocurrencies is a market with higher liquidity is easier because it would be filled so rapidly owing to huge amount of market participants. Consequently, exiting or entering into the market is easily possible at any stage, provided the high-paced nature of the crypto markets. </p>
     
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
