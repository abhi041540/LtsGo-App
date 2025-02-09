import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Waypoint } from "react-waypoint";

function Msection2() {
    function trigger(po)
    {
        if(po.previousPosition==Waypoint.below && po.currentPosition==Waypoint.inside)
        {
            var tl=gsap.timeline();
            tl.from(".ms2t", {
                opacity: 0,
                scale: 0,
                delay:0.5,
                duration: 0.2,
                stagger:0.2
            });
            tl.from(".mimgs2", {
                opacity:0,
                scale:0,
                duration:0.3
               
            });
        }
       
    }
    return (
       
        <section className="msection2">
             <Waypoint onEnter={trigger}topOffset={"20%"}>
            <div className="container overflow-hidden text-center">
                <div className="row gx-1">
                    <div className="col" style={{ minWidth: "300px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="p-3">
                            <h2 className="ms2t" style={{ marginBottom: "20px" }}>
                                Find everything you need along your route
                            </h2>
                            <p className="ms2t" style={{ fontWeight: "500" }}>
                                Route from A to B to discover what you love in between, explore places within a set distance from your route.
                            </p>
                        </div>
                    </div>
                    <div className="col mimgs2" style={{ minWidth: "300px", padding: "0 20px 20px 20px" }}>
                        <img style={{ width: "100%" }} src="../../../../images/mapchart1.jpg" alt="instruction" />
                    </div>
                </div>
            </div>
            </Waypoint>
        </section>
      
    );
}

export default Msection2;
