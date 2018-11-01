import React, { Component } from "react";
import './PortfolioApps.css';

const PortfolioApps = props => (
        <div className="card">
            <div className="portfolio-links" dataid={props.id}>

                <img alt={props.name}
                    src={props.image}
                    link={props.link} />

                <div className="portfolio-titles" dataid={props.id}>
                    {props.name}
                </div>
                
            </div>
        </div>
)

export default PortfolioApps;