import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Main from '../src/pages/Main/Main';
// import PageTransition from 'react-router-page-transition';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Edwin Hsia</h1>
        </header>
        {/* <PageTransition> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/aboutme" component={Aboutme} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={resume} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        {/* </PageTransition> */}
      </div>
    );
  }
}

export default App;
