import react from "react";
import { setplace } from "./Form1";
function Listedplaces(param)
 {
    return (
           <div className="col listedplaces"style={{margin:"0 20px 30px 0",marginBottom:"30px"}}>
        <div class="card destcomp" style={{width: "18rem"}}>
            <img src={param.imag} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color:"#d44127"}}><i className="ion-ios-location" style={{marginRight:"8px"}}></i>{param.name}</h5>
                <p className="card-text">{param.desc}</p>
                <a href="#" onClick={()=>{setplace(param.name)}} class="btn btn-primary">Visit</a>
            </div>
        </div>
        </div>
    );
};
export default Listedplaces;