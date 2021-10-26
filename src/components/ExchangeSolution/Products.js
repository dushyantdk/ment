import React from 'react';
import {
  Container,
  Wrapper,
  ProductContainer,
  LeftContainer,
  CenterContainer,
  RightContainer,
  IconContainer,
  CenterDescription,
  Card,
  ExpandDiv,
  SmallCenterDiv,
  ArrowDiv,
} from './styles/Products';
import ProductOneImg from '../../assests/img/icon-1.svg';
import ProductTwoImg from '../../assests/img/icon-2.svg';
import ProductThreeImg from '../../assests/img/icon-3.svg';
import ProductFourImg from '../../assests/img/icon-4.svg';
import ProductFiveImg from '../../assests/img/icon-5.svg';
import ProductSixImg from '../../assests/img/icon-6.svg';

const Products = ({ productDropdownOpen, handleProductDropdown }) => {
  const data = [
    <Card>
      <CenterDescription>
        <h4>High-Performance Matching Engine</h4>
        <p>
          Powerful memory matching, with over 50,000 tps for each trading pair.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Professional Transaction</h4>
        <p>
          It supports customized and third-party K-lines, technical analysis and
          drawing tools, and supports strategy orders and API orders.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Supporting Functions</h4>
        <p>
          It supports financial system, risk control system and centralized
          wallets. It supports all mainstream coins and their tokens, provides
          supporting background audit and operation CMS system, as well as rapid
          and stable system deployment and delivery.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Multiple Transaction Modes</h4>
        <p>
          It supports Fiat-to-Crypto and Crypto-to-Crypto transactions and other
          various forms of transactions, and direct purchase of fiat currencies
          without minimum limit.
        </p>
      </CenterDescription>
    </Card>,
    <Card>
      <CenterDescription>
        <h4>What is OTC Desk?</h4>
        <p>
          In Over-the-counter (OTC) trading, we offer deeper liquidity and a
          private, more personalized service to institutions and high net-worth
          individuals needing to fill large orders.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>High Volume Professional Transactions</h4>
        <p>
          Whether you are trading blocks of $100,000, €10,000,000 or 2,000
          Bitcoin, the OTC desk will provide you with execution and settlement
          services that are discreet, secure and ultra-competitive.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Safety Guaranteed</h4>
        <p>
          Each transaction will be audited by the system, risk rate will be
          calculated in real time.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Full Asset Support</h4>
        <p>
          Our OTC desk can support all fiat currencies and digital assets
          currencies for the coverage of global markets.
        </p>
      </CenterDescription>
    </Card>,
    <Card>
      <CenterDescription>
        <h4>Leading Liquidity System</h4>
        <p>
          It provides liquidity of over 100 mainstream currency pairs and
          popular currency pairs, as well as top trading depth and continuous
          K-line charts.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Professional Hedging Strategies</h4>
        <p>
          With professional hedging strategies, the exchange can manage its own
          positions.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>All Transaction Types Are Supported</h4>
        <p>
          It provides solutions for spot trading liquidity, futures trading and
          OTC trading liquidity.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Transaction Fees Rate and Spread</h4>
        <p>
          It supports flexible settings of spreads and commissions on the basis
          of aggregate quotations, so as to adjust and control costs and
          incomes.
        </p>
      </CenterDescription>
    </Card>,
    <Card>
      <CenterDescription>
        <h4>Quick Setup to Start Mining</h4>
        <p>
          Mine 100+ assets easily on the cloud with your device, or plug your
          own hardware into the high paying mining pool.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Hardware Mining Made Easy</h4>
        <p>
          Start mining with your own ASIC hardware and benefit from our high
          payouts. Type a message.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Benefits of Global Pool Network</h4>
        <p>
          Already have your own hardware or datacenter? Connect to our pool to
          maximize your profits and benefit from our monitoring features.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Monitor your mining anytime, anywhere</h4>
        <p>
          Easily organize mining activity with your team. Track statistics like
          earnings, hashrate, and workers on the go.
        </p>
      </CenterDescription>
    </Card>,
    <Card>
      <CenterDescription>
        <h4>Multiple Main Chain Currencies Support</h4>
        <p>
          Supporting TOP100 + main chain currencies by a single wallet, greatly
          lower the user threshold and management burden of digital assets.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Full Sync to your Exchange Wallet</h4>
        <p>
          Our all in one wallet system provides Peer to peer transactions and
          auto sync technology keeps the wallet all time synced to your exchange
          wallet.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Payment System</h4>
        <p>
          The background supports publishing lock-up activities and setting
          unlock rules. Users can participate in activities during the lock-up
          period and obtain cryptocurrencies according to the lock-up rules.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Financial Management System</h4>
        <p>
          Demand/term wealth management is available for digital currency.
          Parameters such as interest rates and lock-up term can be set to
          maintain or stably increase the asset value in a low-risk manner to
          meet users' investment needs.
        </p>
      </CenterDescription>
    </Card>,
    <Card>
      <CenterDescription>
        <h4>Fixed Income Solutions for Crypto Asset Investors</h4>
        <p>
          Our non-custodial staking and defi lending infrastructure enables
          investors to earn a yield on the widest variety of crypto assets.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Broadest Asset Coverage</h4>
        <p>
          With support for 100+ assets and deliver rewards across the broadest
          range of crypto assets.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Optimal Rewards</h4>
        <p>
          We use custom algorithm to optimize rewards based on the unique
          dynamics of each chain or protocol we support.
        </p>
      </CenterDescription>
      <CenterDescription>
        <h4>Turnkey Staking & Defi Lending</h4>
        <p>
          Leverage the high availability infrastructure, 24/7/365 devops
          support, comprehensive APIs, audited smart contracts and block-level
          reporting to offer fixed income services for 30+ PoS and defi assets.
        </p>
      </CenterDescription>
    </Card>,
  ];

  return (
    <Container id="WhiteLabel-Products" className="p-y-100">
      <Wrapper className="container">
        <h1>Stable and Secure <br /> <span className="gradient-text-darkblue">Full-line Products</span></h1>
        <ProductContainer>
          <LeftContainer>
            <IconContainer
              open={productDropdownOpen === 1}
              onClick={() => handleProductDropdown(1)}
            >
              <div>
                <ArrowDiv open={productDropdownOpen === 1} />
                <img src={ProductOneImg} alt="..." />
                <h4>Spot Trading System</h4>
              </div>
              <ExpandDiv>
                <p>{productDropdownOpen === 1 ? '-' : '+'}</p>
              </ExpandDiv>
            </IconContainer>
            {productDropdownOpen === 1 ? (
              <SmallCenterDiv>{data[0]}</SmallCenterDiv>
            ) : null}

            <IconContainer
              open={productDropdownOpen === 2}
              onClick={() => handleProductDropdown(2)}
            >
              <div>
                <ArrowDiv open={productDropdownOpen === 2} />
                <img src={ProductTwoImg} alt="..." />
                <h4>OTC Trading System</h4>
              </div>
              <ExpandDiv>
                <p>{productDropdownOpen === 2 ? '-' : '+'}</p>
              </ExpandDiv>
            </IconContainer>
            {productDropdownOpen === 2 ? (
              <SmallCenterDiv>{data[1]}</SmallCenterDiv>
            ) : null}

            <IconContainer
              open={productDropdownOpen === 3}
              onClick={() => handleProductDropdown(3)}
            >
              <div>
                <ArrowDiv open={productDropdownOpen === 3} />
                <img src={ProductThreeImg} alt="..." />
                <h4>Liquidity Aggregation Bot</h4>
              </div>
              <ExpandDiv>
                <p>{productDropdownOpen === 3 ? '-' : '+'}</p>
              </ExpandDiv>
            </IconContainer>
          </LeftContainer>
          {productDropdownOpen === 3 ? (
            <SmallCenterDiv>{data[2]}</SmallCenterDiv>
          ) : null}

          <CenterContainer>{data[productDropdownOpen - 1]}</CenterContainer>

          <RightContainer>
            <IconContainer
              open={productDropdownOpen === 4}
              onClick={() => handleProductDropdown(4)}
            >
              <div>
                <ArrowDiv right={true} open={productDropdownOpen === 4} />
                <img src={ProductFourImg} alt="..." />
                <h4>Mining Pool System</h4>
              </div>
              <ExpandDiv>
                <p>{productDropdownOpen === 4 ? '-' : '+'}</p>
              </ExpandDiv>
            </IconContainer>
            {productDropdownOpen === 4 ? (
              <SmallCenterDiv>{data[3]}</SmallCenterDiv>
            ) : null}

            <IconContainer
              open={productDropdownOpen === 5}
              onClick={() => handleProductDropdown(5)}
            >
              <div>
                <ArrowDiv right={true} open={productDropdownOpen === 5} />
                <img src={ProductFiveImg} alt="..." />
                <h4>All-In-One Wallet System</h4>
              </div>
              <ExpandDiv>
                <p>{productDropdownOpen === 5 ? '-' : '+'}</p>
              </ExpandDiv>
            </IconContainer>
            {productDropdownOpen === 5 ? (
              <SmallCenterDiv>{data[4]}</SmallCenterDiv>
            ) : null}

            <IconContainer
              open={productDropdownOpen === 6}
              onClick={() => handleProductDropdown(6)}
            >
              <div>
                <ArrowDiv right={true} open={productDropdownOpen === 6} />
                <img src={ProductSixImg} alt="..." />
                <h4>Cryptocurrency Staking System</h4>
              </div>
              <ExpandDiv>
                <p>{productDropdownOpen === 6 ? '-' : '+'}</p>
              </ExpandDiv>
            </IconContainer>
            {productDropdownOpen === 6 ? (
              <SmallCenterDiv>{data[5]}</SmallCenterDiv>
            ) : null}
          </RightContainer>
        </ProductContainer>
      </Wrapper>
    </Container>
  );
};

export default Products;
