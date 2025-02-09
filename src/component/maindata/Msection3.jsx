import gsap from "gsap";
import React from "react";
import { Waypoint } from "react-waypoint";

function Msection3(param) {
    function trigger(po)
    {
        if(po.previousPosition==Waypoint.below && po.currentPosition==Waypoint.inside)
        {
            var tl=gsap.timeline();
            tl.from(".mimgs1", {
                opacity:0,
                scale:0,
                duration:0.3,
                delay:0.2
               
            });
            tl.from(".ms1t", {
                opacity: 0,
                scale: 0,
                duration: 0.2,
                stagger:0.2
            });
        }
        // console.log("yes")
        
    
    }
    return (
        <section style={{ backgroundColor: "rgb(240, 237, 230)", marginBottom: 0 }}>
            <Waypoint onEnter={trigger} topOffset={"0%"}>
            <div className="container overflow-hidden text-center">
                <div className="row gx-1">
                    <div className="col mimgs1" style={{ minWidth: "300px", padding: "20px 20px 40px 20px" }}>
                        <img style={{ width: "100%" }} src="../../../../images/mapchart.jpg" alt="instruction" />
                    </div>
                    <div className="col" style={{ minWidth: "300px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="p-3">
                            <h2 className="ms1t" style={{ marginBottom: "20px" }}>
                                In-app Map navigation
                            </h2>
                            <p className="ms1t" style={{ fontWeight: "500" }}>
                                Hit the road with safety and ease by using turn-by-turn directions, designed specifically for your comfort. Simply click on navigation and we'll find the best routes to your destination.
                            </p>
                            <a className="navigation" href={`https://www.google.com/maps/search/?api=1&query=${param.data.point.lat},${param.data.point.lon}`} target="_blank" rel="noopener noreferrer">
                                <i className="ion-ios-navigate" style={{ marginRight: "10px" }}></i>Navigation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </Waypoint>
        </section>
    );
}

export default Msection3;
