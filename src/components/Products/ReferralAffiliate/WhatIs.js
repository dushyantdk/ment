import React from "react";
import Whatimg from "../../../assests/images/product/whatimg.svg";
import AffiliateIcon from "../../../assests/images/product/affiliate.svg";

const WhatIs = (props) => {
  return (
    <section className="whatis">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                      <div className="row row-after mt-5 pt-5">
                        <div className="offset-md-1 col-lg-10">
                        <div className="row align-items-center p-b-50">
                          <div className="col-lg-12 text-white">
                            <div class="title-block mb-5">
                              <div className="p-b-t-img"><img src={Whatimg} alt="" /></div>
                              <h1>Why Choose <span class="gradient-text-blue">Referral & Affiliate System?</span></h1>
                            </div>
                          </div>
                          <div className="col-lg-6 text-white">
                            
                            <p className="mb-5"><span class="circle"></span>If you’re looking for a 100% affiliate / referral plugin for your cryptocurrency exchange, you should know that our affiliate & referral system is the best and the most cost-effective in the market. There’s no need to buy expensive affiliate plugins just to have a simple referral system onto your cryptocurrency exchange.</p>
                            <p className="mb-5"><span class="circle"></span>With this plugin/module you can easily extend your cryptocurrecy exchange platform with a referral system. Immediately after the plugin activation you’ll be able to give your users the ability to refer your exchange platform and also to check how many and who really did registered by their referral. This plugin tracks registrations as well as rewards.</p>
                            <p className="mb-5"><span class="circle"></span>The administrators will see in users list two new columns: user id and referral id along with rewards. This way administrators have full control and a clear picture of their referrals activity.</p>
                          </div>
                          <div className="col-lg-6">
                            <div className="">
                              <img src={AffiliateIcon} alt="" />
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>    
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhatIs;
