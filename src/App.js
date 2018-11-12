import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from "styled-components";
import './App.css';

//Pages
import Main from './pages/Main/Main';
import Aboutme from './pages/Aboutme/Aboutme';
import NoMatch from './pages/404Page/NoMatch';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

class App extends Component {
  render() {

    const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    
    div.transition-group {
      position: relative;
    }
    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }`;

    return (
      <div className="main-body">

        <Router>
          <Wrapper>
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={this.location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
              >
                <section className="route-section">
                  <Switch location={this.location}>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/aboutme" component={Aboutme} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/resume" component={Resume} />
                    <Route component={NoMatch} />
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          </Wrapper>
        </Router>

      </div>
    );
}
}

export default withRouter(App);
