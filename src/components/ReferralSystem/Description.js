import React from 'react';
import { Container, Wrapper } from './styles/Description';

const Description = () => {
  return (
    <Container id="liquidity-introduction" className="p-y-100">
      <div className="container">
      <Wrapper>
        <h1>
          Why Choose <span className="gradient-text-darkblue">Referral & Affiliate System?</span>
        </h1>
        <p>
          If you’re looking for a 100% affiliate / referral plugin for your
          Cryptocurrency Exchange, you should know that our Affiliate & Referral
          system is the best and the most cost-effective in the market. There’s
          no need to buy expensive affiliate plugins just to have a simple
          referral system onto your Cryptocurrency Exchange.
        </p>
        <p>
          With this plugin/module you can easily extend your cryptocurrecy
          exchange platform with a referral system. Immediately after the plugin
          activation you’ll be able to give your users the ability to refer your
          exchange platform and also to check how many and who really did
          registered by their referral. This plugin tracks registrations as well
          as rewards.
        </p>
        <p>
          The administrators will see in Users list two new columns: User ID and
          Referral ID along with Rewards. This way administrators have full
          control and a clear picture of their referrals activity.
        </p>
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
