import React, { useEffect } from "react";
import $ from "jquery";
import Dlistedplaces from "./Dlistedplace";
function Dsection2(param) {
    useEffect(() => {
        $("html").animate({ scrollTop: $(".dsection2").offset().top }, 1000);
    }, [])
    var con=0;
    return (
        <section className="dsection2">
            <div className="col span-2-of-2 steps" style={{ marginTop: "0",marginBottom:"30px" }}>
                <h2>Tourist Attraction</h2>
                <h3>{`>>>${param["city"].toUpperCase()}<<<`}</h3>
            </div>
            <div className="searchcontent">
                <div class="container row-cols-1 g-lg-1 text-center" style={{ margin: "auto" }}>
                    <div class="row gx-1">
                        {
                      param.data.map((x) =>
                        {
                            con+=1;
                            try
                            {
                                return(<Dlistedplaces xid={x.xid} lat={x.point.lat} lon={x.point.lon} rate={x.rate} count={con} kinds={x.kinds} name={x["name"]} />);
                            }
                            catch(e)
                            {
                                // console.log("lat--lon in dsec2");
                            }
                           })
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
export default Dsection2;