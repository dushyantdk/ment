import React from "react";
import ProjectPage from "../../Product page";
import CodeSpace from "../../../assests/images/home/codespaces-vscode-1.svg";
import architectureflow from "../../../assests/images/product/architecture-flow.svg";
import exchangenobank from "../../../assests/images/product/exchange-no-bank.svg";
import exchangepaccrypto from "../../../assests/images/product/exchange-pac_crypto.svg";

import workflowchart from "../../../assests/images/product/workflow-chart.png";
import securityimg from "../../../assests/images/product/securityimg.svg";
import exchangecryptocurrencypr from "../../../assests/images/product/exchange-cryptocurrency_pr.svg";
import exchangecryptocurrency from "../../../assests/images/product/exchange-cryptocurrency.svg";
import {Helmet} from "react-helmet";


const TurnkeySolution = () => {
  
  return (
    <div className="Products innerfooter">
      <Helmet>
        <title>Cryptocurrency Exchange Turnkey Solution</title>
        <meta property="og:title" content="Ment Tech - Cryptocurrency Exchange Development Company" />
        <meta name="description" content="Ment Tech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
        <meta property="og:url" content="https://ment.tech"></meta>
      </Helmet>
      <ProjectPage
          name="Cryptocurrency Exchange"
          name2= "Turnkey Solution"
          hpara="Ment Tech is a world-leading white label exchange solution provider. This page gives a detailed introduction of Product portfolios, risk control system, applicable teams and deployment process."

          wimg={CodeSpace}
          wpara="Ment Tech is a world-leading white label exchange solution provider. This page gives a detailed introduction of Product portfolios, risk control system, applicable teams and deployment process."
          wpara2="Ment Tech is a world-leading white label exchange solution provider. This page gives a detailed introduction of Product portfolios, risk control system, applicable teams and deployment process."
          wpara3="Ment Tech is a world-leading white label exchange solution provider. This page gives a detailed introduction of Product portfolios, risk control system, applicable teams and deployment process."

          aimg={architectureflow}
          apara="A cryptocurrency exchange is a complex it solution combined from several components. The frontend is integrated to the exchange module which is connected via web api."
          apara2="Deploy, configure and manage your infrastructure as code"
          apara3="Manage accounting, wallets, order book, authentication and kyc services with peatio and barong components"
          apara4="Integrate any payment gateways and business-specific logic with enterprise applogic component"
          apara5="Customize beautiful front-end ui with proprietary cryptobase library for react using stock elements or build your own"

          adimg={exchangenobank}
          adimg2={exchangepaccrypto}
          adpara="A turnkey cryptocurrency exchange is a great choice for getting started. Simplicity of maintenance and assistance along with cost-effectiveness are just a few of the many benefits available."
          adpara2="A cryptocurrency exchange turnkey solution is a super cost-effective and time-saving solution as it is a based on a cryptocurrency exchange turnkey solution. You can save more than $900,000 on setup costs and around $25,000 on ongoing monthly costs for development, extra office space and a technical support team. As well as huge cost-savings, you can launch more than one year faster which is crucial in today’s fast changing environment."
          adnum="20"
          adnum2="10"
          adnum3="25"
          adpara3="Don’t waste your time and huge budgets on the development of your own cryptocurrency exchange. Boost your chances of success by launching your business more than 1 year faster and spend the money you save on marketing and legal services. Remember, it’s never too late to start your own development once you have confirmed demand from real customers."
          adpara4="Simplicity of acceptance and ease of international transfers are two good reasons to integrate cryptocurrency payments. There’s no need to open a bank account which can be a lengthy process without having a respected licence."
          adpara5="Accepting deposits and making withdrawals via cryptocurrencies is many times cheaper than any other fiat payment systems, giving you the opportunity to offer additional bonuses or benefits to your clients."
          adpara6="Cryptocurrency transfers are not just cheaper than bank or card transfers, but much faster. Your clients’ money is not held up in a bank payment system or similar for days or weeks, but is available for them on their trading accounts in as little as a few minutes."
          adpara7="This has the added benefit of greatly decreasing the time period from when your client first saw your advert and the time that he starts trading."

          wfimg={workflowchart}
          wfpara="Lay foundation with any cloud environment, terraform it and deploy with enterprise kite kit"
          wfpara2="Enable critical services and monitoring system (we love prometheus)"
          wfpara3="Stack your containers with drone, docker and kubernetes"
          wfpara4="Plug the applications and microservices. We're good to go!"

          simg={securityimg}
          spara="Security is all important for crypto exchanges and should never be compromised. We have developed an advanced security system to help prevent losses as a result of fraudulent activities and attacks."
          spara2="Security is the most important concept in crypto trading and our exchange was designed with sophisticated safety measures as almost all tokens and coins are held in cold storage. Cold wallets are highly secure hardware wallets that are not connected to the internet. Programmed algorithms regularly transfer client funds into cold storages thus providing the necessary level of safety."

          bwimg={exchangecryptocurrencypr}
          bwimg2={exchangecryptocurrency}
          bwpara="Our liquidity is best combined with the leading industry trading platforms to provide the ultimate in performance and user satisfaction."
          bwpara2="In over-the-counter (OTC) trading, we offer deeper liquidity and a private, more personalized service to institutions and high net-worth individuals needing to fill large orders."
          li="Flagship user interface"
          li2="Solution for multiple business types"
          li3="Deep customizations & adjustments"
          li4="Widest range of external integrations"
          bwpara3="Our Leading Liquidity System provides liquidity of over 100 mainstream currency pairs and popular currency pairs, as well as top trading depth and continuous K-line charts."
          li5="Fulfill up to 10000 requests per second"
          li6="Commissions ladder"
          li7="Order execution less than 5 microseconds"
          li8="Loyalty token with commission discount for end-users"
          
      />
      
           
    </div>

  );
};

export default TurnkeySolution;
