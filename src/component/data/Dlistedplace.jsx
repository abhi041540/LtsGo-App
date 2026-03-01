
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { surl } from "../home";
let verify;
axios.defaults.withCredentials=true;
function Dlistedplaces(param)
 {
    const nav=useNavigate();
useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".namediv"+param.count,{
       opacity:0,
       scale:0.7,
       duration:1,
       scrollTrigger:{
        scroller:"body",
        trigger:".namediv"+param.count,
        start:"top 60%",
        end:"top 50%",
        // markers:true,
        scrub:3,
       }
    });
})
    let name=String(param.name);
    let name1=name;
     if((name).length>40)
     {
        name=name.slice(0,40)+"....";
        // console.log(param.xid)
     }

     function explore()
     {
        axios.post(surl+"/explore/data",param).then((resp)=>{
            // console.log(resp.data)
            if(resp.data!="process")
            {
                 nav("/Nodata");
            }
            else
            {
                // console.log(resp.data)
                verify=1;
                nav(`/data/${name1}/${param.xid}/${param.rate}/true`);
            }
        });
     }

    return (
           <div className="col" style={{margin:"20px 10px 30px 0",marginBottom:"30px"}}>
        <div class={`col card dlisted namediv${param.count}`} style={{width: "17rem"}}>
            <div className=" card-body col dsec2div" style={{ margin: "0px 10px 10px 20px" ,paddingLeft:"30px"}}>
                        <i className="icon1"><i className="ion-map"></i></i>
                        <div>
                            <h2><i className="ion-ios-location"></i>{name}</h2>
                            <h3><i className="ion-android-star"></i>Rating: {param.rate}</h3>
                            <p><i className="ion-ios-paw"></i>Click on explore to know more about this place....</p>
                            <a href="#" onClick={explore}>Explore</a>
                        </div>
                    </div>
                    
            </div>
        </div>
        
    );
};
export default Dlistedplaces;
export {verify};