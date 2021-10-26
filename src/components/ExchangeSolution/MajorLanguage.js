import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardDescription,
  CardHeading,
  CardSubText,
} from './styles/MajorLanguage';
import MapImage from '../../assests/img/exchange-more_lang.png';

const NoBank = () => {
  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <Card>
          <CardDescription>
            <h2 className="text-white">Major Languages Supported</h2>
            <CardSubText>
              Our knowledgeable and friendly customer service team can assist
              you in 8 languages including English, Russian, Chinese, Farsi,
              Hindi, Spanish, Arabic and Urdu.
            </CardSubText>
          </CardDescription>
          <img src={MapImage} alt="..." />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
