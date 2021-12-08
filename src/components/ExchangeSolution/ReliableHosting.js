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
            AWS Exchange Hosting is Scalable and Reliable
            </CardHeading>
            <CardSubText>
            Hosting solutions that support Ment Fintech's most demanding and highly loaded projects are dynamically scalable in response to client growth.
              <br />
              <br />
              Our company prefers Amazon Web Services (AWS) hosting because of its high levels of availability, scalability, and performance. However, AWS is more complex to manage and administer, so we handle it ourselves.
            </CardSubText>
          </CardDescription>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
