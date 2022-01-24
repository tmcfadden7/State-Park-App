import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="navbar text-center navbar-expand-md navbar-light bg-light" id="home">
                <div className="container">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <a className="navbar-brand" href="/">State Parks</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#parks">Parks <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#activity">Activities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Locations</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
