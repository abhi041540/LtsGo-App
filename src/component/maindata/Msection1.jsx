import React, { useEffect } from "react";
import Maps from "../Maps";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Msection1(param) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".mul1 li", {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            stagger: 0.2,
            scrollTrigger: {
                scroller: "body",
                trigger: ".maddress",
                start: "top 70%",
                end: "top 30%",
                scrub: 3,
            }
        });
    });

    var title;
    try {
        title = param.data.wikipedia_extracts.text;
    } catch (e) {
        title = param.data.name + " is the popular attraction in " + param.data.address.country;
    }

    const addkey = Object.keys(param.data.address);

    return (
        <section className="msection1" style={{ overflow: "hidden", marginBottom: "0px", paddingBottom: "20px" }}>
            <div className="col span-2-of-2 steps" style={{ marginTop: "30px", marginBottom: 0, padding: "10px" }}>
                <h2>{param.data.name}</h2>
                <h3>{param.data.address.country}</h3>
            </div>
            <div className="container px-1 text-center mtext" style={{ marginBottom: "20px" }}>
                <div className="row gx-10">
                    <div className="col">
                        <div style={{ textAlign: "center", padding: "0 20px 20px 20px" }}>
                            <i className="ion-flag" style={{ marginRight: "10px", fontSize: "30px", color: "#e0472c" }}></i>{title}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(237, 235, 230)" }}>
                <div className="container overflow-hidden" style={{ padding: "0%", margin: "auto", backgroundColor: "rgb(237, 235, 230)" }}>
                    <div className="row gx-1">
                        <div className="col maddress" style={{ minWidth: "300px", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ padding: "5vw 0 10px 2vw" }}>
                                <h2 style={{ color: "#d33a1f", marginLeft: "20px", fontSize: "30px", fontWeight: "700", textShadow: "2px 2px 2px gray" }}>Address:</h2>
                                <ul className="mul1" style={{ fontSize: "100%", fontWeight: "600", listStyle: "none", textAlign: "justify", letterSpacing: "1px", lineHeight: "160%", padding: "10px 20px 20px" }}>
                                    {
                                        addkey.map((x) => {
                                            return (
                                                <li key={x}>
                                                    <i className="ion-asterisk" style={{ marginRight: "10px", fontSize: "15px", color: "#e0472c" }}></i>{x} <strong style={{ color: "#e0472c", fontSize: "20px" }}> : </strong> {param.data.address[x]}
                                                </li>
                                            )
                                        })
                                    }
                                    <li>
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${param.data.point.lat},${param.data.point.lon}`} target="_blank" rel="noopener noreferrer">
                                            <i className="ion-ios-navigate" style={{ marginRight: "10px" }}></i>Map Location
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ minWidth: "200px", margin: "3vw 20px 20px 20px" }}>
                            <div className="md maddress1">
                                <Maps location={[param.data.point.lon, param.data.point.lat]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Msection1;
