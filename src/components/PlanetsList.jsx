import React from "react";
import PlanetCard from "./PlanetCard";

function PlanetsList()
{
    return(
        <div clas="container text-center">
            <div class="row">
                <div class="col">
                    <PlanetCard/>
                </div>
                <div class="col">
                    <PlanetCard/>
                </div>
                <div class="col">
                    <PlanetCard/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <PlanetCard/>    
                </div>
                <div class="col">
                    <PlanetCard/>
                </div>
                <div class="col">
                    <PlanetCard/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <PlanetCard/>
                </div>
                <div class="col">
                    <PlanetCard/>
                </div>
                <div class="col">
                    <PlanetCard/>
                </div>
            </div>
        </div>
    )
}

export default PlanetsList;