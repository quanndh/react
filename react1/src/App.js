import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }

    this.minus = this.minus.bind(this);
    this.plus = this.plus.bind(this);
  }

  minus() {
    this.setState({
      count: this.state.count - 1
    })
  }

  plus() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const {count} = this.state;
    return (
      <div className="App">
        <button className="btn minus" onClick={this.minus}>-</button>
        <p>{count}</p>
        <button className="btn plus" onClick={this.plus}>+</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate(){
    console.log("update")
  }
  
  componentWillUnmount(){
    console.log("will unmount")
  }

};

export default App;
