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
                    {/* <div className="parallax-container">
                        <div className="parallax"><img src="../../images/background1.jpg" />
                        </div>
                    </div> */}
                    <div className="row container" id="main-container">
                        
                        <NavButton />
                        <Avatar id="avatar-container"/>
                    </div>

                </div>
            </main>
        )
    }
}

export default Main;