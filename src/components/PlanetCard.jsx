import React, { useContext } from "react";
import MyContext from "../assets/MyContext";

function PlanetCard({planet})
{
    
    const {isIntro, setIsIntro, currentPlanet, setCurrentPlanet} = useContext(MyContext);

    return(
        
    <div id={"card"+planet.id} className="card m-3">
        <img src={"img/small" + planet.id + ".png"} style={{maxHeight: 400, maxWidth: 400}} className="card-img-top"/>
        <div className="card-body">
            <h4 className="card-title">{planet.title}</h4>
            <div className="card-text">{planet.shortDescription}</div>
            <button className={"btn " + (currentPlanet == planet ? "btn-danger" : "btn-success")} onClick={() => {
                scrollTo(top)
                setIsIntro(false)
                setCurrentPlanet(planet)
            }}>Pokaż</button>
        </div>
    </div>
    
    )
}

export default PlanetCard;