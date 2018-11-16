import React, { Component } from "react";
import './Aboutme.css';
import '../../components/Avatar/Avatar';
import NavButton from "../../components/NavButton/NavButton";
import Carousel from "../../components/Carousel/Carousel";

class Aboutme extends Component {

    render() {
        return (
            <div>
                <div className="parallax">
                    <div id="aboutme-container">
                        <NavButton />
                        <Carousel />
                        I am an avid photographer and I love taking pictures of landscapes and anything that inspires me to create.
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;