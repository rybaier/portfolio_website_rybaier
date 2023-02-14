import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import '../../App.css'


const NavPanel = () => {
    return(
        <div className="navbar">
            <h2>NavBar</h2>
            <NavLink id="links" href="/"> Home </NavLink>
            <NavLink id="links" href="/projects"> Projects </NavLink>
            <NavLink id="links" href="/about"> About </NavLink>
            <NavLink id="links" href="/contact"> Contact </NavLink>
        </div>
    )
}
 
export default NavPanel