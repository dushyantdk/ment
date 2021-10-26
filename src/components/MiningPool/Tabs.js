import React from 'react';
import { TabsContainer, ListItem } from './styles/Tabs';
import { Link } from 'react-scroll';

const Tabs = ({ fixedTop }) => {
  return (
    <TabsContainer fixed={fixedTop}>
      <ul>
        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="liquidity-introduction"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Introduction</ListItem>
        </Link>

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="liquidity-features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Features</ListItem>
        </Link>

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="liquidity-advantages"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Advantages</ListItem>
        </Link>

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="liquidity-security"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Security</ListItem>
        </Link>

        {/* <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="WhiteLabel-Customer-Case"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Customer Case</ListItem>
        </Link> */}

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="liquidity-operations"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Operations</ListItem>
        </Link>

        {/* <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="WhiteLabel-Instant-Deploy"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Instant Deploys</ListItem>
        </Link> */}
      </ul>
    </TabsContainer>
  );
};

export default Tabs;
