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
    <Container id="liquidity-advantages" className="pt-5 blue-bg">
      <div className="container">
      <Wrapper>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="text-white">
              Turnkey Package <span className="gradient-text-red ">Advantages</span>
            </h1>
            <p className="text-white">
              A Turnkey cryptocurrency exchange is a great choice for getting
              started. Simplicity of maintenance and assistance along with
              cost-effectiveness are just a few of the many benefits available.
            </p>
          </div>
        </div>
        <Card>
          <CardWrapper>
            <CardHeading>A super cost-effective solution</CardHeading>
            <CardDescription>
              A cryptocurrency exchange turnkey solution is a super
              cost-effective and time-saving solution. You can save more than{' '}
              <span>$900,000</span> on setup costs and around{' '}
              <span>$25,000</span> on ongoing monthly costs for development,
              extra office space and a technical support team. As well as huge
              cost-savings, you can launch more than one year faster which is
              crucial in today’s fast changing environment.
            </CardDescription>
            <ProgressContainer>
              <LeftContainer>
                <LeftHeading>Initial investments</LeftHeading>
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
                <span>Don’t waste your time and huge budgets</span> on the
                development of your own cryptocurrency exchange. Boost your
                chances of success by launching your business{' '}
                <span>more than 1 year faster</span> and spend the money you
                save on marketing and legal services. Remember, it’s never too
                late to start your own development once you have confirmed
                demand from real customers.
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
