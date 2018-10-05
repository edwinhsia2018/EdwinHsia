import React, { Component } from "react";
import './Main.css';
import Avatar from '../../components/Avatar/Avatar';
// import NavButton from '../../components/NavButton/NavButton';

class Main extends Component {
    state = {

    }

    handleClick = event => {

    }

    render() {
        return (
            <main>
                <div>
                    <div className="row">
                        <div className="col s4">
                            <a href="/aboutme"
                                className="input-lg waves-effect waves-light btn">
                                <i class="fa fa-user-circle-o" aria-hidden="true">About Me</i>
                            </a>
                        </div>
                        <div className="col s4">
                            <a href="/aboutme"
                                className="input-lg waves-effect waves-light btn">
                                <i class="fa fa-suitcase" aria-hidden="true">Portfolio</i>
                            </a>
                        </div>
                        <div className="col s4">
                            <a href="/aboutme"
                                className="input-lg waves-effect waves-light btn">
                                <i class="fa fa-user-circle-o" aria-hidden="true">Resume</i>
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