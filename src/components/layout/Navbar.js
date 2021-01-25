import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-2">
            <div className="container-fluid">
                <form className="d-flex flex-row bd-highlight">
                    <Link to='/' className="navbar-brand text-light">SuperMarket</Link>
                    <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
                <form className="d-flex flex-row-reverse bd-highlight">
                    <Link to='/about' className="navbar-brand text-light">About</Link>
                    <Link to='/login' className="navbar-brand text-light">Login</Link>
                    <Link to='/signup' className="navbar-brand text-light">SignUp</Link>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;
