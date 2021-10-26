import React from "react";
import { Carousel, Tab } from "react-bootstrap";

const WeServe = () => {
  return (
    <section className="weserve-section">
        <div className="container wide-block">
          <div class="row">
            <div class="col-lg-12">
              <div className="overflow-hidden">
                <div className="row row-after">
                  <div className="col-lg-11 offset-md-1">
                    <div className="row">
                        <div className="col-lg-5">
                            <div class="title-block">
                              <div class="circle-white"></div>
                              <h1><span class="gradient-text-red">Who we serve</span></h1>
                            </div>
                            <div className="serve-block">
                              <div className="serve-block-1">
                                <h3>Established</h3>
                              </div> 
                              <div className="serve-block-2">
                                <h3>Beginners</h3>
                              </div>  
                              <div className="serve-block-3">
                                <p>Investment firms</p>
                                <p>Forex & crypto brokerage firms</p>
                                <p>Family offices</p>
                                <p>Hedge funds</p>
                              </div>   
                            </div>
                        </div>
                        <div className="col-lg-6 offset-md-1">
                            <div className="company-text-block">
                            <h1><span class="gradient-text-red">We are a company that:</span></h1>
                            <Carousel>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                    <h3 className="text-white">No difference in service for big or small clients. We serve everyone on an equal footing with upmost professionalism and deep involvement in all the details</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                    <h3 className="text-white">Second slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <Carousel.Caption>
                                    <h3 className="text-white">No difference in service for big or small clients. We serve everyone on an equal footing with utmost professionalism and deep involvement in all the details</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
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

export default WeServe;
