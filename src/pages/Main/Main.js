import React, { Component } from "react";
import './Main.css';
import Avatar from '';
import NavButton from '../../components/NavButton/NavButton';

class Main extends Component {
    state = {

    }

    handleClick = event => {

    }

    render() {
        return (
            <div>
                <NavButton />
                <main>
                    <Avatar />
                </main>
            </div>
        )
    }
}