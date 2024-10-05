import React from "react";

function PlanetDescription(id, name, description, shortDescription, dateOfDiscovery, mass, type, size)
{
    return(
        <>
            <h1 className="text-center">Planet 1 - The first exoplanet ever discovered!</h1>
            <div className="m-5 row">
                <div className="col">
                    <h4 className="text-left">This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.</h4>
                    <br/><br/><br/><br/>
                    <h3>Gravity: 10</h3>
                    <h3>Type: Gas</h3>
                    <h3>Size: 4km</h3>
                    <h3>Date of Discovery: 5.05.1999</h3>
                </div>
                <div className="col">
                    <img src="src/assets/placeholder.JPG" href="#"></img>
                </div>
            </div>
        </>
    )
}

export default PlanetDescription;