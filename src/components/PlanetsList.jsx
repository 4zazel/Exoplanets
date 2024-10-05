import React from "react";
import PlanetCard from "./PlanetCard";
import planets from "../assets/planets.json"

function PlanetsList()
{
    return(
        <>
        <br></br>
        <h1 className="text-center">Pick an Exoplanet to learn more!</h1>
        <div className="container text-center">
            <div className="row">
                {planets.map(planet =><div className="col col-4"><PlanetCard key={planet.id} planet={planet}/></div>)}
            </div>
        </div>
        </>
    )
}

export default PlanetsList;