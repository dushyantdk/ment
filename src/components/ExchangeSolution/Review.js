import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Wrapper,
  LeftContainer,
  RightContainer,
  QuoteContainer,
  QuoteWrapper,
  InfoContainer,
  ShapeOne,
  ReviewWrapper,
  SliderContainer,
  DemoList,
  DemoListBottom,
  Button,
} from './styles/Review';
import Slider from 'infinite-react-carousel';
import ReviewShape from '../../assets/img/review-shape.svg';
import ArrowImg from '../../assets/img/next.svg';

const Review = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <h3>Request Demo Session</h3>
          {/* <h2>Speak to Our Experts</h2> */}
          <DemoList>
            <li>Wondering how the system works?</li>
            <li>Looking to understand the workflow?</li>
            <li>Thinking of how admin panel looks like?</li>
            <li>Want some more customisations?</li>
          </DemoList>
          {/* <a href="/">Better Call Saul</a> */}
          <Link to="/quotation">
            <Button color="#1199fa" fontColor="#fff" marginTop={20}>
              Better Call Saul
            </Button>
          </Link>
          <DemoListBottom>
            <li>
              <img src={ArrowImg} alt="..." /> Professional Support Team
            </li>
            <li>
              <img src={ArrowImg} alt="..." /> Special Attention to Start-up
              Teams
            </li>
            <li>
              <img src={ArrowImg} alt="..." /> Dedicated Project Managers & QA
              Engineers
            </li>
          </DemoListBottom>
        </LeftContainer>
        <RightContainer>
          <h3>SOLUTION</h3>
          <h2>What some awesome people say</h2>
          <Slider dots arrows={false} autoplay>
            <SliderContainer>
              <QuoteContainer>
                <QuoteWrapper>
                  <ShapeOne color="#50e0bc" />
                  <ReviewWrapper>
                    <p>
                      Your team’s professionalism and willingness to do whatever
                      it takes with minimal interruption was recognized by
                      everyone. My hats off to you for an outstanding job. You
                      and your company are great partners and I enjoy working
                      with you.
                    </p>
                    <InfoContainer>
                      <div>~ Majed Mohsen</div>
                    </InfoContainer>
                    <img src={ReviewShape} alt="..." />
                  </ReviewWrapper>
                  {/* <img src={MajedImg} alt="Majed Mohan" /> */}
                </QuoteWrapper>
              </QuoteContainer>
            </SliderContainer>

            <SliderContainer>
              <QuoteContainer>
                <QuoteWrapper>
                  <ShapeOne color="#50e0bc" />
                  <ReviewWrapper>
                    <p>
                      Ment tech is a perfect partner for blockchain
                      services. they are pleasant to work with. i highly
                      encourage people to work with them. they have great
                      expertise in cryptocurrency and blockchain technology.
                    </p>
                    <InfoContainer>
                      <div>~ Timo Halonen</div>
                    </InfoContainer>
                    <img src={ReviewShape} alt="..." />
                  </ReviewWrapper>
                  {/* <img src={MajedImg} alt="Majed Mohan" /> */}
                </QuoteWrapper>
              </QuoteContainer>
            </SliderContainer>

            <SliderContainer>
              <QuoteContainer>
                <QuoteWrapper>
                  <ShapeOne color="#50e0bc" />
                  <ReviewWrapper>
                    <p>
                      A team composed of good guys, reliable, and with great
                      preparation in the IT field, superlative communication and
                      management of all problems in an excellent way, also
                      perfect time management. They deserve trust and those who
                      hire them will surely be satisfied.
                    </p>
                    <InfoContainer>
                      <div>~ Nicholas Martin</div>
                    </InfoContainer>
                    <img src={ReviewShape} alt="..." />
                  </ReviewWrapper>
                </QuoteWrapper>
              </QuoteContainer>
            </SliderContainer>
          </Slider>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Review;
