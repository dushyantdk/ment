import React from 'react';
import {
  Container,
  Wrapper,
  CardContainer,
  Card,
  CardIcon,
  CardHeading,
  CardDescription,
} from './styles/TheProblem';
import ImgOne from '../../assests/img/binary-code.svg';
import ImgTwo from '../../assests/img/otc-hotel.svg';
import ImgThree from '../../assests/img/otc-binoculars.svg';
import ImgFour from '../../assests/img/otc-universe.svg';
import ImgFive from '../../assests/img/otc-teamwork.svg';
import ImgSix from '../../assests/img/otc-slow-motion.svg';

const TheProblem = () => {
  return (
    <Container id="otc-problem" className="p-y-100">
      <Wrapper className="container">
        <h1 className="text-center">
        <span className="gradient-text-darkblue">The Issues </span> – An Obsolete Process 
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Susceptibility </CardHeading>
            <CardDescription>
            No one can deny the fact that currently available exchanging platform like Whatsapp, Skype, Telegram etc are highly susceptible. So, cyber criminals can infiltrate and may bring loss of millions of dollars to you. 
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Traceability</CardHeading>
            <CardDescription>
            There are no as such efficient and reliable traceability or discovery tools to find verified and legitimate sources. Consequently, small and medium sized are unable to be found and their growth hindered remarkably. So, only giant players receive the maximum traffic from the otc market and industry remains stagnant and restricted for small and medium sized players. 
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Transparency </CardHeading>
            <CardDescription>
            OTC-trading platform allows you to enjoy the advanced anonymity layer that wards off the scrapping of OTC brokers and traders. 
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>Diversity </CardHeading>
            <CardDescription>
            For anyone it becomes a headache to keep track of all of OTC Trading Platforms because there are many out there. 
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>No end-to-end solution</CardHeading>
            <CardDescription>
              No platform currently offers a complete solution.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>360 Degrees Solution </CardHeading>
            <CardDescription>
            Not even a single trading platform offers the 360 degrees solution. 
            </CardDescription>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>Deficiency </CardHeading>
            <CardDescription>
            Currently platforms are efficient enough to ensure speedy trading. Consequently, you face slow, longer and inefficient trading activities. Available platforms may take from hours to days for trading completion. 
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>The Solution </CardHeading>
            <CardDescription>
            Our platform is an optimum solution of executing high transaction volume. Our platform enables direct dealing owing to large pool of readily available deals. n. 
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
