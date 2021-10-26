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
          How <span className="gradient-text-darkblue">OTC Trading is defined?</span>
        </h1>
        <p>Usually, a deal that occurs directly between two stake-holders without monitoring exchanges is termed as Over-The-Counter abbreviated as OTC trading. 
        </p>
        <p>OTC trades include a wide range of holdings. These assets are ranging from financial instruments to commodities i-e derivatives and crypto currencies. Contrarily to the conventional exchanges, the Over-the-Counter market has no physical location and is purely decentralized. Hundred percent trading happens by the network of dealers. SO, trades do not involve direct processes. Usually, they acquire the help of brokers who called middlemen. 
        </p>
        <p>As per some authentic resources, crypto OTC exchanges own the larger volume than any other prominent exchanges out there. For example, TABB Group and Digital Assets Research performed a research study and found that during the April, 2018, crypto exchanges facilitated the $250 million to $30 billion trade volume per day. On the other hand, major exchanges handled around $15 billion during that period of time. 
        </p>
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
