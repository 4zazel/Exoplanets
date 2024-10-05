import React from "react";

function PlanetDescription({planet})
{
    return(
        <>
            <h1 className="text-center">{planet.name} - {planet.shortDescription}</h1>
            <div className="m-5 row">
                <div className="col">
                    <h4 className="text-left">{planet.description}</h4>
                    <br/><br/><br/><br/>
                    <h3>Type: {planet.type}</h3>
                    <h3>Size: {planet.size} of Earth</h3>
                    <h3>Mass: {planet.mass} of Earth</h3>
                    <h3>Date of Discovery: {planet.dateOfDiscovery}</h3>
                </div>
                <div className="col">
                    <img src={"/img/big" + planet.id + ".png"} href="#"></img>
                </div>
            </div>
        </>
    )
}

export default PlanetDescription;