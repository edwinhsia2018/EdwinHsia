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
                        I am an avid photographer and I love taking pictures and working with the latest technology.  
                        I love learning new concepts and taking on challenges because they are opportunities to grow and improve.
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;