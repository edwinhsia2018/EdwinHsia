import React from "react";
import './NavButton.css';

const NavButton = props => (
    <div className="row" id="button-container">

        <div id="home-button">
            <a href="/" id="home-text">
                <i className="material-icons">home</i>
                <div>Home</div>
            </a>
        </div>

        <div id="aboutme-button">
            <a href="/aboutme" id="aboutme-text">
                <i className="material-icons">person</i>
                <div>About Me</div>
            </a>
        </div>

        <div id="portfolio-button">
            <a href="/portfolio" id="portfolio-text">
                <i className="material-icons">work</i>
                <div>Portfolio</div>
            </a>
        </div>

        <div id="resume-button">
            <a href="/resume" id="resume-text">
                <i className="material-icons">library_books</i>
                <div>Resume</div>
            </a>
        </div>

    </div>
)

export default NavButton;