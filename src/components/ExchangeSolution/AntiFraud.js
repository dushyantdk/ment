import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardWrapper,
  CardHeading,
  SecurityContainer,
  SecurityWrapper,
  ListItem,
  SliderDescription,
  SecurityWrapperLeft,
} from './styles/AntiFraud';
import LockSvg from './LockSvg';

const MultiSecurity = ({ lockActive, handleLockState }) => {
  const data = [
    <SliderDescription>
     A KYC procedure on the Exchange requires users to specify the total amount of deposits they have made over a specified period of time. If the sum of these deposits is exceeded by a certain amount, an alert is fired to the compliance officer to investigate this.
    </SliderDescription>,

    <SliderDescription>
      If a user makes deposits and withdrawals but doesn't trade, it is the main
      sign that he is involved in money laundering so a system spots it and
      makes alerts
    </SliderDescription>,

    <SliderDescription>
      When a user sends a request to make a withdrawal to a wallet that has
      already been used by another user of the Exchange, it is a solid sign of a
      double accounting that should be checked by responsible person from
      security department
    </SliderDescription>,

    <SliderDescription>
      All the history of phone number changes of all the users is stored so if
      some other user will try to use same phone number as the other person the
      system will trigger an alert
    </SliderDescription>,

    <SliderDescription>
      When a user logs in his Client Area with the same IP like the other
      customer of the Exchange, the system sends an alert with the list of these
      users, their details, IP address, login dates and other info for further
      investigation
    </SliderDescription>,

    <SliderDescription>
      If a user is noticed in a frequent HFT trading activity, it may be a sign
      of using some exploit and has to be additionally checked to verify that
      his trading is fully legitimate
    </SliderDescription>,

    <SliderDescription>
      A strategy treated as toxic by both Forex and Crypto Exchanges could be
      spotted by this module of Anti-Fraud system so an alert will trigger when
      a user is spotted with using it
    </SliderDescription>,

    <SliderDescription>
      All the history of e-mail changes of all the users is stored so if some
      other user will try to use same e-mail as the other person the system will
      send an alert
    </SliderDescription>,

    <SliderDescription>
      It is possible to detect the users that make a big number of deposits that
      is usually treated as suspicious activity and has to be checked by finance
      or compliance team
    </SliderDescription>,
  ];

  return (
    <Container className="blue-bg">
    <Wrapper className="container">
      <Card>
        <CardWrapper>
          <h2 className="text-white">Fraud-Prevention System</h2>
        </CardWrapper>
        <SecurityContainer>
          <SecurityWrapperLeft>
            <ListItem
              active={lockActive === 0}
              onClick={() => handleLockState(0)}
            >
              EXCESSIVE DEPOSIT AMOUNT
            </ListItem>
            <ListItem
              active={lockActive === 1}
              onClick={() => handleLockState(1)}
            >
             LACK OF TRADING ACTIVITY WITH DIFFERENT WITHDRAWALS
            </ListItem>
            <ListItem
              active={lockActive === 2}
              onClick={() => handleLockState(2)}
            >
              MULTIPLE ACCOUNTS USE THE SAME WITHDRAWAL WALLET ADDRESS
            </ListItem>
            <ListItem
              active={lockActive === 3}
              onClick={() => handleLockState(3)}
            >
             MULTIPLE ACCOUNTS USING IDENTICAL PHONE NUMBERS
            </ListItem>
            <ListItem
              active={lockActive === 4}
              onClick={() => handleLockState(4)}
            >
              MULTIPLE ACCOUNTS USING THE SAME IP
            </ListItem>
            <ListItem
              active={lockActive === 5}
              onClick={() => handleLockState(5)}
            >
              TRADES AMOUNTS ARE EXCESSIVE
            </ListItem>
            <ListItem
              active={lockActive === 6}
              onClick={() => handleLockState(6)}
            >
             ARBITRAGE TRIANGLE
            </ListItem>
            <ListItem
              active={lockActive === 7}
              onClick={() => handleLockState(7)}
            >
            A SINGLE EMAIL IS REUSED BY MULTIPLE ACCOUNTS
            </ListItem>
            <ListItem
              active={lockActive === 8}
              onClick={() => handleLockState(8)}
            >
              DEPOSITS MADE REGULARLY
            </ListItem>
          </SecurityWrapperLeft>

          <SecurityWrapper>
            <LockSvg lockActive={lockActive} />
            <div>{data[lockActive]}</div>
          </SecurityWrapper>
        </SecurityContainer>
      </Card>
    </Wrapper>
  </Container>
  );
};

export default MultiSecurity;
