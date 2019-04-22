import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';

class App extends Component {

  render() {

    return (

      <div className="App">
        <Accordion heading="Heading">
          Demo children
        </Accordion>
      </div>
    );
  }
}

export default App;
