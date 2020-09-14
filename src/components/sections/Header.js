import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavItem from "../NavItem";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Project name</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <NavItem activeOnlyWhenExact={true} activeClassName="selected" to="/">Home</NavItem>
                            <NavItem to="/about">About</NavItem>
                            <NavItem to="/contact">Contact</NavItem>
                        </ul>
                        <div className="my-2 my-lg-0">
                            <Link to="/login" className="btn btn-success my-2 my-sm-0" >Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
