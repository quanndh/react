import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from "./components/navBar.js";
import axios from "./axios";
import MainContain from "./components/MainContain";

class App extends Component {
  state = {
    images: [],
    search: "",
    username: "",
    id: ""
  }

  componentDidMount() {
    axios.get("/api/images")
      .then(data => {
        console.log(data.data);
        this.setState({
          images: data.data,
        })
      })
      .catch(err => console.error(err));
    
  }

  onSearchChange = text => this.setState({search: text});

  onLogin = () => {
    axios
      .post("/api/auth", {
        username: "admin",
        password: "123456"
      })
      .then(res => {
        this.setState({
          username: res.data.username,
          id: res.data.id
        })
      })
      .catch(err => console.err(err));
  }

  render() {

    const {images, search, username, password} = this.state;
    const displayImg = images.filter(img => img.title.includes(search) )

    return (
      <div className="App">

        <NavBar 
          onSearchChange={this.onSearchChange}
          onLogin={this.onLogin}
          username={username}
          password={password}/>
        <MainContain img={displayImg}/>
        
      </div>
    );
  }
}

export default App;
