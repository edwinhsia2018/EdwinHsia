import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import PageTransition from 'react-router-page-transition';

//Pages
import Main from './pages/Main/Main';
import Aboutme from './pages/Aboutme/Aboutme';
import NoMatch from './pages/404Page/NoMatch';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';



class App extends Component {
  render() {
    return (
      <div className="main-body">

        <Router>
          <PageTransition>
            <Switch location={this.props.location}>
              <Route exact path="/" component={Main} />
              <Route exact path="/aboutme" component={Aboutme} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route component={NoMatch} />
            </Switch>
          </PageTransition>
        </Router>

      </div>
    );
  }
}

export default App;
