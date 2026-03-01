import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { surl } from "../home";
import Loder from "./Loder";
import Nodata from "./Nodata";
import Dsection1 from "./Dsection1";
import Dsection2 from "./Dsection2";
import $ from "jquery";
import Backtotop from "./Backtotop";
import Dtips from "./Dtips";
import Mnav from "../maindata/Mnav";
axios.defaults.withCredentials = true;
function Home1() {
    let [data, setData] = useState(null);
    const { city, radius, rating } = useParams();

    useEffect(() => {


        // Allowing page to load on refresh
        if (true) {
            axios.post(surl + "/data/search", { name: city, radius: radius, rating: rating }).then((resp) => {
                setData(resp.data);
            }).catch(err => {
                console.error("Search API Error:", err);
            });
        }
        $("html").css({ "backgroundColor": "#d33a1f" });
        return () => {
            $("html").css({ "backgroundColor": "white" });
            setData(null);
        }


    }, [city, rating, radius]);

    if (data == null) {
        return (
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Loder />
            </div>
        )
    }
    else {
        // //
        // console.log(data+","+data.length);
        if (!data.length) {
            return (
                <Nodata />
            );
        }
        else {
            return (
                <section style={{ paddingBottom: "0", margin: 0 }}>
                    <Mnav />
                    <Dsection1 city={city} />
                    <Dtips />
                    <Dsection2 data={data} city={city} />
                    <div className="clearfix"></div>
                    <Backtotop />
                    <section className="homefooter">
                        <footer>
                            <h3>Copyright {new Date().getFullYear()} LtsGo. All Rights Reserved.</h3>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><i className="ion-arrow-up-b"></i></a>
                        </footer>
                    </section>
                </section>
            );
        }

    }
};
export default Home1;