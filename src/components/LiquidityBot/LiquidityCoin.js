import React from 'react';
import {
  Container,
  Wrapper,
  LeftContainer,
  RightContainer,
  Grid,
  CoinContainer,
  // HoverContainer,
  CardIcon,
  CardHead,
  // ListItem,
  // MultiGrid,
  // MultiCoinContainer,
  // Button,
} from './styles/LiquidityCoin';
import CoinOneImg from '../../assests/img/spot-trading.svg';
import CoinTwoImg from '../../assests/img/otc-trading.svg';
import CoinThreeImg from '../../assests/img/liquidity-aggregation.svg';
import CoinFourImg from '../../assests/img/minning-pool.svg';
import CoinFiveImg from '../../assests/img/all-one-wallet.svg';
import CoinSixImg from '../../assests/img/crypto-staking-system.svg';
import CoinSevenImg from '../../assests/img/referal-solution.svg';
import CoinEightImg from '../../assests/img/leverage-trading-system.svg';

const Coins = ({ selectedAsset, handleAssets }) => {
  const txtData = [
    {
      heading: 'Cryptocurrency Exchange Modules',
      description:
        'We have spent many years building our product ecosystem to deliver modules ready to deploy. This means we can offer you ultra-competitive pricing and great execution on a wide selection of modules. Our products & solutions are incomparable in the industry.',
    },
    {
      heading: 'Turnkey & Liquidity Solutions',
      description:
        'Choose from our wide range of bespoke solutions designed for whatever type of financial business structure is required including brokerage, exchange and wallets. Our comprehensive solution comprising services and technologies that enables businesses to start a new Cryptocurrency exchange with minimal outlay in under 1 month.',
    },
    {
      heading: 'Cryptocurrency Liquidity Solutions',
      description:
        'We have spent many years building a deep liquidity network and investing in our pricing technology. This means we can offer you ultra-competitive pricing and great execution on a wide selection of markets. Our FOREX liquidity is incomparable in the industry.',
    },
  ];
  const data = [
    <Grid>
      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Spot Trading System</a>
          <p>
            Launch an exchange business with a spot matching engine for trading
            on popular cryptocurrencies. An ideal way to capitalise on today’s
            trends by offering your clients trading on crypto-crypto and
            crypto-fiat pairs.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinTwoImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">OTC Trading System</a>
          <p>
            In Over-the-counter (OTC) trading, we offer deeper liquidity and a
            private, more personalized service to institutions and high
            net-worth individuals needing to fill large orders.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinThreeImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Liquidity Aggregation Bot</a>
          <p>
            Our leading liquidity system provides liquidity of over 100
            mainstream currency pairs and popular currency pairs, as well as top
            trading depth and continuous K-line charts.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinFourImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Mining Pool System</a>
          <p>
            Start mining with your own ASIC hardware and benefit from our high
            payouts. Mine 100+ assets easily on the cloud with your device, or
            plug your own hardware into the high paying mining pool.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinFiveImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">All-In-One Wallet System</a>
          <p>
            Our all in one wallet system provides Peer to peer transactions and
            auto sync technology keeps the wallet all time synced to your
            exchange wallet. Supporting TOP100 + main chain currencies by a
            single wallet, greatly lower the user threshold and management
            burden of digital assets.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinSixImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Cryptocurrency Staking System</a>
          <p>
            Our non-custodial staking and De-Fi lending infrastructure enables
            investors to earn a yield on the widest variety of crypto assets.
            With support for 100+ assets and deliver rewards across the broadest
            range of crypto assets.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinEightImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Leverage And Margin Trading System</a>
          <p>
            Our spot leveraged trading system with bidding trading mechanism
            shares the depth of positions with spot transactions, providing
            users with short-term lending for supporting the capital turnover.
            Its risk prevention mechanisms guarantee a platform free from
            losses.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinSevenImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Referral & Affiliate System</a>
          <p>
            Our referral and affiliate system let you users bring traffic to
            your business in return of great crypto awards. Referral and
            affiliate system is the best way to enhance your business these
            days.
          </p>
        </CardHead>
      </CoinContainer>
    </Grid>,

    <Grid>
      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">White-Label Exchange Solution</a>
          <p>
            Ment Tech is a world-leading white label exchange solution provider.
            This page gives a detailed introduction of Product portfolios, risk
            control system, applicable teams and deployment process.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Crypto Brokerage Solution</a>
          <p>
            An all-in-one package of services and software solutions that helps
            entrepreneurs launch their new Crypto Broker with minimal effort,
            reduced time and lower costs.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Wallet Solutions</a>
          <p>
            As a wallet brand of Ment Tech specializes in wallet underlying
            technology development, helping PMs, exchanges, online merchants,
            small and medium blockchain enterprises, etc. To quickly build a
            wallet system and a sound blockchain ecosystem.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">KYC & AML Solution</a>
          <p>
            An all-in-one platform to onboard and verify your customers. With
            reliable Know Your Customer (KYC) and Anti-Money Laundering (AML)
            procedures, correct personal data handling, a friendly UX design,
            and fantastic scalability, you’ll never have to worry about ID
            verification ever again.
          </p>
        </CardHead>
      </CoinContainer>
    </Grid>,

    <Grid>
      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Liquidity Aggregation Bot</a>
          <p>
            Our Liquidity Aggregation bot brings orderbook and trade history
            data to your exchange from other exchanges with huge volume like
            Binance, Huobi etc. It is the best solution to make your exchange
            look alive even being new to the market.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Market Maker Bot</a>
          <p>
            The system provides better liquidity and depth of transaction,
            helping exchanges, brokers and institutional investors reduce costs
            and increase efficiency
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Crypto CFD Liquidity</a>
          <p>
            CFDs are a convenient way of trading cryptocurrencies. Ment Tech
            offers an incomparable Crypto CFD solution aggregating
            cryptocurrency exchanges, non-bank liquidity providers,
            cryptocurrency brokers, OTC orders of institutional clients, hedge
            funds and thousands of client-broker orders to create the deepest
            liquidity pool in the industry to meet all our client’s needs.
          </p>
        </CardHead>
      </CoinContainer>

      <CoinContainer>
        <CardIcon>
          <img src={CoinOneImg} alt="..." />
        </CardIcon>
        <CardHead>
          <a href="/">Enterprise Liquidity Solutions</a>
          <p>
            Liquidity is important for all tradable assets including
            cryptocurrencies and traders need to have transactions completed as
            quickly and as cost effectively as possible. LESS VOLUME ? No
            Worries! Our Enterprise Liquidity Solution will let your trades
            executed from other exchanges with huge volume like Binance, Huobi
            etc.
          </p>
        </CardHead>
      </CoinContainer>
    </Grid>,
  ];

  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <h3>Cryptocurrency Liquidity Solution Modules</h3>
        <div>
          <LeftContainer>
            <ul>
              {/* <ListItem
                selected={selectedAsset === 0}
                onMouseEnter={() => handleAssets(0)}
                onClick={() => handleAssets(0)}
              >
                Products
              </ListItem> */}
              {/* <ListItem
                selected={selectedAsset === 1}
                onMouseEnter={() => handleAssets(1)}
                onClick={() => handleAssets(1)}
              >
                Solutions
              </ListItem> */}
              {/* <ListItem
                selected={selectedAsset === 2}
                onMouseEnter={() => handleAssets(2)}
                onClick={() => handleAssets(2)}
              >
                Liquidity List
              </ListItem> */}
            </ul>
          </LeftContainer>
          <RightContainer>
            <div>
              <h1>{txtData[selectedAsset].heading}</h1>
              <p>{txtData[selectedAsset].description}</p>
            </div>
            {data[selectedAsset]}
          </RightContainer>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Coins;
