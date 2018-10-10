import React from "react";
import './NavButton.css';

const NavButton = props => (
    <div className="row">
        <div className="col s4">
            <a href="/aboutme"
                className="input-lg waves-effect waves-light btn">
                <i className="fa fa-user-circle-o" aria-hidden="true">About Me</i>
            </a>
        </div>
        <div className="col s4">
            <a href="/aboutme"
                className="input-lg waves-effect waves-light btn">
                <i className="fa fa-suitcase" aria-hidden="true">Portfolio</i>
            </a>
        </div>
        <div className="col s4">
            <a href="/aboutme"
                className="input-lg waves-effect waves-light btn">
                <i className="fa fa-user-circle-o" aria-hidden="true">Resume</i>
            </a>
        </div>
    </div>
)

export default NavButton;