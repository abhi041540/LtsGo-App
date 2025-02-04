import React from "react";
import Form1 from "../hcomponent/Form1";
function Dsection1() 
{
    function random()
    {
        
        return(Math.ceil(Math.random()*6));
    }
    const rd=random();
    return (
    <section className="dsection1" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.503),rgba(0, 0, 0, 0.503)),url(../../../images/background-${rd}.jpg)`}}>
           <Form1/>
    </section>
    );
};
export default Dsection1;
