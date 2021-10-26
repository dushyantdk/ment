import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardWrapper,
  CardHeading,
  CardDescription,
  LeftCard,
  RightCard,
} from './styles/WorkBest';
import FirstImg from '../../assests/img/exchange-cryptocurrency_prod1.png';
import SecondImg from '../../assests/img/liquidity-cryptocurrency_prod2.png';
import ThirdImg from '../../assests/img/exchange-cryptocurrency_prod3.png';

const Products = () => {
  return (
    <Container id="WhiteLabel-Products" className="p-y-100">
      <Wrapper className="container">
        <h1>
          It Works <span className="gradient-text-darkblue">Best With</span>
        </h1>
        <p>
          Our liquidity is best combined with the leading industry trading
          platforms to
          <br /> provide the ultimate in performance and user satisfaction.
        </p>
        <Card>
          <CardWrapper>
            <LeftCard>
              <CardHeading>
                <a className="mb-0" href="/crypto-exchange-turnkey-solution">
                  <h2>Cryptocurrency Exchange Turnkey Solution</h2>
                </a>
                <p>
                  A Turnkey cryptocurrency exchange is a great choice for
                  getting started. Simplicity of maintenance and assistance
                  along with cost-effectiveness are just a few of the many
                  benefits available.
                </p>
                <div>
                  <a href="/crypto-exchange-turnkey-solution">
                    <img src={SecondImg} alt="..." />
                  </a>
                </div>
              </CardHeading>
            </LeftCard>
            <RightCard>
              <CardDescription>
                <div />
                <span>Fulfill up to 10000 requests per second</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>Commissions ladder</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>Order execution less than 5 microseconds</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>
                  Loyalty token with commission discount for end-users
                </span>
              </CardDescription>
            </RightCard>
          </CardWrapper>

          <CardWrapper>
            <LeftCard>
              <CardHeading>
                <a className="mb-0" href="/otc-trading-system"><h2>OTC Trading System</h2></a>
                <p>
                  In Over-the-counter (OTC) trading, we offer deeper liquidity
                  and a private, more personalized service to institutions and
                  high net-worth individuals needing to fill large orders.
                </p>
                <div>
                  <a href="/otc-trading-system">
                    <img src={FirstImg} alt="..." />
                  </a>
                </div>
              </CardHeading>
            </LeftCard>
            <RightCard>
              <CardDescription>
                <div />
                <span>Flagship User Interface</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>Solution for Multiple Business Types</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>Deep Customizations & Adjustments</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>Widest Range of External Integrations</span>
              </CardDescription>
            </RightCard>
          </CardWrapper>

          <CardWrapper>
            <LeftCard>
              <CardHeading>
                <a className="mb-0" href="/crypto-staking-defi-lending-turnkey-solution">
                 <h2>Cryptocurrency Staking System</h2>
                </a>
                <p>
                  Staking is a great way to maximize your holdings in staking
                  coins and fiat that would otherwise be sitting in your
                  exchange account. Once you have staked your assets you can
                  earn staking rewards on top of your holdings and grow them
                  further by compounding those future rewards.
                </p>
                <div>
                  <a href="/crypto-staking-defi-lending-turnkey-solution">
                    <img src={ThirdImg} alt="..." />
                  </a>
                </div>
              </CardHeading>
            </LeftCard>
            <RightCard>
              <CardDescription>
                <div />
                <span>200+ Coins, StableCoins & Tokens Supported </span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>STEEM, HIVE, ERC20 & omni tokens Supported</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>Single Unified API for multiple blockchains</span>
              </CardDescription>
              <CardDescription>
                <div />
                <span>KYC System</span>
              </CardDescription>
            </RightCard>
          </CardWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Products;
