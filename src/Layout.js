import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {

    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <div className="main-container">
            <nav>

                <Link className="router-link" to="/">
                    <img className="left-logo" src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="rm-logo" />
                </Link>

                <img
                    src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
                    alt="rick-and-morty-logo"
                    className="nav-logo"
                />

                <ul className="nav-links">
                    <Link className="router-link" to="/"> <li>Characters</li> </Link>
                    <Link className="router-link" to="/episodes"> <li>Episodes</li> </Link>
                    <Link className="router-link" to="/location"> <li>Location</li> </Link>
                </ul>

                {/* Mobil Menu */}
                <input type="checkbox" checked={menuStatus} onChange={(e) => setMenuStatus(!menuStatus)} id="nav-mobil" />
                <label htmlFor="nav-mobil">Menu</label>

                <ul className={`dropdown ${menuStatus ? "dropdown-active" : ""} `}>
                    <Link onClick={() => setMenuStatus(!menuStatus)} className="router-link" to="/"> <li>Characters</li> </Link>
                    <Link onClick={() => setMenuStatus(!menuStatus)} className="router-link" to="/episodes"> <li>Episodes</li> </Link>
                    <Link onClick={() => setMenuStatus(!menuStatus)} className="router-link" to="/location"> <li>Location</li> </Link>
                </ul>

            </nav>

            <section>

                <Outlet />

            </section>

        </div>
    )
}

export default Layout