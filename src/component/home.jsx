import React from "react";
import Search from "./hcomponent/Search";
import Menu from "./hcomponent/Menu";
import Section1 from "./hcomponent/Section1";
import Section2 from "./hcomponent/Section2";
import Section3 from "./hcomponent/Section3";
import Section4 from "./hcomponent/Section4";
import Section5 from "./hcomponent/Section5";
import Section6 from "./hcomponent/Section6";
import Section7 from "./hcomponent/Section7";
import Section8 from "./hcomponent/Section8";
import Footer from "./Footer";
// const surl="http://localhost:3001";
// const surl="http://192.168.0.108:3001";
const surl="";

function Home() {
    
    return (
        <div style={{width:"100%",overflowX:"hidden"}}>
            <Menu/>
            <Section1/>
            <Section2/>
            <div className="clearfix"></div>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Footer/>
            
        </div>
    );
};
export default Home;
export {surl};