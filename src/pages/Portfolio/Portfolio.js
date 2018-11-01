import React, { Component } from "react";
import './Portfolio.css';
import NavButton from '../../components/NavButton/NavButton';

class Portfolio extends Component {
    
    render() {
        return (
            <div className="portfolio-bg">
                <NavButton />
                Portfolio page
            </div>
        )
    }
}

export default Portfolio;