import React, { useState } from "react";
import Introduction from "./Introduction";
import PlanetsList from "./PlanetsList";
import PlanetDescription from "./PlanetDescription";
import MyContext from "./MyContext";

function MainNav()
{
const [isIntro, setIsIntro] = useState(true)

    return (
        <MyContext.Provider value={{isIntro, setIsIntro}}>
            {isIntro ? <Introduction/> : <PlanetDescription/>}
            <PlanetsList/>
        </MyContext.Provider>
    )
}

export default MainNav;