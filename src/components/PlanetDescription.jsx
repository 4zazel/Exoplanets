import React from "react";
import ShapeCompare from "./ShapeCompare"
function PlanetDescription({planet})
{
    return(
        <div className="space_bg" style={{maxHeight:700}}>
            <h1 className="text-center">{planet.name} - {planet.shortDescription}</h1>
            <div className="m-5 row">
                <div className="col-4">
                    <h4 className="text-left">{planet.description}</h4>
                    <br/><br/><br/><br/>
                    <h3>Type: {planet.type}</h3>
                    <h3>Size: {planet.size} of Earth</h3>
                    <h3>Mass: {planet.mass} of Earth</h3>
                    <h3>Date of Discovery: {planet.dateOfDiscovery}</h3>
                </div>
                <div className="col-8 overflow-hidden row">
                    <ShapeCompare className="col" planet={planet}/>
                </div>
            </div>
        </div>
    )
}

export default PlanetDescription;