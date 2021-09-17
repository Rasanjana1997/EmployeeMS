import React from "react";
import {Link} from "react-router-dom";

function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" style={{backgroundColor:"#e3f2fd"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">EmployeeMS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link active" >Add Employer</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )

}

export default Header;