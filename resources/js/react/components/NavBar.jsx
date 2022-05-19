import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import RootContext from "../lib/contexts/RootContext";

function NavBar() {
    const { loggedIn } = useContext(RootContext);
    const { logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    React JWT Auth with Laravel
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={(navInfo) =>
                                    navInfo.isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={(navInfo) =>
                                    navInfo.isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="dashboard"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        {loggedIn ? (
                            <li className="nav-item">
                                <button className="nav-link" onClick={logout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    className={(navInfo) =>
                                        navInfo.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
