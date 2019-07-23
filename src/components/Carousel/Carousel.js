import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';

class Carousel extends Component {
    render() {
        return (
            <Carousel
            showArrows={true}
            showThumbs={false}
            >
                <div>
                    <div>
                        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwifsejT4cvjAhWJzlkKHUrbB3MQjRx6BAgBEAU&url=https%3A%2F%2Fwww.churchofjesuschrist.org%2Fmedia-library%2Fimages%2Fsunrise-forest-trees-mountains-1615775%3Flang%3Deng&psig=AOvVaw1Or7fCoaujsGF8drKS7QUY&ust=1563996009933084" />
                        <p>Example 1</p>
                    </div>
                    <div>
                        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiymtqn4cvjAhVEtlkKHfNwAYYQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsunrise%2F&psig=AOvVaw1Or7fCoaujsGF8drKS7QUY&ust=1563996009933084" />
                        <p>Example 2</p>
                   </div>
                    <div>
                        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjD76y14cvjAhVH1VkKHRJdA24QjRx6BAgBEAU&url=http%3A%2F%2Falliswall.com%2Fnature%2Fbeautiful-sunrise&psig=AOvVaw1Or7fCoaujsGF8drKS7QUY&ust=1563996009933084" />
                        <p>Example 3</p>
                    </div>
                    <div>
                        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiAgva_4cvjAhWHrVkKHcg1BhAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.4ksunrise.com%2F2018%2F11%2Fbeautiful-sunrise-trees-mountain-and.html&psig=AOvVaw1Or7fCoaujsGF8drKS7QUY&ust=1563996009933084" />
                        <p>Example 4</p>
                    </div>
                    <div>
                        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiTh5PI4cvjAhUlrlkKHT-2Dc0QjRx6BAgBEAU&url=https%3A%2F%2Fmedicalxpress.com%2Fnews%2F2017-11-sunrise-sunset-daily-city-dwellers.html&psig=AOvVaw1Or7fCoaujsGF8drKS7QUY&ust=1563996009933084" />
                        <p>Example 5</p>
                    </div>
                </div>
            </Carousel>
        )
    }
}

export default Carousel;