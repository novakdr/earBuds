import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // 'Route' to be added
import { connect } from 'react-redux';
import * as actions from './actions';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Landing from './components/Landing';
// import Forms from "./components/Forms";
// import Arrow from './components/Arrow';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/main" component={Main} />
            <Route exact path="/landing" component={Landing} />
          </div>
        </BrowserRouter>
        <Main />

        {/* <Arrow></Arrow> */}
        <Feature1 />
        {/* <Arrow></Arrow> */}
        <Feature2 />
        {/* <Arrow></Arrow> */}
        <Feature3 />
        {/* <Forms/> */}
      </div>
    );
  }
}

export default connect(null, actions)(App);
