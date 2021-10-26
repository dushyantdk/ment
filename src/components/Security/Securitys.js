

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
      <div className="row p-y-100 align-items-center">
         <div className="col-lg-8 mb-5 text-white">
            <h1 className="mb-4">Security Layers</h1>
            <p>Security is all important for crypto exchanges and should never be compromised. We have developed an advanced security system to help prevent losses as a result of fraudulent activities and attacks.</p>
            <p>Security is the most important concept in crypto trading and our exchange was designed with sophisticated safety measures as almost all tokens and coins are held in cold storage. Cold wallets are highly secure hardware wallets that are not connected to the internet. Programmed algorithms regularly transfer client funds into cold storages thus providing the necessary level of safety.</p>
            <p>See security issues in your pull requests as part of your code review process. Prevent new vulnerabilities from making it onto main. </p>
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
            <h3 className="mb-2">Securing software, together</h3>
            <p>Introducing community-powered ways to discover, report, and prevent security vulnerabilities.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <h3 className="mb-2">Security Advisory Database</h3>
            <p>Data backup takes place in two modes: real-time replication and scheduled once a day with a snapshot of the current state.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
            <h3 className="mb-2">Security that learns</h3>
            <p>Our threat detection program provides investigation, response, and coordination for all security incidents at secure data.</p>
            </div>
         </div>
         <div className="col-lg-3  mb-4">
         <div className="box-shadow-card p-3">
            <h3 className="mb-2">Security Bug Bounty</h3>
            <p>Our bounty program gives a tip of the hat to these researchers and provides rewards of $30,000 or more for critical vulnerabilities.</p>
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
                  <h1>Secure code</h1>
                  <h2>from blueprint to execution</h2>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 text-white mt-5 mt-md-5">
                  <h3>Anti-Fraud System</h3>
                  <p>Our commitment to our customers is built on trust. We believe that 
                     security and data privacy.
                  </p>
                  <ul className="text-white security-d">
                     <li>Excessive deposits sum</li>
                     <li>Multiple withdrawals with no trading activity</li>
                     <li>Identical withdrawal wallet address used by multiple accounts</li>
                     <li>Identical phone number used by multiple accounts</li>
                     <li>Identical ip used by multiple accounts</li>
                     <li>Excessive trades amount</li>
                     <li>Arbitrage triangle</li>
                     <li>Identical email used by multiple accounts</li>
                     <li>Frequent deposits</li>
                  </ul>
               </div>
               <div className="col-lg-4 text-white mt-5  mt-md-5">
                  <h3>Teams and integrations</h3>
                  <p>Manage teams, projects, and integrations to do your best work securely.</p>
                  <ul className="text-white security-d">
                     <li>Fine-grained access controls </li>
                     <li>SAML</li>
                     <li>LDAP</li>
                     <li>Repository access levels (Read, write, and admin)</li>
                     <li>Base repository permissions</li>
                     <li>OAuth Application Whitelists</li>
                     <li>Security monitoring through organization-wide webhooks </li>
                     <li>Access controls for third-party integrations </li>
                  </ul>
               </div>
               <div className="col-lg-4 text-white mt-5  mt-md-5">
                  <h3>Projects and monitoring</h3>
                  <p>Build confidently with exactly the right teams—and monitor security as you go.</p>
                  <ul className="text-white security-d">
                     <li>Required reviews </li>
                     <li>Required status checks </li>
                     <li>Built-in continuous integration (CI) and testing </li>
                     <li>Read only deploy keys </li>
                     <li>Deployments API </li>
                     <li>Monitoring and logging </li>
                     <li>Evidence key controls </li>
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
            <h2 className="gradient-text-red">We follow a Secure Software Development Lifecycle.</h2>
            <p className="mt-5">Security is baked into our coding lifecycle. Our software is peer-reviewed and uses a combination of static and dynamic source code analysis tools.</p>
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
            <h2 className=" mt-5 gradient-text-red">We use Multi-Factor Authentication (MFA).</h2>
            <p className="mt-5">Transactions are protected by MFA, which includes password, biometric, email, phone, and authenticator verification.</p>
         </div>
      </div>
   </div>
</section>
<section className="py-5 py-md-5 securit blue-bg ">
   <div className="container">
      <div className="row p-y-100 align-items-center">
         <div className="col-lg-6 mb-5 text-white">
            <h1 className="mb-4">Quantum Cryptography</h1>
            <p>Quantum Key Distribution (QKD) is a means to secure data communication by encoding a cryptographic key in the intrinsic properties of photons - subatomic particles of light. This approach uses quantum-mechanical properties to guarantee absolute security. The ability for one to intercept, record, clone, and physically manipulate transmitted photons without detection makes Quantum Key Technology an essential element in communications networks worldwide.</p>
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

