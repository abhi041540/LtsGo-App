import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
function Dtips()
{
    useGSAP(()=>{
        gsap.to(".ddeviceimg",{
            scale:1.1,
            duration:1.4,
            repeat:-1,
            yoyo:true
        })
    })
    return(
        <section className="dtips">
<div className="container px-4 text-center">
      <div className="row gx-1">
        <div className="col">
        <div className="p-3 ddevicetips">
            <h2>On all your devices</h2>
            <h3  className="steps" style={{lineHeight:"30px",color:"navy"}}>Any trips you've saved or places you love will sync automatically across devices.</h3>
          </div>
          <div style={{overflow:"hidden"}}>
            <figure className="ddeviceimg">
                <img src="../../../images/mapdevice.jpg" alt="ltsgo" />
            </figure>
          </div>
        </div>
      </div>
    </div>
        </section>
    );
};
export default Dtips;