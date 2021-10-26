import React from "react";
import { Carousel} from "react-bootstrap";
import next from "../../assests/images/next.svg" ;
import ReviewShap from "../../assests/images/home/review-shape.svg";

import rachel from"../../assests/images/rachel.jpg";
import Louis2 from"../../assests/images/Louis2.jpg";
import thomas from"../../assests/images/thomas.jpg";
const Request = () => {
return (
<section className="request-name blue-bg">
   <div class="container wide-block">
       <div className="row">
        <div class="col-lg-6">
            <h1 className="text-white">Request Demo Session</h1>
            <ul class="css-e">
                <li>Wondering how the system works?</li>
                <li>Looking to understand the workflow?</li>
                <li>Thinking of how admin panel looks like?</li>
                <li>Want some more customization?</li>
            </ul>
            <a href="#" className="btn btn-primary">Better Call Saul</a>
            <ul class="css-f">
                <li>
                <img width="20"src={next} alt="..."/> Professional Support Team
                </li>
                <li>
                <img width="20" src={next} alt="..."/> Special Attention to Start-up Teams
                </li>
                <li>
                <img width="20" src={next} alt="..."/> Dedicated Project Managers &amp; QA Engineers
                </li>
            </ul>
        </div>
        <div class="col-lg-6">
            <h1 className="text-white">What some awesome people say</h1>
            <Carousel className="text-white">
                <Carousel.Item>
                    <div className="carousel-block">
                        <Carousel.Caption>
                        <img className="oils" src={rachel} alt="..." />
                        <p className="rev">For a marketing team with a lot on our plates, crucial tool in our brand-building efforts.</p>
                      
                        <h3 className="review-name">Evan Rachel</h3>
                        <p className="revs">Happy officer</p>
                        </Carousel.Caption>
                       
                    </div>
                    <div className="bk-design"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-block">
                        <Carousel.Caption>
                        <img className="oils"  src={Louis2} alt="..." />
                        <p className="rev"> It made sharing our story and building our brand on social media so much easier.</p>
                      
                        <h3 className="review-name">Louis Hoffman</h3>
                        <p className="revs">Happy officer</p>
                        </Carousel.Caption>
                       
                    </div>
                    <div className="bk-design"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-block">
                        <Carousel.Caption>
                        <img className="oils" src={thomas} alt="..." />
                        <p className="rev"> It helps us work smarter, not harder. We get insight into what is working on social.</p>
                      
                        <h3 className="review-name">Thoma Midleditch</h3>
                        <p className="revs"> Happy officer</p>
                        </Carousel.Caption>
                       
                    </div>
                    <div className="bk-design"></div>
                </Carousel.Item>
            </Carousel>
        </div>
      </div>
   </div>
</section>
);
};
export default Request;

