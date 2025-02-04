import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
function Section2() 
{

    useGSAP(()=>{
          gsap.registerPlugin(ScrollTrigger);
        gsap.from(".stepsanimation1",{
            x:-500,
            duration:1,
            scrollTrigger:{
                scroller:"body",
                trigger:".stepsanimation1",
                // markers:true,
                start:"top 90%",
                end:"top 50%",
            }

        });
        gsap.from(".stepsanimation3",{
            x:600,
            duration:1,
            scrollTrigger:
            {
                scroller:"body",
                trigger:".stepsanimation3",
                // markers:true,
                start:"top 90%",
                end:"top 50%",
            }
        })
        gsap.from(".stepsanimation2",{
            y:200,
            opacity:0,
            duration:1,
            scrollTrigger:
            {
                scroller:"body",
                trigger:".stepsanimation2",
                // markers:true,
                start:"top 90%",
                end:"top 50%",
            }
        })

    })

    return (
        <section className="section2" id="howitworks">
            <div className="col span-2-of-2 steps">
                <h2>HOW IT WORKS?</h2>
                <h3>SEARCH - SELECT - EXPLORE</h3>
            </div>
            <div className="col span-2-of-2 slogan">
                <p>Travel smarter not harder with effortless journeys and unforgettable experiences!</p>
            </div>
            <div className="col span-2-of-2 stepsblock container overflow-hidden text-center">
                <ul className="row gx-2">
                    <li className="col stepsanimation1">
                        <div className="stepsicon">
                            <i className="ion-ios-search-strong"></i>
                        </div>
                        <h4 style={{color:"#b7260d"}}>Search</h4>
                        <div className="stepsdesc">
                            <h3>
                                Discover your dream destination with our powerful search tool with many options. Find the perfect getaway tailored to your preferences and budget.
                            </h3>
                        </div>
                    </li>
                    <li className="col stepsanimation2">
                        <div className="stepsicon">
                            <i className="ion-heart"></i>
                        </div>
                        <h4 style={{color:"#b7260d"}}>Select</h4>
                        <div className="stepsdesc">
                                <h3>
                                Choose from a curated list of top-rated attrections, activities, and experiences. Customize your itinerary to make your trip truly unique.
                                </h3>
                            </div>
                    </li>
                    <li className="col stepsanimation3">
                        <div className="stepsicon">
                            <i className="ion-camera">
                            </i>
                        </div>
                        <h4 style={{color:"#b7260d"}}>Explore</h4>
                        <div className="stepsdesc">
                                <h3>
                                Embark on your adventure with confidence. Access real-time travel updates, local tips, and personalized recommendations to make the most of your journey.
                                </h3>
                            </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Section2;