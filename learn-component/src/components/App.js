import React, { Component } from 'react';
import './App.css';
import Tag from './Tag/Tag';

const data = [
  {
    name: "ahihi",
    status: "untested"
  },
  {
    name: "bhihi",
    status: "pass"
  },
  {
    name: "chihi",
    status: "fail"
  }
];


class App extends Component {

  render() {

    return (
      <div>
        {
          data.map((item, index) => {
            return (
              
              <Tag 
                key = {index}
                name={item.name} 
                status={item.status} 
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
