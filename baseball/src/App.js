import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
  }

  render() {
    return (
      <div className="App">
        <Dashboard 
          strike={this.strike}
          ball={this.ball}
          hit={this.hit}
          foul={this.foul}
        />
        <Display 
          balls={this.state.balls} 
          strikes={this.state.strikes} 
        />
      </div>
    );
  }

 strike = () => {
   console.log(typeof this.state.strikes)
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 })
    } else {
      this.setState({ strikes: 0, balls: 0})
    }
  };

  ball = () => {
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1 })
    } else {
      this.setState({ balls: 0, strikes: 0 })
    }
  } ; 

  hit = () => {
    this.setState({ strikes: 0, balls: 0 })
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 })
    }
  };

}

export default App;
