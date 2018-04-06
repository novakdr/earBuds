import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
// import Forms from "./components/Forms";
// import Arrow from './components/Arrow';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Main></Main>
    
        {/* <Arrow></Arrow> */}
        <Feature1></Feature1>
        {/* <Arrow></Arrow> */}
        <Feature2></Feature2>
        {/* <Arrow></Arrow> */}
        <Feature3></Feature3>
        {/* <Forms/> */}




        
      </div>
    );
  }
}

export default App;
