import React from 'react';
import { Container, Wrapper } from './styles/DarkSection';

const Description = () => {
  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <h1 className="text-white">
        What is the  <span className="gradient-text-darkblue">importance of </span> Liquidity Solution?
        </h1>
        <p>
        As a result of the large number of buyers and sellers in the market, there is a high level of liquidity, which makes for better prices for all. Eventually, a high level of activity in a market will result in an equilibrium price that is acceptable for all parties.
        </p>
        <p>
        Liquidity also leads to stable prices as large trades do not cause large swings in prices, which could affect cryptocurrency prices and increase risk for the market as a whole. The large number of market participants and their orders makes a liquid market stable enough to withstand large orders.
        </p>
        <p>
        Due to the more developed and precise price and chart formation in a liquid market, high liquidity also allows for greater technical analysis accuracy.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Description;
