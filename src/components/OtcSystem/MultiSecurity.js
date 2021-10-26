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
            <h2 className="text-white text-center">Multiple Security Layers</h2>
            <CardDescription>Security is all important for crypto exchanges and should never be compromised. We have developed an advanced security system to help prevent losses as a result of fraudulent activities and attacks.
            </CardDescription>
          </CardWrapper>
          <BorderedDiv>
            <h3 className="text-white">Security of funds</h3>
            <BorderedDescription>Security is the most important concept in crypto trading and our exchange was designed with sophisticated safety measures as almost all tokens and coins are held in cold storage. Cold wallets are highly secure hardware wallets that are not connected to the internet. Programmed algorithms regularly transfer client funds into cold storages thus providing the necessary level of safety.
            </BorderedDescription>
          </BorderedDiv>
          <SecurityContainer>
            <SecurityWrapper>
              <FirstSecurityDiv>
                <img src={FirstImg} alt="..." />
                Data Security
              </FirstSecurityDiv>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  2 modes of data backup
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Data backup takes place in two modes: Real-time replication and scheduled once a day with a snapshot of the current state.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  2FA Authorization
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                To access the multiple admin panels of Exchange, 2FA is used which is implemented as a confirmation link and sent immediately to the user’s e-mail with a token so as not allow entry to the back-end of the system by unauthorized persons.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Limited Access by IP
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Wherever it is technically possible, a login-password (or key) to a specific IP-address can be incorporated. In this way, for example, Our Exchange can get access to the payment system only from a pre-specified IP-address.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Encrypted Database
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Client personal data is stored in a database located on an encrypted partition. Even direct access to the server does not give any access to client data.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Secure replication of database
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Database replication proceeds over SSL to exclude MITM (man in the middle).
                </RemainingSecurityDescription>
              </RemainingSecurity>
            </SecurityWrapper>

            <SecurityWrapper>
              <FirstSecurityDiv>
                <img src={FirstImg} alt="..." />
                DSecure access
              </FirstSecurityDiv>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Secure data exchange with external systems
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Data exchange with all external systems (payment systems,etc.) proceeds over HTTPS using authentication key and verification of signature on each operation.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>SSH Keys</RemainingSecurityHeading>
                <RemainingSecurityDescription>
                To get access to the server MentFintech personnel use the SSH key. Access is limited to a number of persons, each of them having a computer with an encrypted disk. For example, laptop theft as one of the threats of a data breach causes no data leakage.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Safety of documents
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                No client documents are stored in our database. Our Exchange uses a third-party solution to handle data in a cloud. Third-party KYC providers store all client documents on a contract basis.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Monitoring of changes
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Monitoring of any changes in crucial data (i.e. a file with a password hash) takes place in real time with notifications over two different communications channels.
                </RemainingSecurityDescription>
              </RemainingSecurity>
              <RemainingSecurity>
                <RemainingSecurityHeading>
                  Logging of access
                </RemainingSecurityHeading>
                <RemainingSecurityDescription>
                Each access to the database server is restricted and logged.
                </RemainingSecurityDescription>
              </RemainingSecurity>
            </SecurityWrapper>
          </SecurityContainer>
          <LastDiv>
            <h2 className="text-white">DDoS Attack protection</h2>
            <BorderedDescription>
            Our servers are protected by a high-grade premium cloud-based DDoS mitigation solution. Consequently, you will enjoy 100% uptime with highly available, responsive and performant APIs, websites and applications. 
            </BorderedDescription>
          </LastDiv>
        </Card>
      </Wrapper>
    </Container>
   
  );
};

export default MultiSecurity;
