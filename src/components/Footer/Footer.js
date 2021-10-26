import React , {useState}from "react";
import MentWhite from "../../assests/images/m-logo-white.svg";

import { Button } from "react-bootstrap";
import ChatBox from "../ChatBox";

const Footer = () => {

    const [visible, setVisible] = useState(false);
  
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
      <>
    <section className="footer">
        <div className="footer-first-section">
            <div className="container wide-block">
                <div className="row mb-4">
                        <div className="col-lg-12 text-center">
                            <a href="#"><img className="footer-logo" width="100" src={MentWhite} alt="" /></a>
                        </div>
                </div>
                <div className="row py-4 text-white footer-links">
                        <div className="col-lg-3 social-links-footer">
                        <h3>Find us on</h3>
                        <ul>
                            <li><a href="https://www.instagram.com/mentfintech/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/Ment-Fintech-Ltd-105174808364154"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/ment_fintech"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://t.me/Mentfintech"><i class="fab fa-telegram-plane"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/ment-ie/"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UC_3SFkoApivR81hA2PJ9Kyw"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.reddit.com/user/MentFintech"><i class="fab fa-reddit-alien"></i></a></li>
                           {/* <li><a href="#"><i class="fab fa-discord"></i></a></li> */}
                        </ul>
                        </div>
                        <div className="col-lg-3">
                        <h3>Core Products</h3>
                        <ul>
                            <li><a href="/crypto-exchange-turnkey-solution">Exchange Turnkey Solution</a></li>
                            <li><a href="/cryptocurrency-liquidity-solution">Crypto Liquidity Solution</a></li>
                            <li><a href="/otc-trading-system">OTC Platform Turnkey</a></li>
                            <li><a href="/">KYC & AML Solutions </a></li>
                            <li><a href="/">White Label Crypto Banking Platform</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-3">
                        <h3>Prime Modules</h3>
                        <ul>
                            
                            <li><a href="/mining-pool-solution-crypto-exchange">Mining Pool System</a></li>
                            <li><a href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a></li>
                            <li><a href="/referral-platform-crypto-exchange">Referral & Affiliate System</a></li>
                            <li><a href="/">Wallet Solutions</a></li>
                            <li><a href="/">Tokenization</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-3">
                        <h3>Solutions</h3>
                        <ul>
                            <li><a href="/digital-and-crypto-banking">Banking Solution</a></li>
                            <li><a href="/nft-marketplace-software-platform">NFT Market</a></li>
                            <li><a href="/decentralized-crypto-exchange-platform">Decenterlize Exchange</a></li>
                            <li><a href="/ico-ieo-sto-platform">ICO/IEO/STO</a></li>
                            <li><a href="/">Crypto Exchange Licence</a></li>
                            <li><a href="/">Digital Banking Lincence</a></li>
                           
                        </ul>
                        </div>
                </div>
            </div>
        </div>
        <div className="footer-second-section text-white">
            <div className="container wide-block">
                <div className="row justify-content-between">
                    <div className="col-lg-3">
                        <h3>Our Address</h3>
                        <p>101, Monkstown Rd, Monkstown, Blackrock Co.Dublin Ireland</p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Locations</h3>
                        <p>MENT TECH, 47/1 , First floor, Bhawanipur Colony, Indore, 452001</p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Email Contact</h3>
                        <p><a href="#">info@ment.ie</a> <br/>
                            Mon - Fri, 9:00AM to 18:00PM</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-third-section text-white">
            <div className="container wide-block">
                <div className="row">
                    <div className="col-lg-12">
                        <p>Ment Fintech is a software technology provider, and do not own, hold, transact any crypto related businesses and funds. This site works as a simple showcase for services, solutions, products, & marketing services of multiple software technology, which operate under local laws and are properly licensed and authorized to provide services. If you want to get our specific services, solution, and products, for more info about the service company please contact with our sales team.</p>
                        <p>MentFintech" registered as a trademark in various countries of Asia under the registration protocols of the company.</p>
                        <p>The ownership for logo trademark and the word “MentFintech" (Reg. no. are xxx-xxx &xxx-xxx) is a property of Ment Fintech and it is registered in India with this organization number xxx-xxx. On this site, Ment Tech Pvt. Ltd does not offer any kind of advertisement about financial or other services.</p>
                        <p>Please read the documents carefully which are posted on this site: disclaimer & legal info, cookie & privacy policies. All these in formations are only available in English Language. You certify that you have a sufficient level of English to understand the textual content and legal implications of these documents. If your answer is "No", you confirm that you have use an expert interpreter to use the services. If you do not agree with the textual content of these documents, please immediately exit from the site.</p>
                    <ul className="d-flex">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-use">Terms Of Use</a></li>
                        <li><a href="/cookie-policy">Cookie Policy</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        {/*<a href="#" className="chatlio">*/}
        {/*    <p>Contact Us</p>*/}
        {/*</a>*/}
        <div className="footer-chat">
            <ChatBox open={(handleToggle) => (<button className="chatlio" onClick={handleToggle}>Contact Us</button>)} />
        </div>
    </section>
   <Button onClick={scrollToTop}  type="submit" className="css-mbv478">
    <i class="fas fa-chevron-up"></i>
    </Button>
    </>
  );
};

export default Footer;
