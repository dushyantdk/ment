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
import SecondImg from '../../assests/img/exchange-cryptocurrency_prod2.png';
import ThirdImg from '../../assests/img/exchange-cryptocurrency_prod3.png';

const Products = () => {
  return (
    <Container id="WhiteLabel-Products" className="p-y-100">
    <Wrapper className="container">
      <h1>
        It works <span className="gradient-text-darkblue">best with</span>
      </h1>
      <p>
      In order to ensure optimal performance, it is best to match our liquidity with top trading platforms.
      </p>
      <Card>
        
        <CardWrapper>
          <LeftCard>
            <CardHeading>
              <a className="mb-0" href="/otc-trading-system"><h2>OTC Trading System</h2></a>
              <p>
              When it comes to Over-the-counter (OTC) trading, deeper liquidity is one advantage coupled with a service that is private and customized to both entities and high net-worth individuals looking to fill large orders.
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
              <span>Innovative User Interface</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Several Types of Businesses Can Find Solutions</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Personalization</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Broad range of Integrations that are from third parties</span>
            </CardDescription>
          </RightCard>
        </CardWrapper>
        <CardWrapper>
          <LeftCard>
            <CardHeading>
              <a className="mb-0" href="/crypto-exchange-turnkey-solution">
                <h2>Liquidity solution for crypto exchange </h2>
              </a>
              <p>
              With the liquidity solutions system we offer, the liquidity of more than 100 popular currency pairs is offered, coupled with ultimate depth in trading and constant K-line charts.
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
              <span>Each second, 10000 requests are fulfilled</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Presence of a Commissions ladder</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Takes less than 5 microseconds to complete orders </span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>
              End-users gain discount on commissions as well as loyalty tokens 
              </span>
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
              In order to optimize holdings in fiat and staking coins that might merely stagnate in your exchange account, staking is a great option. Upon staking assets, staking rewards can be earned over your holdings and improve them through the compounding of future rewards.
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
              <span>Supports over 200 Coins, StableCoins & Tokens</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Supports STEEM, HIVE, ERC20 & omni tokens</span>
            </CardDescription>
            <CardDescription>
              <div />
              <span>Multiple blockchains underlined with Single Unified API </span>
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
