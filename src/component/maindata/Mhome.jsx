import React, { useEffect, useState } from "react";
import { verify } from "../data/Dlistedplace";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { surl } from "../home";
import Nodata from "../data/Nodata";
import Loder from "../data/Loder";
import Maps from "../Maps";
import Imageslide from "./Imageslide";
import Mnav from "./Mnav";
import Msection1 from "./Msection1";
import Msection2 from "./Msection2";
import Msection3 from "./Msection3";
axios.defaults.withCredentials = true;

function Mhome() {
    let [data, setData] = useState(null);
    let [interv, setInterv] = useState(null);
    const nav = useNavigate();
    const par = useParams();

    useEffect(() => {
        if (!verify) {
            nav("/error");
        } else {
            axios.get(`${surl}/placedata/${par.name}`).then((resp) => {
                if (resp.data === "process") {
                    const inter = setInterval(() => {
                        axios.get(`${surl}/placedata/${par.name}`).then((resp1) => {
                            if (resp1.data !== "process") {
                                setData(resp1.data);
                                clearInterval(inter);
                            }
                        });
                    }, 500);
                    setInterv(inter);
                } else {
                    setData(resp.data);
                }
            });
        }
    }, [nav, par.name]);

    useEffect(() => {
        return () => {
            clearInterval(interv);
        };
    }, [interv]);

    if (data === null) {
        return (
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Loder />
            </div>
        );
    } else {
        var imageda;
        if (data.data.preview) {
            imageda = data.data.preview.source;
        }
        return (
            <div>
                <Mnav />
                <Imageslide placenm={data.name} adimg={imageda} imagdata={data.imagedata} />
                <Msection1 data={data.data} />
                <Msection2 />
                <Msection3 data={data.data} />
                <section className="homefooter" style={{ marginBottom: 0 }}>
                    <footer>
                        <h3>Copyright {new Date().getFullYear()} LtsGo. All Rights Reserved.</h3>
                        <a href="#"><i className="ion-arrow-up-b"></i></a>
                    </footer>
                </section>
            </div>
        );
    }
}

export default Mhome;
