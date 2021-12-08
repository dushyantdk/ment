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
        <h1>How does<span className="gradient-text-darkblue">Cryptocurrency Liquidity Solution work?</span>
        </h1>
        <p>
        The liquidity of an asset is defined by the ease with which it can be converted into cash without difficulty on the financial markets. In the context of cryptocurrencies, liquidity is the ability to convert a coin into cash or another currency as quickly as possible.
        </p>
        <p>
        Cryptocurrencies, as well as all other tradable assets, require liquidity. Due to low liquidity levels, cryptocurrency prices spike during times of market volatility. On the other hand, if liquidity is high, the market is stable, and there are few fluctuations in price.
        </p>
        <p>
        In a liquid market, it is thus easier to buy and sell cryptocurrencies since buyers and sellers will be able to fulfill orders more quickly as a result of the large number of participants. Because of the fast-paced nature of the cryptocurrency markets, a trade can be entered or exited at any given moment.
        </p>
     {/*   <StatsContainer>
          <StatsWrapper>
            <Stats>
              <TopText>Market Pair</TopText>
              <BottomText>100+</BottomText>
            </Stats>
            {/* <Stats>
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
        </StatsContainer>
         </Container>*/}
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
