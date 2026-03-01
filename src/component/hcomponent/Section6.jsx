import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
function Section6()
{
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".section6 div",
        {
            x:-2000,
            duration:0.6,
            scrollTrigger:{
                scroller:"body",
                trigger:".section6 div",
                start:"top 65%",
                end:"top 0%",
                scrub:2,
                // markers:true
            }
        });
        
    });
    return(
        <section className="section6">
        <div>
            <img src="logo-white.png" alt="LtsGo" />
            <h3>
            Love where you're going
            </h3>
            <h1>
                <span>LtsGo</span> is a World Leading Online Tour <span>Itinerary Planning</span> Platform.
            </h1>
        </div>
        </section>
    );
};
export default Section6;