import React from 'react';
import { Container, Wrapper } from './styles/DarkSection';

const Description = () => {
  return (
    <Container className="blue-bg p-y-100">
      <Wrapper className="container">
        <h1 className="text-white text-center">
        Expand Your  <span className="gradient-text-darkblue">Ecosystem with OTC Trading </span> System
        </h1>
        <p>
        Reduce development costs and time by months and years. You can set up a top-of-the-line trading desk instantly, customized to reflect your own branding. Due to the fact that Ment Fintech eliminates non-transparent, unauthorized intermediaries with the P2P solutions, this solution is also well suited for existing exchanges. Buyers and sellers interact directly.
          <br />
          <br />
          In addition to our execution and settlement services, we will be happy to meet your trading needs in a discreet, secure and ultra-competitive manner, regardless of the value of your blocks - whether they are worth $100,000,000, €10,000,000, or 2,000 Bitcoins. Our OTC desk provides coverage of global markets for both fiat and digital assets.
          <br />
          <br />
          Institutions and high-net-worth individuals seeking large orders can fill large orders over-the-counter (OTC) by taking advantage of our deeper liquidity. System-audited transactions will be calculated in real-time, and risk rates will be calculated.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Description;
