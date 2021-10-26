import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardHeading,
  CardDescription,
  CardImg,
  Divider,
  BottomContainer,
  ListItem,
  PrevArrow,
} from './styles/StructureSlider';
import Slider from 'infinite-react-carousel';
import FirstImg from '../../assests/img/exchange-slide-one.png';

const NoBank = () => {
  return (
    <Container className="blue-bg">
      <Wrapper className="container">
        <Slider
          arrows={true}
          className="exchange-slider"
          prevArrow={
            <PrevArrow>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.566313 7.09804L7.41903 0.420228C7.85495 -0.00478077 8.56171 -0.00478077 8.99741 0.420228C9.43315 0.844859 9.43315 1.53357 8.99741 1.95817L2.93382 7.86701L8.99724 13.7756C9.43298 14.2004 9.43298 14.8891 8.99724 15.3137C8.5615 15.7385 7.85477 15.7385 7.41886 15.3137L0.566137 8.63581C0.348268 8.42339 0.239456 8.14528 0.239456 7.86704C0.239456 7.58867 0.348478 7.31036 0.566313 7.09804Z"></path>
              </svg>
            </PrevArrow>
          }
          nextArrow={
            <PrevArrow right={true}>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.566313 7.09804L7.41903 0.420228C7.85495 -0.00478077 8.56171 -0.00478077 8.99741 0.420228C9.43315 0.844859 9.43315 1.53357 8.99741 1.95817L2.93382 7.86701L8.99724 13.7756C9.43298 14.2004 9.43298 14.8891 8.99724 15.3137C8.5615 15.7385 7.85477 15.7385 7.41886 15.3137L0.566137 8.63581C0.348268 8.42339 0.239456 8.14528 0.239456 7.86704C0.239456 7.58867 0.348478 7.31036 0.566313 7.09804Z"></path>
              </svg>
            </PrevArrow>
          }
        >
          <Card>
            <div>
              <CardHeading>
              <h2 className="text-white text-center">Cryptocurrency Exchange Structure Diagram</h2>
              </CardHeading>
              <CardDescription>
                A cryptocurrency exchange is a complex IT solution combined from
                several components. The
                <br /> frontend is integrated to the Exchange module which is
                connected via Web API.
              </CardDescription>
              <CardImg>
                <img src={FirstImg} alt="..." />
              </CardImg>
              <Divider />
              <BottomContainer>
                <ListItem>
                  Secure connection <span /> between components
                </ListItem>
                <ListItem>
                  Secure connection <span /> between components
                </ListItem>
                <ListItem>
                  All parts of the solution <span /> are customizable
                </ListItem>
                <ListItem>
                  The matching engine can work <span /> with internal and
                  external <span /> liquidity
                </ListItem>
              </BottomContainer>
            </div>
          </Card>

          {/* <Card>
            <div>
              <CardHeading>
                Cryptocurrency Exchange Structure Diagram
              </CardHeading>
              <CardDescription>
                A cryptocurrency exchange is a complex IT solution combined from
                several components. The
                <br /> frontend is integrated to the B2Core module which is
                connected to B2Trader via Web API.
              </CardDescription>
              <CardImg>
                <img src={FirstImg} alt="..." />
              </CardImg>
              <Divider />
              <BottomContainer>
                <ListItem>
                  Secure connection <span /> between components
                </ListItem>
                <ListItem>
                  Secure connection <span /> between components
                </ListItem>
                <ListItem>
                  All parts of the solution <span /> are customizable
                </ListItem>
                <ListItem>
                  The matching engine can work <span /> with internal and
                  external <span /> liquidity
                </ListItem>
              </BottomContainer>
            </div>
          </Card> */}

          {/* <Card>
            <div>
              <CardHeading>
                Cryptocurrency Exchange Structure Diagram
              </CardHeading>
              <CardDescription>
                A cryptocurrency exchange is a complex IT solution combined from
                several components. The
                <br /> frontend is integrated to the B2Core module which is
                connected to B2Trader via Web API.
              </CardDescription>
              <CardImg>
                <img src={FirstImg} alt="..." />
              </CardImg>
              <Divider />
              <BottomContainer>
                <ListItem>
                  Secure connection <span /> between components
                </ListItem>
                <ListItem>
                  Secure connection <span /> between components
                </ListItem>
                <ListItem>
                  All parts of the solution <span /> are customizable
                </ListItem>
                <ListItem>
                  The matching engine can work <span /> with internal and
                  external <span /> liquidity
                </ListItem>
              </BottomContainer>
            </div>
          </Card> */}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default NoBank;
