import React, { useState } from "react";
import Introduction from "./Introduction";
import PlanetsList from "./PlanetsList";
import PlanetDescription from "./PlanetDescription";
import MyContext from "../assets/MyContext";
import './Style.css';

function MainNav()
{
    const [isIntro, setIsIntro] = useState(true);
    const [currentPlanet, setCurrentPlanet] = useState({});
    
    return (
        <MyContext.Provider value={{isIntro, setIsIntro, currentPlanet, setCurrentPlanet}}>
            {isIntro ? <Introduction/> : <PlanetDescription planet={currentPlanet}/>}
            <PlanetsList/>
        </MyContext.Provider>
    )
}

export default MainNav;