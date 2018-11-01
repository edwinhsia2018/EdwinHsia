import React, { Component } from "react";
import './Portfolio.css';
import portfolioList from '../../portfolio.json';
import PortfolioApps from '../../components/Portfolio/PortfolioApps';
import NavButton from '../../components/NavButton/NavButton';

const Portfolio = props => (
    <div className="portfolio-bg">
        <NavButton />
        {portfolioList.map(portfolio => {
          return <PortfolioApps
            {...portfolio}
            key={portfolioList.id}
          />
        })}
    </div>
)

export default Portfolio;