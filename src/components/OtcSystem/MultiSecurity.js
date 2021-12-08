import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardWrapper,
  CardHeading,
  CardDescription,
  BorderedDiv,
  BorderedHeading,
  BorderedDescription,
  SecurityContainer,
  SecurityWrapper,
  FirstSecurityDiv,
  RemainingSecurity,
  RemainingSecurityHeading,
  RemainingSecurityDescription,
  LastDiv,
} from './styles/MultiSecurity';
import FirstImg from '../../assests/img/exchange-cloud.svg';

const MultiSecurity = () => {
  return (
    <Container id="liquidity-security" className="blue-bg">
      <Wrapper className="container">
        <Card>
          <CardWrapper>
            <h2 className="text-white text-center">Several layers of security</h2>
            <CardDescription>
            For crypto exchanges, security is of the utmost importance. To prevent losses due to fraudulent activities and attacks, we have developed an advanced security system.
            </CardDescription>
          </CardWrapper>
          <BorderedDiv>
            <h3 className="text-white">The safety of funds</h3>
            <BorderedDescription>
            Almost all of our tokens and coins are stored in cold storage, which is the most important aspect of cryptocurrency trading. Our exchange was designed with sophisticated safety measures to ensure your funds are safe. It is a highly secure hardware wallet which is disconnected from the internet. By using algorithms, funds are regularly transferred into cold storage, which provides the necessary level of security.
            </BorderedDescription>
          </BorderedDiv>
          <SecurityContainer>
            <SecurityWrapper>
              <FirstSecurityDiv>
                <img src={FirstImg} alt="..." />
                Security of data
              </FirstSecurityDiv>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Backup of data in two modes
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Two types of data backups are available: Real-time replication and a scheduled backup that occurs once a day.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Authorization through two-factor authentication
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Exchange utilizes two-factor authentication when accessing multiple admin panels, which is implemented as a link sent in an e-mail message and accompanied by a token to block unauthorized access to the system.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                IP-based access restrictions
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                In cases where it is technically possible, an IP-address can be associated with a login password (or key). Our Exchange, for instance, would only be able to access the payments system from an IP address that is predefined.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Database with encryption
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                A database containing client personal information is stored on an encrypted partition. Client data cannot even be accessed directly from the server.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Replication of databases securely
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                MITM (man in the middle) is avoided with SSL-enabled database replication
                </RemainingSecurityDescription>
              </RemainingSecurity>
            </SecurityWrapper>

            <SecurityWrapper>
              <FirstSecurityDiv>
                <img src={FirstImg} alt="..." />
                Security of access
              </FirstSecurityDiv>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                External data exchange that is secure
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                A unique authentication key is used for the exchange of data with all external systems (payment systems, etc.). The signature is verified after each exchange of data.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>SSH Keys</RemainingSecurityHeading>
                <RemainingSecurityDescription>
                SSH keys are used by Ment Fintech personnel to gain access to the server. There are only a few people who have access, each of whom has an encrypted disk on their computer. Laptop theft, which is one of the threats of data breaches, does not cause data leakage.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Document security
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Our database does not contain any client documents. We handle data in a cloud through a third-party solution. All client documents are stored by third-party KYC providers according to a contract.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Change monitoring
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                In real time, we monitor any change to vital data (such as a password hash) and send notifications across two different channels in case of a change.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                Access logs
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Whenever someone accesses the database server, they are logged.
                </RemainingSecurityDescription>
              </RemainingSecurity>
            </SecurityWrapper>
          </SecurityContainer>
          <LastDiv>
            <h2 className="text-white">Protection from DDoS attacks</h2>
            <BorderedDescription>
            High-grade DDoS mitigation is used to protect our servers. In doing so, bad traffic is prevented from disrupting websites, applications, and APIs while good traffic is allowed to pass freely, keeping them highly available and performant.
            </BorderedDescription>
          </LastDiv>
        </Card>
      </Wrapper>
    </Container>
   
  );
};

export default MultiSecurity;
