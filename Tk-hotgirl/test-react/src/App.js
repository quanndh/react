import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from "./axios";
import HomeScreen from './container/HomeScreen';
import DetailScreen from './container/DetailScreen';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  state={

  }

  onLogin = () => {
    axios
      .post("/api/auth", {
        username: "admin",
        password: "123456"
      })
      .then(res => {
        console.log(res);
        this.setState({
          username: res.data.username,
          id: res.data.id
        })
      })
      .catch(err => console.err(err));
  }

  render() {
    return (
      <Router >
        <div className="App">
            <Route exact path="/" render={props => {
              return <HomeScreen 
                {...props} 
                username={this.state.username} 
                onLogin={this.onLogin} />
            }}/> 
            <Route path="/images/:imageId" render={props => {
              return <DetailScreen
                {...props}
                username={this.state.username}
                onLogin={this.onLogin} />
            }}/>         
        </div>
      </Router>
     
    );
  }
}

export default App;
