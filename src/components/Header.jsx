import React from "react";

function Header()
{
    
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Strona Głowna</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Informacje</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Exoplanety</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Kontakt</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )

}

export default Header;