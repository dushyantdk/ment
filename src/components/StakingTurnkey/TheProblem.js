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
import ImgOne from '../../assets/img/binary-code.svg';
import ImgTwo from '../../assets/img/otc-hotel.svg';
import ImgThree from '../../assets/img/otc-binoculars.svg';
import ImgFour from '../../assets/img/otc-universe.svg';
import ImgFive from '../../assets/img/otc-teamwork.svg';
import ImgSix from '../../assets/img/otc-slow-motion.svg';

const TheProblem = () => {
  return (
    <Container id="otc-problem">
      <Wrapper>
        <h2>
          <span>The Problem:</span> An Outdated Process
        </h2>
        <CardContainer>
          <Card>
            <CardIcon src={ImgOne} alt="..." />
            <CardHeading>Vulnerability</CardHeading>
            <CardDescription>
              Current exchange platforms (Whatsapp, Telegram, Skype, etc.) pose
              significant vulnerability risk. Hackers can infiltrate and hijack
              trades, resulting in the loss of millions of dollars.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgTwo} alt="..." />
            <CardHeading>No discovery</CardHeading>
            <CardDescription>
              Lack of discovery tools for more legitimate and verified sources
              prevents small and medium-sized funds from being found and
              prevents growth, restricting the industry to remain stagnant as
              more significant players in the space receive all the traffic.
            </CardDescription>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <CardIcon src={ImgThree} alt="..." />
            <CardHeading>Transparency</CardHeading>
            <CardDescription>
              The layer of anonymity that OTC trading provides prevents the
              collection of valuable data on OTC traders.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={ImgFour} alt="..." />
            <CardHeading>Distributed</CardHeading>
            <CardDescription>
              There are too many platforms that exist and it can be challenging
              to keep track of all of them.
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
            <CardHeading>Inefficient</CardHeading>
            <CardDescription>
              Long, slow, lengthy, and inefficient trading process. Current
              platforms can take hours or even days.
            </CardDescription>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default TheProblem;
