import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on, });
  };
  render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
          <div className="logoButton">
            <img src={logo} className={light} alt="logo" />
            <p><span>Is Homer working ? </span><button
              className={light} onClick={this.handleClick}
              className={light}>{light.toUpperCase()}</button></p>
          </div>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;
