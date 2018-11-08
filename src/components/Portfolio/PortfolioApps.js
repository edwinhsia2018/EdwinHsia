import React, { Component } from "react";
import './PortfolioApps.css';

const PortfolioApps = props => (
    <div className="portfolioapps-container">
    
        <div className="card">
            <div className="portfolio-links" dataid={props.id}>
                <img
                    className="card-image waves-effect waves-block waves-light"
                    alt={props.name}
                    src={props.image}
                    link={props.link} />
            </div>
        </div>

        <div className="portfolio-titles" dataid={props.id}>
            {props.name}
        </div>

    </div>
)

export default PortfolioApps;