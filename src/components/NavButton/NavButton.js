import React from "react";
import './NavButton.css';

const NavButton = props => (
    <div className="row">
        <div id="aboutme-button">
            <a href="/aboutme" id="aboutme-text">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                <div>About Me</div>
            </a>
        </div>

        <div id="portfolio-button">
            <a href="/portfolio" id="portfolio-text">
                <i className="fa fa-suitcase" aria-hidden="true"></i>
                <div>Portfolio</div>
            </a>
        </div>

        <div id="resume-button">
            <a href="/resume" id="resume-text">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                <div>Resume</div>
            </a>
        </div>

       
    </div>
)

export default NavButton;