import React from "react";

function Introduction()
{
    return(
        <div className="space_bg row">
            <div className="overflow-auto m-4 col" style={{height: '400px'}}>
                <h1>What are exoplanets?</h1>
                <p>It's pretty simple. Exoplanets are planets outside of the solar system.</p>
                <p>The first exoplanet was spotted in 1917, but back then they didn't know what it was yet.</p>
                <p>First actual conformation of an exoplanet happened in 1992.</p>

                <h2>But...  how exactly are they discovered?</h2>
                <p>With GIANT telescopes! There are many methods of finding these space spheres.</p>
                <p>The 2 that have the best success are <b>Transit photometry </b>and <b>Doppler spectroscopy</b>.</p>
                <h4>Transit photmetry</h4> 
                <p>works by watching another bigger celestial body and seeing if any pass in between.</p>
                <h4>Doppler spectroscopy</h4>
                <p>works by observing Doppler shift in the spectrum of the planet's parent star</p>
    
            </div>

            </div>
   )
}

export default Introduction;