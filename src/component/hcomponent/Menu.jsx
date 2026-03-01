import React, { useEffect } from "react";
import Logo from "./Logo";
import $ from "jquery";
import gsap from "gsap";
function Menu() {
function dropdownlink(event)
{
    $(event.target).css({
        "color":"white"
    })
}
function mouseover(event)
{
    $(event.target).css({
        "color":"gold"
    })
}
function mouseout(event)
{
    $(event.target).css({
        "color":"white"
    })
}
useEffect(()=>{
    var v=0;
    $(".navbar-toggler").on("click",()=>{
        if(v===0)
        {
            $(".navbar-toggler").css({
                "box-shadow":" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            });
            v=1;
        }
        else
        {
            $(".navbar-toggler").css({
                "box-shadow":"none"
            }); 
            v=0;
        }
       
        });
        $(".navbar-toggler").css({
            "--bs-navbar-toggler-focus-width": "none"
        });
        
     const tl=gsap.timeline();
     tl.from(".nevanimation1",{
        scale:0,
        opacity:0,
        duration:0.6,
        delay:0.3
     });
     tl.from(".nevanimation",{
        x:"20vh",
        scale:0,
        duration:0.3,
        stagger:0.3
     })

},[]);

    return (
        <nav class="navbar navbar-expand-lg menubar" style={{zIndex:"20"}}>
            <div class="container-fluid">
                <Logo imag="logo-white.png" width="80px" class="nevanimation1"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active nevanimation" aria-current="page" href="/"  style={{color:"white"}}  onMouseOver={mouseover} onMouseOut={mouseout} >Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nevanimation" href="#howitworks">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nevanimation" href="#top-destinations">Top Destinations</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle nevanimation" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={dropdownlink}  onMouseOver={mouseover} onMouseOut={mouseout}>
                                MoreOptions
                            </a>
                            <ul class="dropdown-menu dropdownmenu">
                                <li><a class="dropdown-item" href="#highlyrated">Highly Rated Places</a></li>
                                <li><a class="dropdown-item" href="#Morefeatures">Advance Features</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Menu;