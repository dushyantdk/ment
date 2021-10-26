import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Responsive.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutUs from "./components/About/AboutUs";
import Home from "./components/Home/Home";
// import TurnkeySolution from "./components/Products/TurnkeySolution/TurnkeySolution";
// import CryptocurrencyLiquidity from "./components/Products/CryptocurrencyLiquidity/index";
//import OtcPlatformTurnkey from "./components/Products/OtcPlatformTurnkey/index";
//import ReferralAffiliate from "./components/Products/ReferralAffiliate/index";
// import MiningPool from "./components/Products/MiningPool/index";
// import StakingDefi from "./components/Products/StakingDefi/index";
import Teams from "./components/Teams/Teams";
import ContactUs from "./components/ContactUs/ContactUs";
import Careers from "./components/Careers/Careers";
import Demo from "./components/Demo/RequestDemo";
import Schedulecall from "./components/Schedulecall/Schedulecall";
import Security from "./components/Security/Securitys";
import CareerDetail from "./components/Careers/CareerDetail";
import Quotation from "./containers/Quotation";
import Getaquote from "./components/Quotation/Getaquote";
import Consultingservice from "./components/Services/Consultingservice/Consultingservice";
import Blockchaindevelopment from "./components/Services/Blockchaindevelopment/Blockchaindevelopment";
import FinTech from "./components/Services/FinTech/Fintechsoftware";
import Artificial from "./components/Services/Artificial/Artificial";
import DecenterlizeExchange from "./components/DecenterlizeExchange/DecenterlizeExchange";
import ICOIEOSTOPlatform from "./components/ICOIEOSTOPlatform/ICOIEOSTOPlatform";
import Cyptomaket from "./components/NftMarket/Cyptomaket";
import BankingSolution from "./components/Banking/BankingSolution";
import NewsAnalysis from "./components/NewsAnalysis/NewsAnalysis";
import NewsDetails from "./components/NewsAnalysis/NewsDetails";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy";
import TermsUse from "./components/Legal/TermsUse";
import CookiesPolicy from "./components/Legal/CookiesPolicy";
import { ToastProvider } from "react-toast-notifications";
import DefiSolution from "./pages/StakingTurnkey"; 
import ExchangeSolution from "./pages/ExchangeSolution";
import CryptocurrencyLiquidity from "./pages/LiquidityBot";
import OtcPlatformTurnkey from "./pages/OtcSystem";
import MiningPool from "./pages/MiningPool";
import ReferralAffiliate from "./pages/ReferralSystem";

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/crypto-exchange-turnkey-solution" exact component={ExchangeSolution} />
          <Route path="/cryptocurrency-liquidity-solution" exact component={CryptocurrencyLiquidity} />
          <Route path="/otc-trading-system" exact component={OtcPlatformTurnkey} />
          <Route path="/mining-pool-solution-crypto-exchange" exact component={MiningPool} />
          {/* <Route path="/crypto-staking-defi-lending-turnkey-solution" exact component={StakingDefi} /> */}
          <Route path="/crypto-staking-defi-lending-turnkey-solution" exact component={DefiSolution} />
          <Route path="/referral-platform-crypto-exchange" exact component={ReferralAffiliate} />
          <Route path="/digital-and-crypto-banking" exact component={BankingSolution} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/team" exact component={Teams} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/Security" exact component={Security} />
          <Route path="/requestDemo" exact component={Demo} />
          <Route path="/schedulecall" exact component={Schedulecall} />
          <Route path="/career" exact component={Careers} />
          <Route path="/careerdetail" exact component={CareerDetail} />
          <Route path="/quotation" exact component={Quotation} />
          <Route path="/getaquote" exact component={Getaquote} />
          <Route path="/finTech" exact component={FinTech} />
          <Route path="/artificial" exact component={Artificial} />
          <Route path="/consultingservice" exact component={Consultingservice} />
          <Route path="/blockchaindevelopment" exact component={Blockchaindevelopment} />
          <Route path="/decentralized-crypto-exchange-platform" exact component={DecenterlizeExchange} />
          <Route path="/ico-ieo-sto-platform" exact component={ICOIEOSTOPlatform} />
          <Route path="/nft-marketplace-software-platform" exact component={Cyptomaket} />
          <Route path="/news-analysis" exact component={NewsAnalysis} />
          <Route path="/news-detail" exact component={NewsDetails} />
         
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/terms-of-use" exact component={TermsUse} />
          <Route path="/cookie-policy" exact component={CookiesPolicy} />
          
          
        </div>
      </ToastProvider>
    </Router>
    
  );
}

export default App;
