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