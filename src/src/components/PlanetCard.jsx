import React, { useContext } from "react";
import MyContext from "../assets/MyContext";

function PlanetCard({planet})
{
    
    const {isIntro, setIsIntro, currentPlanet, setCurrentPlanet} = useContext(MyContext);

    return(
        
    <div id={"card"+planet.id} className="card m-3">
        <img src={planet.image} className="card-img-top"/>
        <div className="card-body">
            <h4 className="card-title">{planet.title}</h4>
            <div className="card-text">{planet.shortDescription}</div>
            <button className="btn btn-primary" onClick={() => {
                setIsIntro(false)
                setCurrentPlanet(planet)
            }}>Pokaż</button>
        </div>
    </div>
    
    )
}

export default PlanetCard;