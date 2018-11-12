import React, { Component } from "react";
import './Portfolio.css';
import portfolioList from '../../portfolio.json';
import PortfolioApps from '../../components/Portfolio/PortfolioApps';
import NavButton from '../../components/NavButton/NavButton';
import styled from "styled-components";

const Portfolio = props => (
    <div className="portfolio-bg">
        <NavButton />
        <Wrapper>
        {portfolioList.map(portfolio => {
          return <PortfolioApps
            {...portfolio}
            key={portfolioList.id}
          />
        })}
        </Wrapper>
    </div>
)

const Wrapper = styled.div`
    /* omitted */`;

export default Portfolio;