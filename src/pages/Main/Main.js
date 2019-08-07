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
            <main className="transition-item">
                <div>
                    <div>
                        <div className="parallax">
                            <div id="main-container">
                                <NavButton />
                                <div className="intro-title">
                                    <h1>Welcome!</h1>
                                    <p>I am a frontend web developer who loves to make beautiful websites</p>
                                    <p>that is both aethestically pleasing as well as intuitive and functional.</p>
                                </div>
                                <div>
                                    <div>
                                        <Avatar id="avatar-container" />
                                    </div>
                                </div>
                                <ul className="main-title">
                                    This site was created using React
                                    <li>
                                        For the styling a combination of Materialize and CSS was used.
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