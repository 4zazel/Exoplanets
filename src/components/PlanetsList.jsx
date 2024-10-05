import React from "react";
import PlanetCard from "./PlanetCard";

function PlanetsList()
{
    return(
        <>
        <br></br>
        <h1 className="text-center">Pick an Exoplanet to learn more!</h1>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <PlanetCard/>
                </div>
                <div className="col">
                    <PlanetCard/>
                </div>
                <div className="col">
                    <PlanetCard/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PlanetCard/>    
                </div>
                <div className="col">
                    <PlanetCard/>
                </div>
                <div className="col">
                    <PlanetCard/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PlanetCard/>
                </div>
                <div className="col">
                    <PlanetCard/>
                </div>
                <div className="col">
                    <PlanetCard/>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlanetsList;