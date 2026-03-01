import react from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { setplace } from "./Form1";
function Section3() {
useGSAP(()=>{
gsap.registerPlugin(ScrollTrigger);
gsap.from(".maindiv31",{
    x:-1000,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".maindiv31",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
       scrub:3,
    }
});
gsap.from(".maindiv3",{
    x:1000,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".maindiv3",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
       scrub:3,

    }
})
});
    return (
        <section className="section3">
            <div className="container text-center">
                <div className="row gx-0">
                    <div className="col maindivsec3 maindiv31">

                        <div className="container text-center">
                            <div className="row g-0">
                                <div className="col-6 descreption france">
                                    <div>
                                        <h2>Romantic Paris</h2>
                                        <h3><i className="ion-ios-location"></i>France</h3>
                                        <a href="#" onClick={()=>{setplace("France")}}>Explore</a>
                                    </div>
                                </div>
                                <div className="col-6 imagessec3">
                                    <img src="images/france.jpg" alt="france" />
                                    <div className="img1">
                                        <i className="ion-android-search"></i>
                                    </div>
                                </div>
                                <div className="col-6 imagessec3">
                                    <img src="images/dubai.jpg" alt="dubai" />
                                    <div className="img2">
                                        <i className="ion-android-search"></i>
                                    </div>
                                </div>
                                <div className="col-6 descreption dubai">
                                    <div>
                                        <h2>Blue Beach</h2>
                                        <h3><i className="ion-ios-location"></i>Dubai</h3>
                                        <a href="#"onClick={()=>{setplace("Dubai")}}>Explore</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col maindivsec3 maindiv3">
                        <img src="images/african-safari.jpg" alt="african_safari" />
                        <div className="overlay3">
                            <div>
                                <h2>Africa Safari</h2>
                                <h3><i className="ion-ios-location"></i>KENYA</h3>
                                <a href="#"onClick={()=>{setplace("Kenya")}}>Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section3;