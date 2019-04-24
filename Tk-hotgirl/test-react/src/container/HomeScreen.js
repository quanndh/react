import React, { Component } from 'react';
import MainContain from "../components/MainContain";
import NavBar from "../components/navBar.js";
import axios from "../axios";


class HomeScreen extends Component {
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
    
    render() {
        const {username, onLogin} = this.props;
        const displayImg = this.state.images.filter(img => img.title.includes(this.state.search) )
        return (
            <div>
                <NavBar 
                    onSearchChange={this.onSearchChange}
                    onLogin={onLogin}
                    username={username}/>
                <MainContain img={displayImg}/>
            </div>
        );
    }
}

export default HomeScreen;
