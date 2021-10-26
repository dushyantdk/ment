import React from 'react';
import { Container, Wrapper } from './styles/DarkSection';

const Description = () => {
  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <h1 className="text-white">
          Why is <span className="">Liquidity Solution</span> Important?
        </h1>
        <p>Doubtlessly, high liquidity factor indicates the stable and ideal market situation and ensures better prices for all stake holders due to large flow of sellers and buyers in the market. A buoyant market with high number of trading activities creates an equilibrium in market prices that is equally acceptable for all concerned. </p>
        <p>As explained above, high liquidity conveys the stable market prices and less prone to sudden and large swings in response to large trades that could alter the crypto prices. Because of huge number of buyers and sellers, prices are stable enough to hold the larger order in the liquid market. One more important benefit that liquidity offers is that one can have very accurate and precise technical analysis because chart formation is more accurate and detailed in the liquid market. </p>
        <p>
          High liquidity also allows for greater technical analysis accuracy
          since price and charting formation in a liquid market is more
          developed and precise.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Description;
