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
          Why Choose Ment's <span className="gradient-text-pink">Crypto Staking & Defi Lending Turnkey?</span>
        </h1>
        <p>Leading exchanges, custodians and apps rely on Ment’s secure, reliable and non-custodial infrastructure to earn rewards for their customers. MentFintech supports the broadest range of crypto assets with a single integration
        </p>
        <p>
        Leverage Crypto Staking &Defi Lending Turnkey high availability infrastructure, 24/7/365 devops support, comprehensive APIs, audited smart contracts and block-level reporting to offer fixed income services for 30+ PoS and defi assets.
        </p>
        <p>We never experienced slashing, hacking or unrealistically extended downtime for our Our Crypto Staking & Defi Lending Turnkey for 3 years on diversified networks. 
        </p>
        <p>We ensure programmed access to defi lending, all staking and reporting functionality. Consequently, integrations are made hassle-free and easy. We support a wide variety of node types, custody setups and even custom versions of MentFintech defi lending service.
        </p>
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
