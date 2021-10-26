import React from 'react';
import {
  Container,
  Wrapper,
  TopContainer,
  BottomContainer,
  ListItem,
  LeftDiv,
  RightDiv,
} from './styles/Coins';
import FirstTabImg from '../../assets/img/liquid-BusinessModel.png';
import SecondTabImg from '../../assets/img/liquidity-FlexibleDeployment.png';
import ThirdTabImg from '../../assets/img/liquidity-Multi-Dimensional.png';
import FourthTabImg from '../../assets/img/liquidity-RiskControl.png';
import FifthTabImg from '../../assets/img/liquidity-BusinessModel.png';

const Coins = ({ selectedAsset, handleAssets }) => {
  const data = [
    <>
      <LeftDiv>
        <h2>Adopting Ment Tech Underlying Technology</h2>
        <p>
          Cryptocurrency Liquidity Solution adopts the Ment Tech underlying
          technology, embraces over 100 technical talents from enterprises, and
          has been tested by over 500 global clients.
        </p>
      </LeftDiv>
      <RightDiv width="90%">
        <img src={FifthTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>First Digital Currency Liquidity Provider</h2>
        <p>
          It is the first digital currency liquidity solution provider in India,
          providing depths of over 200 exchanges and the lowest transaction
          charging rate in the industry.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={SecondTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Professional Financial-level Security Architecture</h2>
        <p>
          It relies on Ment Tech security services to ensure system security; In
          addition, Cryptocurrency Liquidity Solution adopts professional
          investment and trading network architecture of forex, securities and
          futures, and a variety of exception handling mechanisms to ensure
          security and stability of liquidity services.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={ThirdTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Rich Industry Experience</h2>
        <p>
          All Cryptocurrency Liquidity Solution team members come from
          traditional financial industries such as forex, securities, futures,
          with many years of experience, and also have been working on
          BlockChain for many years, with high professionalism.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={FourthTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Comprehensive Service Support</h2>
        <p>
          Cryptocurrency Liquidity Solution provides round-the-clock operation
          and maintenance support, maintains system security, monitors
          performance, responds to any online problems in real time, and also
          provides high-end customized one-to-one service.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={FirstTabImg} alt="..." />
      </RightDiv>
    </>,
  ];

  return (
    <Container id="liquidity-features">
      <Wrapper>
        <TopContainer>
          <h2>SOLUTION</h2>
          <h1>Features</h1>
          <ul>
            <ListItem
              selected={selectedAsset === 0}
              onClick={() => handleAssets(0)}
            >
              Adopting the Ment Tech Underlying Technology
            </ListItem>
            <ListItem
              selected={selectedAsset === 1}
              onClick={() => handleAssets(1)}
            >
              First Digital Currency Liquidity Provider
            </ListItem>
            <ListItem
              selected={selectedAsset === 2}
              onClick={() => handleAssets(2)}
            >
              Professional Financial-level Security Architecture
            </ListItem>
            <ListItem
              selected={selectedAsset === 3}
              onClick={() => handleAssets(3)}
            >
              Rich Industry Experience
            </ListItem>
            <ListItem
              selected={selectedAsset === 4}
              onClick={() => handleAssets(4)}
            >
              Comprehensive Service Support
            </ListItem>
          </ul>
        </TopContainer>
        <BottomContainer>
          {data[selectedAsset]}
          {/* <RightDiv>
            <img src={FirstTabImg} alt="..." />
          </RightDiv> */}
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default Coins;
