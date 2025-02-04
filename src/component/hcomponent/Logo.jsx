import React from "react";
function Logo(param)
{
    return(
        <img src={param["imag"]} alt="LtsGo" style={{width:param.width,marginRight:"2vw"}} className={param.class}/>
    );
};
export default Logo;