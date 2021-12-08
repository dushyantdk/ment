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
        What is the process of  <span className="gradient-text-darkblue">using our </span> Mining Solution?
        </h1>
        <p>
        Without a deep understanding of cryptocurrency mining, anyone can start mining. It features a very simple interface and is tailored for ease of use. Miners are connected to an exchange platform with the Ment Fintech open marketplace for mining power.
        </p>
        <p>
        While miners choose the algorithm and speed, miners mining the software perform the order by mining (hashing) the software - providing computational power to the network and earning a currency based on the algorithm they selected.
        </p>
        <p>
        Block rewards are earned by renting or combining hashing power for a variety of blockchains. Quickly get a sense of the most critical information with this dashboard. Start mining immediately! Manage all your devices. Keep track of the temperatures, loads, fan speeds, and profits. You can always choose the algorithms you want to support manually based on your benchmarking process, but using a precise benchmarking process will determine the most profitable algorithms for your hardware.
        </p>
     {/*   <StatsContainer>
          <StatsWrapper>
            <Stats>
              <TopText>Coin Support</TopText>
              <BottomText>100+</BottomText>
            </Stats>
             <Stats>
              <TopText>Margin Requirements</TopText>
              <BottomText>20%</BottomText>
            </Stats> 
            <Stats>
              <TopText>Rigs Support</TopText>
              <BottomText>10+</BottomText>
            </Stats>
            <Stats>
              <TopText>Execution From</TopText>
              <BottomText>
                5 <span>ms</span>
              </BottomText>
            </Stats>
            <Stats>
              <TopText>Hashrate</TopText>
              <BottomText>2000+<span>PH\s</span></BottomText>
            </Stats>
            <Stats>
              <TopText>Technical Support</TopText>
              <BottomText>24/7</BottomText>
            </Stats>
          </StatsWrapper>
        </StatsContainer> */}
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
