import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  CardWrapper,
  CardHeading,
  CardDescription,
  ProgressContainer,
  LeftContainer,
  RightContainer,
  LeftHeading,
  FullProgressContainer,
  FullProgress,
  FullProgressText,
  FullProgressSubText,
  SmallProgressContainer,
  SmallProgress,
  SmallSubText,
  RightBorder,
  RightSubText,
  BottomContainer,
} from './styles/TurnkeyAdvantages';
import FirstImg from '../../assests/img/exchange-20x.svg';
import SecondImg from '../../assests/img/exchange-10x.svg';
import ThirdImg from '../../assests/img/exchange-25x.svg';

const Products = () => {
  return (
    <Container id="liquidity-advantages" className="pt-4 blue-bg">
      <div className="container">
      <Wrapper>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="text-white mt-4">
            Advantages of  <span className="gradient-text-red ">Turnkey Packages</span>
            </h1>
            <p className="text-white">
            You can get started with a Turnkey cryptocurrency exchange.There are numerous benefits to this system, including ease of maintenance and ease of assistance.
            </p>
          </div>
        </div>
        <Card>
          <CardWrapper>
            <CardHeading>Effortlessly low-cost</CardHeading>
            <CardDescription>
            In addition to being highly cost-effective and time-saving, cryptocurrency exchange turnkey solutions are also highly efficient. The setup cost could be reduced by more than {' '}
              <span>$900,000,</span> and ongoing monthly costs like office space, technical support and development could be reduced by around{' '}
              <span>$25,000</span> per month. Furthermore, you can launch a year faster and save a lot of money, both of which are important in today's environment.
            </CardDescription>
            <ProgressContainer>
              <LeftContainer>
                <LeftHeading>Investing initially</LeftHeading>
                <FullProgressContainer>
                  <FullProgress></FullProgress>
                  <FullProgressText>{'>$1 000 000'}</FullProgressText>
                </FullProgressContainer>
                <FullProgressSubText>
                  Cost of development of own platform
                </FullProgressSubText>
                <SmallProgressContainer>
                  <SmallProgress color="linear-gradient(90deg, #0272d9 1.59%, #42a3fd 93.04%)" />
                </SmallProgressContainer>
                <SmallSubText>Turnkey exchange setup price</SmallSubText>
              </LeftContainer>
              <RightContainer>
                <RightBorder></RightBorder>
                <img src={FirstImg} alt="..." />
                <RightSubText>Cheaper</RightSubText>
              </RightContainer>
            </ProgressContainer>

            <ProgressContainer>
              <LeftContainer>
                <LeftHeading>Monthly payments</LeftHeading>
                <FullProgressContainer>
                  <FullProgress></FullProgress>
                  <FullProgressText>{'>$40 000'}</FullProgressText>
                </FullProgressContainer>
                <FullProgressSubText>
                  Burn rate of team of developers
                </FullProgressSubText>
                <SmallProgressContainer>
                  <SmallProgress color="linear-gradient(266.12deg,#16f1c2 22.33%,#00b68f 99.88%)" />
                </SmallProgressContainer>
                <SmallSubText>Technical support monthly fee</SmallSubText>
              </LeftContainer>
              <RightContainer>
                <RightBorder></RightBorder>
                <img src={SecondImg} alt="..." />
                <RightSubText>More efficient</RightSubText>
              </RightContainer>
            </ProgressContainer>

            <ProgressContainer>
              <LeftContainer>
                <LeftHeading>Time to launch</LeftHeading>
                <FullProgressContainer>
                  <FullProgress></FullProgress>
                  <FullProgressText>{'>1.5 years'}</FullProgressText>
                </FullProgressContainer>
                <FullProgressSubText>
                  Development of a new platform
                </FullProgressSubText>
                <SmallProgressContainer>
                  <SmallProgress color="linear-gradient(280.94deg,#fb5 8.83%,#f07c00 92.64%)" />
                  <FullProgressText>3 weeks</FullProgressText>
                </SmallProgressContainer>
                <SmallSubText>Turnkey exchange setup price</SmallSubText>
              </LeftContainer>
              <RightContainer>
                <RightBorder></RightBorder>
                <img src={ThirdImg} alt="..." />
                <RightSubText>Faster</RightSubText>
              </RightContainer>
            </ProgressContainer>

            <BottomContainer>
              <svg
                width="8"
                height="116"
                viewBox="0 0 8 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.511719"
                  width="7"
                  height="115"
                  fill="#01B890"
                ></rect>
              </svg>
              <p>
                <span>The development of your own cryptocurrency exchange will waste your time and money.</span> By launching your business {' '}
                <span>more than a year earlier</span> , you can spend the savings on marketing and legal services and increase your chances of success. Once you have confirmed demand from real customers, you can always start your own development.
              </p>
            </BottomContainer>
          </CardWrapper>
        </Card>
      </Wrapper>
      </div>
    </Container>
  );
};

export default Products;
