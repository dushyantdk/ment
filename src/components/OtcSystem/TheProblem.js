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
        <span className="gradient-text-darkblue">A dated process </span> is at fault
        </h1>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Vulnerability</CardHeading>
            <CardDescription>
            There is a considerable risk of vulnerability in the current exchange platforms (WhatsApp, Telegram, Skype, etc.). A hacker could breach the platform and steal millions.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>Absence of discovery</CardHeading>
            <CardDescription>
            Small and medium sized funds cannot be found due to an absence of discovery tools, which prevents growth and causes the industry to stagnate as more significant players get all the traffic.
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Openness</CardHeading>
            <CardDescription>
            Since OTC traders are anonymous, it makes it impossible to collect valuable data about them.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>Listed</CardHeading>
            <CardDescription>
            Keeping track of all the platforms is difficult, given that there are so many.
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgFive} alt="..." />
            <CardHeading>There is no all-inclusive solution</CardHeading>
            <CardDescription>
            A complete solution is not currently available on any platform.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgSix} alt="..." />
            <CardHeading>Efficiency is low</CardHeading>
            <CardDescription>
            Inefficient, long, and slow trading process. Today's platforms take hours, if not days, to process trades.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
