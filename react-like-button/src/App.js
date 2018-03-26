import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      numOfClicks: 0,
      btnMessage: 'LIKES'
    }
  }
  btnInnerText = () => {
    if (this.state.numOfClicks === 0) {
      this.setState({
        btnMessage: 'LIKE',
        numOfClicks: this.state.numOfClicks + 1
        
      })
    } else {
      this.setState({
        btnMessage: 'LIKES',
        numOfClicks: this.state.numOfClicks + 1
      })
    }
  }
  render() {
    return (
      <div className="App">
        <button id="btn" onClick={this.btnInnerText}>
          <span>{this.state.numOfClicks} {this.state.btnMessage}</span>
        </button>
      </div>
    );
  }
}

export default App;
