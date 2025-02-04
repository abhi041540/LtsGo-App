
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { setplace } from "./Form1";
function Section4() 
{
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".bhutan",{
          y:-100,
          x:-1000,
          duration:0.6,
          scrollTrigger:{
            scroller:"body",
            trigger:".bhutan",
            start:"top 50%",
            end:"top 20%",
            // markers:true
            scrub:3,
          }
        });
        gsap.from(".bangkok",{
            y:-100,
            x:1000,
            duration:0.6,
            scrollTrigger:{
              scroller:"body",
              trigger:".bhutan",
              start:"top 50%",
              end:"top 20%",
            //   markers:true
            scrub:3,
            }
          });
          gsap.from(".vietnam",{
            y:100,
            x:1000,
            duration:0.6,
            scrollTrigger:{
              scroller:"body",
              trigger:".bhutan",
              start:"top 50%",
              end:"top 20%",
            //   markers:true
            scrub:3,
            }
          });
          gsap.from(".kashmeer",{
            y:100,
            x:-1000,
            duration:0.6,
            scrollTrigger:{
              scroller:"body",
              trigger:".bhutan",
              start:"top 50%",
              end:"top 20%",
            //   markers:true
            scrub:3,
            }
          });
    });
    return (
        <section className="section4" style={{"overflow":"hidden"}} id="highlyrated">
            <div className="col span-2-of-2 steps sec4">
                <h2 style={{ color: "white" }}>TOP DESTINATION</h2>
                <h3 style={{ color: "white" }}>EXPLORE</h3>
            </div>
            <div className="clearfix"></div>
            <div class="container px-4 text-center" style={{ padding: "0" }}>
                <div class="row gx-0 section4div">
                    <div class="col bhutan">
                        <h3 >BHUTAN</h3>
                        <h2>Dragon Kingdom</h2>
                        <p>Bhutan, the Land of the Thunder Dragon, offers serene landscapes and ancient monasteries. Experience its rich cultural heritage and tranquil beauty.</p>
                        <a href="#"onClick={()=>{setplace("Bhutan")}}>Explore</a>
                    </div>
                    <div class="col bangkok">
                        <h3>BANGKOK</h3>
                        <h2>DISNEYLAND BANGKOK</h2>
                        <p >Bangkok, Thailand's vibrant capital, blends ancient temples with modern skyscrapers. Enjoy bustling markets, world-renowned cuisine, and lively nightlife.</p>
                        <a href="#" onClick={()=>{setplace("Bangkok")}}>Explore</a>
                    </div>
                </div>
            </div>
            <div class="container px-4 text-center">
                <div class="row gx-0 section4div">
                    <div class="col kashmeer">
                        <h3>KASHMIR</h3>
                        <h2>Heaven on Earth</h2>
                        <p>Kashmir, often called "Paradise on Earth" boasts stunning landscapes and serene beauty. Experience majestic mountains, lush valleys, and pristine lakes.</p>
                        <a href="#"onClick={()=>{setplace("Kashmir,India")}}>Explore</a>
                    </div>
                    <div class="col vietnam">
                        <h3>VIETNAM</h3>
                        <h2>Dragon Land</h2>
                        <p>Vietnam, a land of stunning landscapes and rich history, offers vibrant cities and serene countryside. Experience its unique culture, delicious cuisine, and breathtaking scenery.</p>
                        <a href="#"onClick={()=>{setplace("Vietnam")}}>Explore</a>
                    </div>
                </div>
            </div>


        </section>
    );
};
export default Section4;
