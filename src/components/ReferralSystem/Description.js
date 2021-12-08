import React from 'react';
import { Container, Wrapper } from './styles/Description';

const Description = () => {
  return (
    <Container id="liquidity-introduction" className="p-y-100">
      <div className="container">
      <Wrapper>
        <h1>
        Referral & Affiliate System  <span className="gradient-text-darkblue">- Why Choose It?</span>
        </h1>
        <p>
        It's our Affiliate & Referral system that is the most effective and cost-effective on the market for any Cryptocurrency Exchange looking for a 100% affiliate / referral plugin. For a simple referral system on your Cryptocurrency Exchange, you don't need to buy expensive affiliate plugins.
        </p>
        <p>
        A referral system can easily be integrated into your cryptocurrency exchange platform with this plugin. Within minutes after the plugin has been activated, your users will be able to refer your exchange platform, and you will also be able to check how many people are actually registered through their referral. Registrations and rewards are tracked by this plugin.
        </p>
        <p>
        Two new columns will appear in the Users list: User ID and Referral ID along with Rewards. Admins have full control over their referrals, and they can see the progress of their referrals at a glance.
        </p>
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
