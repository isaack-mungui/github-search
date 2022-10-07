import React from "react"
import { NavLink } from "react-router-dom"


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
};

function NavBar() {
    return (
        <div>
            <div>
                <NavLink to="/" style={linkStyles}>Home</NavLink>
                <NavLink to="/user" style={linkStyles}>Users</NavLink>
                <NavLink to="/repo" style={linkStyles}>Repositories</NavLink>
            </div>
        </div>
    )
}

export default NavBar