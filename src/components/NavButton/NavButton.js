import React from "react";
import './NavButton.css';
import { Link } from "react-router-dom";

const NavButton = props => (
    <div className="row" id="button-container">

        <div id="home-button">
            <Link to="/" id="home-text">
                <i className="material-icons">home</i>
                <div>Home</div>
                </Link>
        </div>

        <div id="aboutme-button">
            <Link to="/aboutme" id="aboutme-text">
                <i className="material-icons">person</i>
                <div>About Me</div>
            </Link>
        </div>

        <div id="portfolio-button">
            <Link to="/portfolio" id="portfolio-text">
                <i className="material-icons">work</i>
                <div>Portfolio</div>
            </Link>
        </div>

        <div id="resume-button">
            <Link to="/resume" id="resume-text">
                <i className="material-icons">library_books</i>
                <div>Resume</div>
            </Link>
        </div>

    </div>
)

export default NavButton;