import React, { Component } from "react";
import './Portfolio.css';
import portfolioList from '../../portfolio.json';
import PortfolioApps from '../../components/Portfolio/PortfolioApps';
import NavButton from '../../components/NavButton/NavButton';

const Portfolio = props => (
    <div className="portfolio-bg">
        <NavButton />
        {<div>This is a portfolio of the work that I have done to give an example of the kind of work that I have completed.
          <br />
          This is to provide a picture of the technologies that I have experience in so feel free to browse around and explore.
        </div>}
        {portfolioList.map(portfolio => {
          return <PortfolioApps
            {...portfolio}
            key={portfolioList.id}
          />
        })}
    </div>
)

export default Portfolio;