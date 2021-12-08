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
      <Navigation/>
      <Wrapper className="">
        <LeftContainer>
          <h1>
            <span>Turnkey Solution </span>
            <br /> For Cryptocurrency Exchange
          </h1>
          <p>
          White-label exchange solutions are the core business of the Ment Fintech Group. Product portfolios, risk management systems, applicable teams, and deployment processes are explained in detail on this page.
          </p>
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
