import React, { useEffect, useRef, useState } from "react";
function Imageslide(param) {
    const [imagurl, setImage] = useState([]);
    var co = 1;
    var [co1, setco1] = useState(0);
    useEffect(() => {
        var imgarr = [];
        try {
            const keys = Object.keys(param.imagdata.query.pages);
            imgarr = param.imagdata.query.pages[keys[0]].images;
            if (!imgarr) {
                imgarr = [];
                co = -1;
            }
        }
        catch (e) {
            console.log("abhi")
            co = -1;
        }
        const newImagurl = [];
        if (co == -1) {
            if (param.adimg) {

                let di=param.adimg;
                var ind=di.lastIndexOf("jpg/");
                if(ind!=-1)
                {
                    var ind1=di.slice().indexOf("px");
                    if(ind1!=-1)
                    {
                       di=di.slice(0,ind+4)+"1200px"+di.slice(ind1+2);
                    }

                }
            //    alert(di);
                newImagurl.push(di);
                setco1(1);

            }
            else
            {
                newImagurl.push("../../../../images/mw4.jpg");
                setco1(1);
            }

        }
        else {
            for (var i = 0; i < imgarr.length; i++) {
                const ind = (imgarr[i].title).indexOf(".svg");
                if (ind == -1) {
                    newImagurl.push(imgarr[i].title);
                }
            }
            if (newImagurl.length == 0) {
                if (param.adimg) {
                    newImagurl.push(param.adimg);
                    setco1(1);

                }
                else {
                    newImagurl.push("../../../../images/mw4.jpg");
                    setco1(1);
                }
            }
        }
        co = 0;
        setImage(newImagurl);
    }, [param.imagdata]);
    // console.log(imagurl);/

    return (
        <section className="placeimage" style={{marginBottom:"0"}}>
            <div className="imagedivcont">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" style={{ backgroundImage: `linear-gradient(rgba(137, 137, 137, 0.255),rgba(137, 137, 137, 0.255))`}}>
                        
                            {/* <div className="md1">LtsGo</div> */}
                            {
                            imagurl.map((x) => {
                                if (co1 != 1) {
                                    if (co == 1) {
                                        co = 2;
                                        return (
                                            <div className="carousel-item active imagdiv" style={{display:"block", width: "100%", height: "80vh",backgroundImage: `linear-gradient(rgba(137, 137, 137, 0.255),rgba(137, 137, 137, 0.255)),url(https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(x)})`, backgroundPosition: "center",textAlign:"center", backgroundSize:"cover",backgroundAttachment:"fixed"}}>
                                               <div style={{transform:"translate(0,30vh)", fontSize:"100px",fontFamily:"serif",color:"white",opacity:"60%"}}>LtsGo</div>
                                               </div>
                                        );
                                    }
                                    else {
                                        return (
                                            <div className="carousel-item imagdiv" style={{width: "100%", height: "80vh", backgroundImage: `linear-gradient(rgba(137, 137, 137, 0.255),rgba(137, 137, 137, 0.255)),url(https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(x)})`, backgroundPosition: "center", textAlign:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
                                            <div style={{transform:"translate(0,30vh)", fontSize:"100px",fontFamily:"serif",color:"white",opacity:"60%"}}>LtsGo</div>
                                            </div>
                                        );
                                    }
                                }
                                else {
                                    return (
                                        <div className="carousel-item active imagdiv" style={{width: "100%", height: "80vh", backgroundImage: `linear-gradient(rgba(137, 137, 137, 0.255),rgba(137, 137, 137, 0.255)),url(${x})`, backgroundPosition: "center",textAlign:"center", backgroundSize:"cover",backgroundAttachment:"fixed" }}>
                                         <div style={{ transform:"translate(0,30vh)", fontSize:"100px",fontFamily:"serif",color:"white",opacity:"60%"}}>LtsGo</div>
                                         </div>
                                    );
                                }

                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" fdprocessedid="3wkav">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" fdprocessedid="wutpk4">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </section>
    );
};
export default Imageslide;
