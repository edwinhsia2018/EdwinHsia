import React, { Component } from "react";
import './Main.css';
import Avatar from '../../components/Avatar/Avatar';
import NavButton from "../../components/NavButton/NavButton";

class Main extends Component {
    // state = {

    // }

    // handleClick = event => {

    // }

    render() {
        return (
            <main>
                <div>
                    <div>
                        <div className="parallax">
                            <div id="main-container">
                                <NavButton />
                                <div className="intro-title">
                                    WELCOME!
                                    <br />
                                    I am a front-end UI web developer who loves to make beautiful websites
                                    <br />
                                    that is both aethetically pleasing as well as incredibly functional.
                                </div>
                                <div>
                                    <div>
                                        <Avatar id="avatar-container" />
                                    </div>
                                </div>
                                <ul className="main-title">
                                    This page was created using React
                                    <li>
                                        For the styling a combination of Bootstrap and CSS was used.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        )
    }
}

export default Main;