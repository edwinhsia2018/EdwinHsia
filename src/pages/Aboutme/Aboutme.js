import React, { Component } from "react";
import './Aboutme.css';
import '../../components/Avatar/Avatar';
import NavButton from "../../components/NavButton/NavButton";
import ImageCarousel from '../../components/Carousel/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

class Aboutme extends Component {

    render() {
        return (
            <div className="transition-item">
                <div className="aboutme-parallax">
                    <div id="aboutme-container">
                        <NavButton />
                        <ImageCarousel 
                            className="carousel"
                            image1={"https://www.aconsciousrethink.com/wp-content/uploads/2018/02/sunrise-quotes.jpg"}
                            image2={"https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg"}
                            image3={"https://cdn.pixabay.com/photo/2016/11/06/05/36/landscape-1802337_960_720.jpg"}
                            image4={"https://cdn.pixabay.com/photo/2017/08/07/23/11/iceland-2608985_960_720.jpg"}
                            image5={"https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg"}
                        />
                        <p className="text-white">I am an avid photographer and I love taking pictures and working with the latest technology.</p>
                        <p className="text-white">I love learning new concepts and taking on challenges because they are opportunities to grow and improve.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;