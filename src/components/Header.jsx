import React from "react";

function Header()
{
    
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Strona Głowna</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Informacje</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Exoplanety</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Statystyki</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Kontakt</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )

}

export default Header;