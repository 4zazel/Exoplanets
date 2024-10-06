import React from "react";

function Introduction()
{
    return(
        <div className="space_bg row">
            <div className="overflow-auto m-4 col" style={{height: '700px'}}>
                <div>
                    <h1>What are exoplanets?</h1>
                    <p>It's pretty simple. Exoplanets are planets outside of the solar system.</p>
                    <img src="img/telescope.png" width={500} style={{float: "right"}}/>
                    <p>The first exoplanet was spotted in 1917, but back then they didn't know what it was yet.</p>
                    <p>First actual conformation of an exoplanet happened in 1992.</p>

                    <h2>But...  how exactly are they discovered?</h2>
                    <p>With GIANT telescopes! There are many methods of finding these space spheres.</p>
                    <p>The 2 that have the best success are <b>Transit photometry </b>and <b>Doppler spectroscopy</b>.</p>
                    <h4>Transit photmetry</h4> 
                    <p>works by watching another bigger celestial body and seeing if any pass in between.</p>
                    <h4>Doppler spectroscopy</h4>
                    <p>works by observing Doppler shift in the spectrum of the planet's parent star</p>
                
                    <h2>The Infinite World of exoplanets.</h2>
                    <p>Some exoplanets are giant rocks, while other are gas giants.</p>
                    <p>They can be as hot as the sun, or freezing cold.</p>
                    <p>There is pretty much an infinite amount of worlds to explore.</p>
                    <p>You never know when we will find the next earth or the next mars.</p>
                    </div>
                    <img src="img/planet.png" width={400} style={{float: "left"}}></img>
                    <div style={{float: "right"}}>
                    <h2>Why are exoplanets named like that?</h2>
                    <p>Planets usually have 2 types of names. Alphanumeric "designations" and alphabetical "proper" names.</p>
                    <p>There reason behind that is that it would be extremely difficult to catalogue thousands</p>
                    <p>of planets with proper names like "Venus". Also we would run out of names!</p>
                    <p>The designations provide scientists with an easier way to track the discovered planets.</p>
                    <p>The first part is usually the telescope that discovered the exoplanet.</p>
                    <p>The number is the order in which the planet has been categorized</p>

                    <h1>We should care about space exploration!</h1>
                    <p>Without space exploration we wouldn't have things like phones or computers.</p>
                    <p>We owe many things that we use everyday to amazing people exploring this endless world!</p>
                </div>
                
    
            </div>

            </div>
   )
}

export default Introduction;