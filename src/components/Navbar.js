import React from "react";
import logo from "/Users/ericlim/React/project-1/src/logo.svg";

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={logo} className="nav-logo"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}