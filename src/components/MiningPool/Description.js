import React from 'react';
import {
  Container,
  Wrapper,
  StatsContainer,
  StatsWrapper,
  Stats,
  TopText,
  BottomText,
} from './styles/Description';

const Description = () => {
  return (
    <Container id="liquidity-introduction" className="p-y-100">
      <div className="container">
      <Wrapper>
        <h1>
          How Our <span className="gradient-text-darkblue">Mining Solution</span> Works?
        </h1>
        <p>Our Mining Pool System is designed and tailored for the great comfort of use. In addition to this, a very interactive and user-friendly interface is incorporated. So, you don’t need to have in-depth technical knowledge of crypto mining. When it is running, Miner is linked to the crypto exchanging platform and MentFintech opens the hashing power marketplace. 
        </p>
        <p>Miners simply select the speed and algorithm, the software fulfils that order by mining (hashing) when miners are mining. Software provides the computing power and miners get paid in terms of currency they opt to mine. </p>
        <p>Users rent or combine hashing power to earn block rewards for a range of blockchains. Simple dashboard gives you a quick overview of the most important information. You start mining with only one click! Control every device in your system. Monitor the temperature, load, fan RPM and profits. Precise benchmarking process will determine the most profitable algorithms for your hardware but you can always manually select the algorithms you want to support.</p>
     
      </Wrapper>
      </div>
    </Container>
  );
};

export default Description;
