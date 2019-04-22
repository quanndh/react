import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';


const red = 0;
const orange = 1;
const green = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
        currentColor: red
    }

    setInterval(() => {
        this.setState({
            currentColor: this.genNextColor(this.state.currentColor)
        })
    }, 1000)
  }
  genNextColor(color) {
    switch(color) {
        case red:
            return green;
        case green:
            return orange;
        default:
            return red;
    }
  }
  render() {
    const {currentColor} = this.state;
    return (
      <div className="App">
          <TrafficLight currentColor={currentColor}/>
      </div>
    );
  }
}

export default App;
