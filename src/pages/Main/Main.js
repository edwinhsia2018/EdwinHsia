import React, { Component } from "react";
import './Main.css';
import Avatar from '../../components/Avatar/Avatar';
import NavButton from '../../components/NavButton/NavButton';

class Main extends Component {
    state = {

    }

    handleClick = event => {

    }

    render() {
        return (
            <main>
                <div>
                    <NavButton />
                    
                    <Avatar />

                </div>
            </main>
        )
    }
}

export default Main;