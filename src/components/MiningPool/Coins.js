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
// import FirstTabImg from '../../assets/img/liquid-BusinessModel.png';
import SecondTabImg from '../../assests/img/liquidity-FlexibleDeployment.png';
import ThirdTabImg from '../../assests/img/liquidity-Multi-Dimensional.png';
import FourthTabImg from '../../assests/img/liquidity-RiskControl.png';
import FifthTabImg from '../../assests/img/liquidity-BusinessModel.png';

const Coins = ({ selectedAsset, handleAssets }) => {
  const data = [
    <>
      <LeftDiv>
        <h2>Simple & Efficient Dashboard</h2>
        <p>Simple dashboard gives you a quick overview of the most important information. You start mining with only one click!</p>
      </LeftDiv>
      <RightDiv width="80%">
        <img src={FifthTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Device Monitoring</h2>
        <p>
          Control every device in your system. Monitor the temperature, load,
          fan RPM and profits.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={SecondTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Benchmark</h2>
        <p>
          Precise benchmarking process will determine the most profitable
          algorithms for your hardware but you can always manually select the
          algorithms you want to support.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={ThirdTabImg} alt="..." />
      </RightDiv>
    </>,

    <>
      <LeftDiv>
        <h2>Plugins</h2>
        <p>
          Plugins allow you to install 3rd party miners and turn your NiceHash
          Miner into the most advanced mining platform.
        </p>
      </LeftDiv>
      <RightDiv>
        <img src={FourthTabImg} alt="..." />
      </RightDiv>
    </>,

    // <>
    //   <LeftDiv>
    //     <h2>Comprehensive Service Support</h2>
    //     <p>
    //       Cryptocurrency Liquidity Solution provides round-the-clock operation
    //       and maintenance support, maintains system security, monitors
    //       performance, responds to any online problems in real time, and also
    //       provides high-end customized one-to-one service.
    //     </p>
    //   </LeftDiv>
    //   <RightDiv>
    //     <img src={FirstTabImg} alt="..." />
    //   </RightDiv>
    // </>,
  ];

  return (
    <Container id="liquidity-features">
      <Wrapper>
        <TopContainer>
          <h1 ><span className="gradient-text-darkblue"> Solution </span>
         Features</h1>
          <ul>
            <ListItem
              selected={selectedAsset === 0}
              onClick={() => handleAssets(0)}
            >
              DASHBOARD
            </ListItem>
            <ListItem
              selected={selectedAsset === 1}
              onClick={() => handleAssets(1)}
            >
              DEVICES
            </ListItem>
            <ListItem
              selected={selectedAsset === 2}
              onClick={() => handleAssets(2)}
            >
              BENCHMARK
            </ListItem>
            <ListItem
              selected={selectedAsset === 3}
              onClick={() => handleAssets(3)}
            >
              PLUGINS
            </ListItem>
            {/* <ListItem
              selected={selectedAsset === 4}
              onClick={() => handleAssets(4)}
            >
              Comprehensive Service Support
            </ListItem> */}
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
