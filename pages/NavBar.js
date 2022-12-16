import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/chain-info">Chain Info</Link>
                    </li>
                    <li>
                        <Link to="/projets">Projets</Link>
                    </li>
                    <li>
                        <Link to="/fakeBayc">FakeBayc</Link>
                    </li>
                    <li>
                        <Link to="/FakeNefturians">FakeNefturians</Link>
                    </li>
                    <li>
                        <Link to="/wrong-network">WrongNetwork</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        <Outlet />
        </>
    )
}
export default NavBar;