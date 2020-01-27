import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Tagline from './Tagline';
import Social from './Social';
import Footer from './Footer';

// let time = new Date().toLocaleString();

class App extends React.Component{
 render(){
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className="intro">
            Hello, {this.props.salute} {this.props.name}!
          </p>
          <Tagline></Tagline>
          <Social></Social>
          <Clock></Clock>
          <Footer></Footer>
        </div>
      </div>
    );
 }
}

export default App;
