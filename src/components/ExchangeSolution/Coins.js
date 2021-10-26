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
import FirstTabImg from '../../assests/img/BusinessModel.png';
import SecondTabImg from '../../assests/img/FlexibleDeployment.png';
import ThirdTabImg from '../../assests/img/Multi-Dimensional.png';
import FourthTabImg from '../../assests/img/RiskControl.png';
import FifthTabImg from '../../assests/img/SharedTransaction.png';

const Coins = ({ selectedAsset, handleAssets }) => {
  const data = [
    <>
      <LeftDiv>
        <h2>Clear Business Model</h2>
        <p>
          Ment Tech adheres to serving B-end customers as its core and
          focuses on providing blockchain technology services to global
          customers. It does not open itself and will not open exchanges in the
          future.
        </p>
      </LeftDiv>
      <RightDiv width="90%">
        <img src={FifthTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Flexible Deployment</h2>
        <p>
          We support privatization and SaaS deployment. You can simply and
          quickly deploy the entire exchange system. In addition, you can
          selectively deploy functional modules such as crypto-crypto
          transactions, leveraged transactions, OTC transactions, contract
          transactions, ETF.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={SecondTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Shared Transaction Liquidity</h2>
        <p>
          We incorporate the liquidity of more than 300 eco exchanges served by
          Ment Tech, provides shared OTC liquidity, and owns smart
          market-making services; in addition, we also provide independent
          solutions for derivatives liquidity management.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={ThirdTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Risk Control & High Safety</h2>
        <p>
          It provides over 30 defense mechanisms such as independent risk
          control system, behavior monitoring, cash withdrawal audit, fund
          traceability, withdrawal T + 1, strict signature of each fund flow,
          three-layer wallet system, DDoS Defense, flow cleaning etc. to fully
          guarantee fund security.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={FourthTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Multi-Dimensional Customer Service</h2>
        <p>
          We provide one-to-one training before sales, special guidance by
          special personnel during sales, round-the-clock manual online support
          and service after sales, as well as quick response and various
          response to problems and feedbacks.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={FirstTabImg} alt="..." />
      </RightDiv>
    </>,
  ];

  return (
    <Container id="WhiteLabel-Features">
      <Wrapper>
        <TopContainer>
          <h1 className="">Features</h1>
          <ul>
            <ListItem
              selected={selectedAsset === 0}
              onClick={() => handleAssets(0)}
            >
              Business Model
            </ListItem>
            <ListItem
              selected={selectedAsset === 1}
              onClick={() => handleAssets(1)}
            >
              Flexible Deployment
            </ListItem>
            <ListItem
              selected={selectedAsset === 2}
              onClick={() => handleAssets(2)}
            >
              Shared Transaction Liquidity
            </ListItem>
            <ListItem
              selected={selectedAsset === 3}
              onClick={() => handleAssets(3)}
            >
              Risk Control High Safety
            </ListItem>
            <ListItem
              selected={selectedAsset === 4}
              onClick={() => handleAssets(4)}
            >
              Multi-Dimensional Service
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
