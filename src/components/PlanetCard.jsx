import React, { useContext } from "react";
import MyContext from "../assets/MyContext";
import Shape from './Shape.jsx'

function PlanetCard({planet})
{
    
    const {isIntro, setIsIntro, currentPlanet, setCurrentPlanet} = useContext(MyContext);

    return(
        
    <div id={"card"+planet.id} className="card m-3">
        <div className="space_bg" style={{zIndex: 10, display: "inline-block", float: "left"}}>
            <Shape planet={planet}/>
        </div>
        <div className="card-body card_bg">
            <h4 className="card-title">{planet.name}</h4>
            <div className="card-text">{planet.shortDescription}</div>
            <button className={"btn " + (currentPlanet == planet ? "btn-danger" : "btn-success")} onClick={() => {
                scrollTo(top)
                setIsIntro(currentPlanet == planet && isIntro == false)
                if(currentPlanet != planet) setCurrentPlanet(planet);
                else setCurrentPlanet({});
                
            }}>{currentPlanet == planet ? "HIDE" : "SHOW"}</button>
        </div>
    </div>
    
    )
}

export default PlanetCard;