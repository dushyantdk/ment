

import React , {useState}from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import {Helmet} from "react-helmet";
import Navigation from "../Header/Navigation/Navigation";
import BgImg from "../../assests/images/AboutUs/banner_min.png";
import AboutBanner from "../../assests/images/AboutUs/about-us.png";
import Withus from "../../assests/images/AboutUs/withus.png";
import LeftArrow from "../../assests/images/AboutUs/left_arrow.svg";
import RightArrow from "../../assests/images/AboutUs/right_arrow.svg";
import { Grid, Card } from './styles/CompanyThat';
import CEOImg from '../../assests/images/AboutUs/ceo-review.png';
import KevinImg from"../../assests/images/team/3.svg";
import global from '../../assests/images/AboutUs/global.png';
import { TopWrapper, ReviewText,} from './styles/CEO';
import ReviewOneImg from '../../assests/images/AboutUs/about-review-one.png';
import {ReviewWrapper,ImageContainer,RightContainer,ThirdDiv,} from './styles/OurMission';
import valueImg from '../../assests/images/AboutUs/crypto-staking-system.svg';
import established1 from "../../assests/images/established1.png";
import beginning1 from "../../assests/images/beginning1.png";
import family1 from "../../assests/images/family1.png";
import forex1 from "../../assests/images/forex1.png";
import Understands from "../../assests/images/understands.png";
import hedge1 from "../../assests/images/hedge1.png";
import serves from "../../assests/images/serves.png";
import shares1 from "../../assests/images/shares1.png";
import never from "../../assests/images/never.png";
import investment1 from "../../assests/images/investment1.png";
import provides from "../../assests/images/provides.png";
import grows from "../../assests/images/grows.png";
import hires1 from "../../assests/images/hires1.png";
import cares1 from "../../assests/images/cares1.png";
import { Carousel} from "react-bootstrap";
import {
ListContainer,
SmallLine,
SmallTxtContainer,
} from './styles/Milestone';
import { CacheableResponsePlugin } from "workbox-cacheable-response";
const AboutUs = ({ activeCompany }) => {
const [visible, setVisible] = useState(false)
const toggleVisible = () => {
const scrolled = document.documentElement.scrollTop;
if (scrolled > 300){
setVisible(true)
} 
else if (scrolled <= 300){
setVisible(false)
}
};
const scrollToTop = () =>{
window.scrollTo({
top: 0, 
behavior: 'smooth'
/* you can also use 'auto' behaviour
in place of 'smooth' */
});
};
window.addEventListener('scroll', toggleVisible);
return (
<div className="Aboutus innerfooter">
   <Helmet>
      <title>About Us - Ment</title>
      <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
      <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
      <meta property="og:url" content="https://Ment Fintech">
      </meta>
   </Helmet>
   <section className="about-header blue-bg">
      <Navigation/>
      <div className="container wide-block">
         <div className="row align-items-center">
            <div className="col-lg-8 text-white">
               <img src={BgImg} alt="..." />
               <p>About Us</p>
               <h1>MENT FINTECH</h1>
               <span>
               We are a team of passionate blockchain enthusiasts making the world
               a better place!
               </span>
            </div>
            <div className="col-lg-4">
               <img src={AboutBanner} alt="" />
            </div>
         </div>
      </div>
   </section>
   <section className="who-we">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
               <h1 className="mb-4">Who <span className="gradient-text-blue">we are</span></h1>
               <p>We will build for you a financial business of your own by connecting you to the
                  markets and providing you with all the innovative and cutting edge
                  technologies in a short space of time and at a reasonable cost.
               </p>
            </div>
         </div>
         <div className="row justify-content-center mt-5">
            <div className="col-lg-4">
               <p className="we-will">We will support you all the way</p>
            </div>
         </div>
      </div>
   </section>
   <section className="with-us">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
               <h1 className="mb-4">With us <span className="gradient-text-pink">you can</span></h1>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-5">
               <div className="withus-block">
                  <img src={Withus} alt="" />
                  <div>
                     <h2>Start</h2>
                     <p>a new business or empower your existing one</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="withus-block">
                  <img src={Withus} alt="" />
                  <div>
                     <h2>Ask</h2>
                     <p>for suggestions and get constructive advice</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-5">
               <div className="withus-block">
                  <img src={Withus} alt="" />
                  <div>
                     <h2>Learn</h2>
                     <p>about new industry features or ask us to implement them into your business model</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="withus-block">
                  <img src={Withus} alt="" />
                  <div>
                     <h2>Trade</h2>
                     <p>and manage your risks or allow others to trade by providing them with access to as many markets as possible.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="what-we">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <div className="title-block">
                  <h1 className="mb-4">What <span className="gradient-text-darkblue">we offer</span></h1>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-4">
               <div className="whatwe-block">
                  <h3>Integrations with all the most popular solutions </h3>
                  <p>in the market so our clients are able to get everything in one place</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="whatwe-block">
                  <h3>A personal account manager</h3>
                  <p>from the time of contract-signing is available in your native language and is on hand to serve you all way towards your success</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="whatwe-block">
                  <h3>Professional access to Exchange and Crypto liquidity</h3>
                  <p>via multiple connection methods is available for all our clients.</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="whatwe-block">
                  <h3>24/7 technical support</h3>
                  <p>We offer institutional-grade tools and technology and complement those capabilities with bespoke attention when it come to problem solving</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="whatwe-block">
                  <h3>A full range of services</h3>
                  <p>to start your own brokerage or exchange with minimum cost and maximum levels of technology and professionalism</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="where-we">
      <div className="container wide-block">
         <div className="row ">
            <div className="col-lg-12 text-center">
               <div className="title-block">
                  <h1 className="mb-4">What <span className="gradient-text-blue">we offer</span></h1>
               </div>
            </div>
         </div>
         <div className="row align-items-center mb-5">
            <div className="col-lg-6">
               <div className="where-offices">
                  <ul>
                     <li><span>India</span>Ment Tech Headquarter Office</li>
                     <li><span>Romania</span>Ment Tech Regional Branch</li>
                     <li><span>Ireland</span>Ment Tech Branch</li>
                     <li><span>UK</span>Ment Tech Branch</li>
                     <li><span>USA</span>Ment Tech Regional Branch</li>
                  </ul>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="where-offices">
                  <img src={global} alt=""/> 
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
               <div className="where-about">
                  <div className="where-about-block">
                     <div class="css-wq5ned">
                        <h3>200 <span>+</span></h3>
                        <p>Products and Services</p>
                     </div>
                     <div class="css-wq5ned">
                        <h3>150 <span>+</span></h3>
                        <p>Top-level Technicians</p>
                     </div>
                  </div>
                  <div className="where-about-block">
                     <div class="css-wq5ned">
                        <h3>500 <span>+</span></h3>
                        <p>Client Services Experience worldwide</p>
                     </div>
                     <div class="css-wq5ned">
                        <h3>20 <span>+</span></h3>
                        <p>Countries and Regions</p>
                     </div>
                  </div>
                  <div className="where-about-block">
                     <div class="css-wq5ned">
                        <h3>30 <span>+</span></h3>
                        <p>Industry Partner support</p>
                     </div>
                     <div class="css-wq5ned">
                        <h3>20000 <span>+</span></h3>
                        <p>Security Maintenance Hours</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="we-serve">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <div className="title-block">
                  <h1 className="mb-4">Who <span className="gradient-text-darkblue">we serve</span></h1>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="Investment-block col-lg-4">
               <h2 class="serve-block">
                  <img  className="ph3" src={established1} alt=""/>
                  Established
               </h2>
            </div>
            <div className="Investment-block col-lg-4">
               <h2 class="serve-block">
                  <img  className="ph3" src={beginning1} alt=""/>
                  Beginners
               </h2>
            </div>
         </div>
         <div className=" securty-block-7">
            <div className="row">
               <div className="col-lg-3 text-center mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={investment1} alt=""/>
                     <h2 className="mt-2">Investment firms</h2>
                  </div>
               </div>
               <div className="col-lg-3 text-center mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={forex1} alt=""/>
                     <h2 className="mt-2"> FOREX & Crypto Brokerage firms</h2>
                  </div>
               </div>
               <div className="col-lg-3 text-center mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={family1} alt=""/>
                     <h2 className="mt-2">Family offices</h2>
                  </div>
               </div>
               <div className="col-lg-3 text-center mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={hedge1} alt=""/>
                     <h2 className="mt-2">Hedge funds</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="p-y-100 company-that blue-bg">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-white text-center">
               <div className="title-block">
                  <h1 className="mb-4">We are <span className="">a company that:</span></h1>
               </div>
            </div>
         </div>
         <div className="securty-block-8">
            <div className="row ">
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={provides} alt=""/>
                     <h3 className=""> Provides</h3>
                     <p className="">advanced client service from the time of
                        contract-signing
                     </p>
                  </div>
               </div>
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={cares1} alt=""/>
                     <h3 className="">Cares</h3>
                     <p className="">for your success</p>
                  </div>
               </div>
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={grows} alt=""/>
                     <h3 className=""> Grows</h3>
                     <p className="">faster than others</p>
                  </div>
               </div>
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={hires1} alt=""/>
                     <h3 className=""> Hires </h3>
                     <p className="">industry professionals or those who have big ambitions</p>
                  </div>
               </div>
            </div>
            <div className="row ">
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={Understands} alt=""/>
                     <h3 className="">Understands</h3>
                     <p className="">responsibility for both our own
                        corporate clients and their end users
                     </p>
                  </div>
               </div>
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={shares1} alt=""/>
                     <h3 className=""> Shares</h3>
                     <p className="">expertise and industry insights in every
                        aspect of your business and guides you along the way
                     </p>
                  </div>
               </div>
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={serves} alt=""/>
                     <h3 className="">  We serve</h3>
                     <p className="">everyone on an equal footing with utmost professionalism and deep involvement in all the details</p>
                  </div>
               </div>
               <div className="col-lg-3 text-center text-white mb-4">
                  <div className="box-shadow-card p-3">
                     <img  width="25%" src={never} alt=""/>
                     <h3 className=""> Never stop</h3>
                     <p className="">ours growth and expansion. We
                        produce innovative solutions and add
                        additional features to existing products every month
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="ceo securty-block-9">
      <div className="container">
         <div className="row">
            <div className="col-lg-6 mb-4">
               <div className="box-shadow-card p-3">
                  <a
                     href="https://www.linkedin.com/company/ment-ie/"
                     target="_blank"
                     rel="noopener noreferrer"
                     >
                  <img className="oilso" src={KevinImg} alt="..." />
                  </a> 
                  <h3 className="mt-4">Kevin Connolly</h3>
                  <h4>Co-Founder & CEO</h4>
                  <h4>Head of European Operations, Dublin Ireland</h4>
                  <p className="">
                     At Ment Fintech, we understand that great work can only truly be accomplished if you're surrounded by people who inspire and motivate you! That's why we have a team of diverse individuals all coming from different cultural backgrounds, but somehow manage to feel like one big family working towards the same goal - to always deliver for our clients.
                  </p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="box-shadow-card p-3">
                  <a
                     href="https://www.linkedin.com/in/ujjwalsahay/"
                     target="_blank"
                     rel="noopener noreferrer"
                     >
                  <img  className="oilso" src={CEOImg} alt="..." />
                  </a>
                  <h3 className="mt-4">Ujjwal Sahay</h3>
                  <h4>Founder & MD</h4>
                  <p className="">
                     New technologies have penetrated all areas of our life. The FINTECH
                     industry is highly sensitive to every change in virtually all areas
                     of business.We work around the clock to improve all our products, constantly investing in people, technology, customer support and
                     infrastructure.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="our-mission">
      <div className="container">
         <div className="row ">
            <div className="col-lg-12 text-center">
               <div className="title-block">
                  <h1 className="mb-4">Our Mission</h1>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-12">
               <ReviewWrapper>
                  <ImageContainer>
                     <img src={ReviewOneImg} alt="..." />
                  </ImageContainer>
                  <RightContainer>
                     <ThirdDiv>
                        To create trading systems with a goal and become a market
                        standard, especially in crypto. Popularisation of blockchain
                        technology with people and governments to speed up changes in
                        the global financial system.
                     </ThirdDiv>
                  </RightContainer>
               </ReviewWrapper>
               <ReviewWrapper>
                  <RightContainer>
                     <ThirdDiv>
                        Our mission is to make Ment Fintech your preferred one-stop
                        destination by delivering outstanding brokerage technologies and
                        an exceptional user experience for your clients by consistently
                        fulfilling your business needs and customer expectations.
                     </ThirdDiv>
                  </RightContainer>
                  <ImageContainer>
                     <img src={ReviewOneImg} alt="..." />
                  </ImageContainer>
               </ReviewWrapper>
               <ReviewWrapper>
                  <ImageContainer>
                     <img src={ReviewOneImg} alt="..." />
                  </ImageContainer>
                  <RightContainer>
                     <ThirdDiv>
                        To elevate the fintech industry with our company’s solutions.
                     </ThirdDiv>
                  </RightContainer>
               </ReviewWrapper>
               <ReviewWrapper>
                  <RightContainer>
                     <ThirdDiv>
                        Our mission is to develop continuous improvement technology to
                        serve forex and crypto trading in the most accurate, efficient,
                        transparent and convenient way for investors.
                     </ThirdDiv>
                  </RightContainer>
                  <ImageContainer>
                     <img src={ReviewOneImg} alt="..." />
                  </ImageContainer>
               </ReviewWrapper>
            </div>
         </div>
      </div>
   </section>
   <section className="our-value blue-bg">
      <div className="container">
         <div className="row">
            <div className="col-lg-12  text-center">
               <div className="title-block text-white">
                  <h1 className="mb-4">Our <span className="gradient-bluetext">Values</span></h1>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-6">
               <div className="value-block">
                  <img src={valueImg} alt="" />
                  <h2>Clarity & Integrity</h2>
                  <p>We pride ourselves on our integrity and clarity in the way we do business. We always adopt an honest and sincere approach.</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="value-block">
                  <img src={valueImg} alt="" />
                  <h2>Working together</h2>
                  <p>Everything we do is a result of team effort. Our priority is to make sure all our teams are full of vitality and that they align their focus towards our common goal.</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="value-block">
                  <img src={valueImg} alt="" />
                  <h2>Empowering others</h2>
                  <p>We specialise in helping people build more efficient businesses. We are always available to support those who are in need.</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="value-block">
                  <img src={valueImg} alt="" />
                  <h2>Orientation on results</h2>
                  <p>We exert boundless energy into our products so you can save time. We get things done quickly and efficiently.</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="value-block">
                  <img src={valueImg} alt="" />
                  <h2>Constant improvement</h2>
                  <p>We are constantly evolving and innovating our products and services so that we can provide you with a range of innovative and practical solutions.</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="value-block">
                  <img src={valueImg} alt="" />
                  <h2>Working with passion</h2>
                  <p>We care about the end results of our work and deliver the best solutions possible with a sense of passion and purpose.</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="media-say">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <div className="title-block">
                  <h1 className="mb-0">What <span>media says</span></h1>
               </div>
            </div>
         </div>
         <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
               <Carousel className="text-white">
                  <Carousel.Item>
                     <div className="carousel-block">
                        <Carousel.Caption>
                           <p>Ment Fintech Trader’s Room expands payment options for clients</p>
                           <div className="review-name">Tuesday 6th August 2019 12:00:00 AM</div>
                        </Carousel.Caption>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className="carousel-block">
                        <Carousel.Caption>
                           <p>Your team’s professionalism and willingness to do whatever it takes with minimal interruption was recognized by everyone. My hats off to you for an outstanding job. You and your company are great partners and I enjoy working with you.</p>
                           <div className="review-name">Wednesday 12th February 2020 12:00:00 AM</div>
                        </Carousel.Caption>
                     </div>
                  </Carousel.Item>
                  <Carousel.Item>
                     <div className="carousel-block">
                        <Carousel.Caption>
                           <p>Ment Fintech expands liquidity, adds 61 crypto CFD pairs. The company now offers liquidity for a total of 100 CFD on cryptocurrency.</p>
                           <div className="review-name">Wednesday 4th December 2019 12:00:00 AM</div>
                        </Carousel.Caption>
                     </div>
                  </Carousel.Item>
               </Carousel>
            </div>
         </div>
      </div>
   </section>
   <section className="our-milstone">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <div className="title-block">
                  <h1 className="mb-4">Our <span>Milestones</span></h1>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
               <SmallLine></SmallLine>
               <SmallTxtContainer>
                  <h4>2018</h4>
                  <div></div>
                  <ListContainer>
                     <li>
                        <span>
                        September
                        <b />
                        </span>
                        <p>Ment Tech was officially established in India.</p>
                     </li>
                     <li>
                        <span>
                        September
                        <b />
                        </span>
                        <p>Ment Tech set up its UK Office.</p>
                     </li>
                     <li>
                        <span>
                        October
                        <b />
                        </span>
                        <p>The first exchange client got online.</p>
                     </li>
                  </ListContainer>
               </SmallTxtContainer>
               <SmallTxtContainer>
                  <h4>2019</h4>
                  <div></div>
                  <ListContainer>
                     <li>
                        <span>
                        May
                        <b />
                        </span>
                        <p>Have served more than 50 clients.</p>
                     </li>
                     <li>
                        <span>
                        July
                        <b />
                        </span>
                        <p>
                           Ment Tech wallet solution was officially launched online.
                        </p>
                     </li>
                     <li>
                        <span>
                        August
                        <b />
                        </span>
                        <p>The cloud exchange system was launched online.</p>
                     </li>
                     <li>
                        <span>
                        October
                        <b />
                        </span>
                        <p>The futures contract system was launched online.</p>
                     </li>
                     <li>
                        <span>
                        October
                        <b />
                        </span>
                        <p>
                           We have served clients from more than 10 countries in
                           Europe.
                        </p>
                     </li>
                     <li>
                        <span>
                        November
                        <b />
                        </span>
                        <p>We have served more than 150 clients.</p>
                     </li>
                     <li>
                        <span>
                        November
                        <b />
                        </span>
                        <p>
                           Global tour activities was launched, with the global partner
                           recruitment plan initiated.
                        </p>
                     </li>
                     <li>
                        <span>
                        December
                        <b />
                        </span>
                        <p>White-Label Solution was introduced.</p>
                     </li>
                  </ListContainer>
               </SmallTxtContainer>
               <SmallTxtContainer>
                  <h4>2020</h4>
                  <div></div>
                  <ListContainer>
                     <li>
                        <span>
                        January
                        <b />
                        </span>
                        <p>More New Products are introduced for sales.</p>
                     </li>
                     <li>
                        <span>
                        February
                        <b />
                        </span>
                        <p>Mining Pool System Solution was introduced for sales.</p>
                     </li>
                     <li>
                        <span>
                        March
                        <b />
                        </span>
                        <p>OTC Trading System was introduced.</p>
                     </li>
                     <li>
                        <span>
                        April
                        <b />
                        </span>
                        <p>Romania regional office has been started.</p>
                     </li>
                     <li>
                        <span>
                        May
                        <b />
                        </span>
                        <p>
                           All-In-One Wallet System was added in white-label solution.
                        </p>
                     </li>
                     <li>
                        <span>
                        June
                        <b />
                        </span>
                        <p>Funded with $400,000 in seeds.</p>
                     </li>
                     <li>
                        <span>
                        July
                        <b />
                        </span>
                        <p>Scaled new offices in several cities.</p>
                     </li>
                     <li>
                        <span>
                        August
                        <b />
                        </span>
                        <p>New stuff coming soon</p>
                     </li>
                  </ListContainer>
               </SmallTxtContainer>
            </div>
         </div>
      </div>
   </section>
   <div className="">
      <div className="team-join">
         <div className="team-sol hover-grow">
            <div className="team-titles">
               Our
               <span>Team</span>  
            </div>
            <div className="team-paras">
               We appreciate everyone who works with us and inspires<br/> us towards achieving our success.
            </div>
            <a href="/Team" class="learns">Learn More</a>
         </div>
         <div class="team-joiners hover-grow">
            <div class="team-titles">We are <span>hiring</span>
            </div>
            <div class="team-paras">We are always on the lookout for talent</div>
            <a href="/Career" class="learns">Vacancies</a>
         </div>
      </div>
   </div>
   <Footer/>
   <CopyRight/>
</div>
);
};
export default AboutUs;

