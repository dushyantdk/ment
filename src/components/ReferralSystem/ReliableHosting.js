import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardDescription,
  CardHeading,
  CardSubText,
} from './styles/ReliableHosting';
import MapImage from '../../assests/img/exchange-pac_map.png';

const NoBank = () => {
  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <Card>
          <img src={MapImage} alt="..." />
          <CardDescription>
            <CardHeading>
            Reliable and Scalable Hosting for Exchange in AWS
            </CardHeading>
            <CardSubText>
            MentFintech uses hosting solutions that dynamically scale resources as the client base grows and supports the most demanding and highly loaded projects. We prefer Amazon Web Services (AWS) hosting because it offers 100% uptime, performance and scalability. However, it required great administration and management work that we manage at our own end. 
            </CardSubText>
          </CardDescription>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
