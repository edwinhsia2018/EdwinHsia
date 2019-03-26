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
                                <div>
                                    Welcome to my page!  I am a front-end UI web developer who loves to make beautiful websites 
                                    that is both aethetically pleasing as well as incredibly functional.
                                </div>
                                <div>
                                    <div>
                                        <Avatar id="avatar-container" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        )
    }
}

export default Main;