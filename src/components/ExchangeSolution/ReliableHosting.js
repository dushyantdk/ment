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
              Ment Tech uses hosting solutions that dynamically scale resources
              as the client base grows and supports the most demanding and
              highly loaded projects.
              <br />
              <br />
              We prefer Amazon Web Services (AWS) hosting because it offers high
              levels of availability, scalability and performance, requiring
              higher amounts of management and administration that we organize
              entirely on our side.
            </CardSubText>
          </CardDescription>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
