import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel
                className="carousel"
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
            >
                <div>
                    <img src={this.props.image1} />
                    <p>Example 1</p>
                </div>
                <div>
                    <img src={this.props.image2} />
                    <p>Example 2</p>
                </div>
                <div>
                    <img src={this.props.image3} />
                    <p>Example 3</p>
                </div>
                <div>
                    <img src={this.props.image4} />
                    <p>Example 4</p>
                </div>
                <div>
                    <img src={this.props.image5} />
                    <p>Example 5</p>
                </div>
            </Carousel>
        )
    }
}

export default ImageCarousel;