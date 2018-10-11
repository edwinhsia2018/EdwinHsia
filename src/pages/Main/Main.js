import React, { Component } from "react";
import './Main.css';
import Avatar from '../../components/Avatar/Avatar';
// import NavButton from '../../components/NavButton/NavButton';

class Main extends Component {
    // state = {

    // }

    // handleClick = event => {

    // }

    render() {
        return (
            <main>
                <div>
                    <div className="parallax-container">
                        <div className="parallax"><img src="../../images/background1.jpg" />
                        </div>
                    </div>
                    <div className="row container" id="main-container">
                        <div className="col s4" id="nav-button">
                            <a href="/aboutme"
                                className="input-lg waves-effect waves-light btn">
                                <i className="fa fa-user-circle-o" aria-hidden="true">About Me</i>
                            </a>
                        </div>
                        <div className="col s4" id="nav-button">
                            <a href="/aboutme"
                                className="input-lg waves-effect waves-light btn">
                                <i className="fa fa-suitcase" aria-hidden="true">Portfolio</i>
                            </a>
                        </div>
                        <div className="col s4" id="nav-button">
                            <a href="/aboutme"
                                className="input-lg waves-effect waves-light btn">
                                <i className="fa fa-user-circle-o" aria-hidden="true">Resume</i>
                            </a>
                        </div>
                        <div className="col s4" id="nav-button">
                            <a href="portfolio">
                            <i className="fa fa-suitcase" aria-hidden="true"></i>
                            <div>Portfolio</div>
                            </a>
                            </div>
                        <Avatar />
                    </div>

                </div>
            </main>
        )
    }
}

export default Main;