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
        <h2 className="text-white">A wide range of languages is supported</h2>
            <CardSubText>
            Among the eight languages we speak with our knowledgeable and friendly customer service team are English, Russian, Chinese, Farsi, Hindi, Spanish, Arabic, and Urdu.
            </CardSubText>
        </CardDescription>
        <img src={MapImage} alt="..." />
      </Card>
    </Wrapper>
  </Container>
  );
};

export default NoBank;
