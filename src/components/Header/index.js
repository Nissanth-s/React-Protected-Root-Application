import React from "react"
import Cookies from 'js-cookie';

import "./header.css"

const Dashboard = () => {
    const getToken = Cookies.get('token');

    const logoutFn = () => {
        Cookies.remove('token')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-white">
            <div className="container-fluid">
                <img src="/logo512.png" alt="Logo" width={40} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active disabled" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link disabled">History</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link disabled">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link disabled">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link disabled">Blog</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {!getToken || getToken === "" || getToken === "undefined" ? (
                            <>
                                <button className="btn btn-info button-margin-r" type="submit">Login</button>
                                <button className="btn btn-secondary" type="submit">Register</button>
                            </>
                        ) : (
                            <button className="btn btn-info button-margin-r" type="submit" onClick={() => {
                                logoutFn()
                            }}>Logout</button>
                        )}


                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Dashboard;