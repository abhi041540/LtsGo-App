import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
function Section5() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".bg1sec5 figure",
        {
            x:-500,
            duration:1.2,
            scrollTrigger:{
                scroller:"body",
                trigger:".bg1sec5",
                // markers:true,
                start:"top 40%",
                end:"top 20%",
                scrub:3,
            }

        });
        gsap.from(".imgsec5 img",
            {
                x:500,
                duration:1.2,
                scrollTrigger:{
                    scroller:"body",
                    trigger:".bg1sec5",
                    // markers:true,
                    start:"top 40%",
                    end:"top 20%",
                    scrub:3
                }
            });
    });
    return (<section className="section5">
        <div className="container text-center" style={{margin:"0"}}>
            <div className="row gx-0">
                <div className="col bg1sec5">
                    <h3>TRUSTED & PROFESSIONAL</h3>
                    <h1>We're Trusted by More Than <span>84,106</span> Clients</h1>
                    <figure><img src="images/logosection5.jpg" alt="LtsGo"/></figure>
                    <div>
                        <h2>
                        We only chosse the best one for you
                        </h2>
                    </div>
                </div>
                <div className="col imgsec5" style={{minWidth:"400px"}}>
                 <img src="images/section5logo2.jpg" alt="LtsGo" />
                </div>
            </div>
        </div>
    </section>);
};
export default Section5;