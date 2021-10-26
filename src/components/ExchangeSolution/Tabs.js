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
          to="hero-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Portfolio</ListItem>
        </Link>

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="WhiteLabel-Products"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Products</ListItem>
        </Link>

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="WhiteLabel-Features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Feature</ListItem>
        </Link>

        <Link
          activeClass="scroll-tab-active"
          className="scroll-tab"
          to="WhiteLabel-Trading-Engine"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Trading Engine</ListItem>
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
          to="WhiteLabel-Request-Demo"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ListItem>Request Demo</ListItem>
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
