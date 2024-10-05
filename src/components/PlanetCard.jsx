import React, { useContext } from "react";
import MyContext from "./MyContext";

function PlanetCard()
{

    const {isIntro, setIsIntro} = useContext(MyContext);

    return(
        
    <div className="card m-3">
        <img src="" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Planeta1</h5>
            <button className="btn btn-primary" onClick={() => setIsIntro(!isIntro)}>Text</button>
        </div>
    </div>
    
    )
}

export default PlanetCard;