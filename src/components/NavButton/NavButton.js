import React from "react";
import { Link } from "react-router-dom";
import './NavButton.css';

const NavButton = props => (
    <div className="row" id="button-container">

        <div id="home-button" className={props.home}>
            <Link to="/" id="home-text">
                <i className="material-icons">home</i>
                <div>Home</div>
            </Link>
        </div>

        <div id="aboutme-button" className={props.about}>
            <Link to="/aboutme" id="aboutme-text">
                <i className="material-icons">person</i>
                <div>About Me</div>
            </Link>
        </div>

        <div id="portfolio-button" className={props.portfolio}>
            <Link to="/portfolio" id="portfolio-text">
                <i className="material-icons">work</i>
                <div>Portfolio</div>
            </Link>
        </div>

        <div id="resume-button" className={props.resume}>
            <Link to="/resume" id="resume-text">
                <i className="material-icons">library_books</i>
                <div>Resume</div>
            </Link>
        </div>

    </div>
)

export default NavButton;