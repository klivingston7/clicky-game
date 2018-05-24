import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">Clicky Game</a>
        <h4 className="ml-auto mt-2" id="counters">Score: {props.score} | Top score: {props.top} </h4>
    </nav>
)

export default Navbar;