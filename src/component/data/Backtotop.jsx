import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
function Backtotop() {
    function click() {
        $("html").animate({ scrollTop: 0 });
    }
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".backtotop", {
            x: 200,
            duration: 0.5,
            scrollTrigger: {
                scroller: "body",
                trigger: ".dsection2",
                // markers:true,
                start: "top 0%",
                end: "top -20%",
                scrub: 2
            }
        })
    });
    return (
        <div onClick={click} className="backtotop">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{ textDecoration: "none", cursor: "pointer" }}><p>Back To Top</p></a>
        </div>
    );
};
export default Backtotop;