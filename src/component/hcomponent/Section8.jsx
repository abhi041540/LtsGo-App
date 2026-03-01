import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
function Section8() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".sec8div", {
            opacity: 0,
            duration: 1,
            scale: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: ".section8",
                start: "top 40%",
                end: "top 20%",
                // markers: true,
                scrub:3,
            }
        })
    });

    return (
        <section className="section8"id="Morefeatures">
            <div className="col span-2-of-2 steps sec4" style={{ marginTop: "35px" }}>
                <h2 style={{ color: "white" }}>WHY CHOOSE US?</h2>
                <h3 style={{ color: "white" }}>REASONS TO TRUST US</h3>
            </div>
            <div className="container px-4 text-center">
                <div className="row gx-5">
                    <div className="col sec8div" style={{ marginLeft: "20px" }}>
                        <i className="icon"><i className="ion-bag"></i></i>
                        <div>
                            <h2>Personalized Itineraries</h2>
                            <p>Tailor your travel plans to your preferences with our smart itinerary builder. Whether you're an adventure seeker or a relaxation enthusiast, we've got you covered.</p>
                            <a href="#">Start</a>
                        </div>
                    </div>
                    <div className="col sec8div">
                        <i className="icon"><i className="ion-ios-search-strong"></i></i>
                        <div>
                            <h2>Expert Recommendations</h2>
                            <p>Benefit from our curated recommendations and insider tips. Discover hidden gems and must-visit spots, ensuring you make the most of your trip.</p>
                            <a href="#">Start</a>
                        </div>
                    </div>
                    <div className="col sec8div">
                        <i className="icon"><i className=" ion-paper-airplane"></i></i>
                        <div>
                            <h2>Seamless Planning</h2>
                            <p>Enjoy hassle-free planning with our integrated tools. From creating itineraries to finding the best activities, everything you need is in one place.</p>
                            <a href="#">Start</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section8;