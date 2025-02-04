import react from "react";
import Listedplaces from "./Listedplaces";
import data1 from "../../destination";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Section7()
{
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".listedplaces",{
            scale:0,
            opacity:0,
            duration:0.3,
            stagger:0.2,
            scrollTrigger:{
                scroller:"body",
                trigger:".section7 .steps h2",
                start:"top 50%",
                end:"top 10%",
                // markers:true,
                scrub:3,
            }
        });
    });
    return(
        <section className="section7" id="top-destinations">
             <div className="col span-2-of-2 steps">
                <h2>Most Popular Places</h2>
                <h3>FEATURED DESTINATIONS</h3>
            </div>
       <div class="container row-cols-1 g-lg-1 text-center" style={{margin:"auto"}}>
      <div class="row gx-10">
        {
            data1.map((x)=>( <Listedplaces imag={x.img} desc={x.desc} name={x["name"]}/>))
        
        }
        </div>
    </div>
        </section>
    );
};
export default Section7;