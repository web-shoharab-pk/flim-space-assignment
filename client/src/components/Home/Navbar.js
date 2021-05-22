import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className=" navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-current="page" href="/cart">Cart</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;