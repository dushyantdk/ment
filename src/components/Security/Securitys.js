

import React from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";

import Security from "../../assests/images/locker.png";
import PanelSecurty from "../../assests/images/security.svg";
import securityimg from "../../assests/images/securty.png";
import quant from "../../assests/images/quant.jpg";
const Securitys = () => {
return (
<>
<section className="innerfooter">
   
   <section className="py-5 py-md-5 securit blue-bg ">
   <Navigation/>
   <div className="container">
      <div className="row p-y-100 align-items-center mt-5">
         <div className="col-lg-8 mb-5 text-white">
            <h1 className="mb-4">Various layers of security</h1>
            <p>Crypto exchanges must maintain a high level of security and should never compromise it. To prevent losses resulting from fraudulent activities and attacks, we have created an advanced security system.</p>
            <p>In crypto trading, security is paramount, and our exchange is designed with advanced security features as nearly all coins and tokens are stored in cold storage. Unlike internet-connected hardware wallets, cold wallets are 100% secure. A programmatic algorithm regularly transfers client money to cold storage, ensuring sufficient security.</p>
            <p>When reviewing your pull requests, be aware of security issues. Avoid introducing new vulnerabilities.</p>
         </div>
         <div className="col-lg-4 text-center">
            <img width="85%"src={Security} alt=""/>
         </div>
      </div>
   </div>
   </section>
<section className="p-y-100 securt-blocks-4">
   <div className="container ">
      <div className="row">
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <h3 className="mb-2">Together, we can secure software</h3>
            <p>An approach to finding, reporting, and preventing security vulnerabilities based on community power.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <h3 className="mb-2">Database of security advisories</h3>
            <p>The backups are performed in two modes: real-time replication and one-time snapshots taken once a day.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
            <h3 className="mb-2">Learning-based security</h3>
            <p>All security incidents at Secure Data are investigated, responded to, and coordinated with our threat detection program.</p>
            </div>
         </div>
         <div className="col-lg-3  mb-4">
         <div className="box-shadow-card p-3">
            <h3 className="mb-2">Bounty for security bugs</h3>
            <p>In exchange for revealing critical vulnerabilities, we offer rewards of $30,000 or more under our bounty program.</p>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="pb-4">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <div className="blue-bg border-r-10 overflow-hidden p-50">
            <div className="row">
               <div className="col-lg-8 text-white">
                  <h1>Codes for security</h1>
                  <h2>From blueprint to implementation</h2>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 text-white mt-5 mt-md-5">
                  <h3>Fraud-Prevention System</h3>
                  <p>Trust is the cornerstone of our relationship with our customers. Data privacy and security are of utmost importance to us.
                  </p>
                  <ul className="text-white security-d">
                  <li>	An excessive deposit amount </li>
                  <li>  No trading activity after multiple withdrawals</li>
                  <li>  Multiple accounts using the same withdrawal wallet address</li>
                  <li> Multiple accounts using the same phone number</li>
                  <li> Use of the same IP address by multiple accounts</li>
                  <li>  Excessive trading volume</li>
                  <li>  Triangle of arbitrage</li>
                  <li>  Multiple accounts sharing the same email address</li>
                  <li>  Frequently deposited funds</li>

                  </ul>
               </div>
               <div className="col-lg-4 text-white mt-5  mt-md-5">
                  <h3>Integrations and teams</h3>
                  <p>Make sure your work is secure by managing teams, projects, and integrations.</p>
                  <ul className="text-white security-d">
                     <li>Control of access in a fine-grained manner </li>
                     <li>LDAP</li>
                     <li>SAML</li>
                     <li>Base repository permissions</li>
                     <li>Levels of access to the repository (Read, Write, and Administrator)</li>
                     <li>Using webhooks for organization-wide security monitoring</li>
                     <li>OAuth Application Whitelists </li>
                     <li>Third-party integration access controls </li>
                  </ul>
               </div>
               <div className="col-lg-4 text-white mt-5  mt-md-5">
                  <h3>Monitoring and evaluation of projects</h3>
                  <p>As you build, monitor security to ensure you're working with the right people.</p>
                  <ul className="text-white security-d">
                     <li>Requirements for reviews </li>
                     <li>Checks on the current status </li>
                     <li>Testing and continuous integration (CI) built-in </li>
                     <li>Keys with read-only access </li>
                     <li>Deployments API </li>
                     <li>Keeping track and logging </li>
                     <li>Controls for evidence </li>
                  </ul>
               </div>
            </div>
            </div>
         </div>
      </div>
      
   </div>
</section>
<section className="">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-7 mb-2">
            <h2 className="gradient-text-red">Security is a key component of our Software Development Lifecycle.</h2>
            <p className="mt-5">Our coding lifecycle incorporates security. We analyze dynamic and site source code using both site and peer-review tools.</p>
         </div>
         <div className="col-lg-5">
            <img width="85%"src={PanelSecurty} alt=""/>
         </div>
      </div>
      <div className="row my-5 align-items-center">
         <div className="col-lg-5">
            <img width="85%"src={securityimg} alt=""/>
         </div>
         <div className="col-lg-7 mb-2">
            <h2 className=" mt-5 gradient-text-red">Our company uses Multi-Factor Authentication (MFA).</h2>
            <p className="mt-5">A multifactor authentication system encrypts transactions, including passwords, biometrics, email, phone, and authenticator verification.</p>
         </div>
      </div>
   </div>
</section>
<section className="py-5 py-md-5 securit blue-bg ">
   <div className="container">
      <div className="row p-y-100 align-items-center">
         <div className="col-lg-6 mb-5 text-white">
            <h1 className="mb-4">Quantum Cryptography</h1>
            <p>We provide long-term data protection with QKD (Quantum Key Distribution). See our full range of security solutions. Quantum Safe Security. Asset protection with cyber security. Quantum Security Solution. Quantum Cybersecurity.</p>
            <p>In quantum cryptography, subatomic particles (photons) are used with their intrinsic quantum properties (polarization of photons) to create an unbreakable security system. No system’s quantum can be measured without affecting its quantum state. Using this property, sender-receiver keys are secure. In quantum cryptography, public key cryptography is combined with the ultimate security of one-time pad cryptography, with the relative ease and convenience of transferring keys.</p>
         </div>
         <div className="col-lg-6 text-center">
            <img src={quant} alt=""/>
         </div>
      </div>
   </div>
   </section>

<Footer/>
<CopyRight/>
</section>
</>
);
};
export default Securitys;

