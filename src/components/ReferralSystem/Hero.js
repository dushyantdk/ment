import React from 'react';
import Navigation from "../Header/Navigation/Navigation";
import {
  Container,
  Wrapper,
  LeftContainer,
  RightContainer,
  TopContainer,
  BottomContainer,
  Button,
  Overlay,
  StatsContainer,
  StatsWrapper,
  Stats,
  TopText,
  BottomText,
} from './styles/Hero';

const Hero = ({
  name,
  email,
  phone,
  company,
  message,
  onChangeHandler,
  submitHandler,
  loading,
}) => {
  return (
    <Container id="hero-section" className="postion-relative blue-bg">
      <video
        autoPlay
        loop
        muted
        src="https://ment-tech-labs-media.s3.ap-south-1.amazonaws.com/video/cryptoprime.mp4"
      />
      <Overlay />
      <Navigation/>
      <Wrapper>
        <LeftContainer>
          <h1>
            <span>Crypto Exchange</span>
            <br />Referral & Affiliate System
          </h1>
          <p>Multilevel Affiliate & Referral Program Infrastructure</p>
          <StatsContainer>
            <StatsWrapper>
              <Stats>
                <TopText>Client</TopText>
                <BottomText>100+</BottomText>
              </Stats>
              <Stats>
                <TopText>Rewards</TopText>
                <BottomText>$1M+</BottomText>
              </Stats>
              <Stats>
                <TopText>Execution</TopText>
                <BottomText>
                  5 <span>s</span>
                </BottomText>
              </Stats>
            </StatsWrapper>
          </StatsContainer>
        </LeftContainer>
        <RightContainer>
          <form onSubmit={submitHandler}>
            <TopContainer>
              <input
                type="text"
                required={true}
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => onChangeHandler(e)}
              />
            </TopContainer>
            <TopContainer>
              <input
                type="email"
                required={true}
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChangeHandler(e)}
              />
            </TopContainer>
            <TopContainer>
              <input
                type="number"
                required={true}
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e) => onChangeHandler(e)}
              />
            </TopContainer>
            <TopContainer>
              <input
                type="text"
                required={true}
                placeholder="Company"
                name="company"
                value={company}
                onChange={(e) => onChangeHandler(e)}
              />
            </TopContainer>
            <BottomContainer>
              <textarea
                required={true}
                placeholder="Message"
                value={message}
                name="message"
                data-gramm="false"
                onChange={(e) => onChangeHandler(e)}
              />
            </BottomContainer>
            <BottomContainer>
              <Button
                color="#1da1f2"
                fontColor="#fff"
                disabled={loading}
                type="submit"
              >
                Submit
              </Button>
            </BottomContainer>
            <BottomContainer>
              <span>
              Your information is collected so that you can hear from us about products and services that may be of interest to you. 
              Please see our <a href="/">Privacy Policy</a> for more information..
              </span>
            </BottomContainer>
          </form>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Hero;
