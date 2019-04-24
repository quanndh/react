import React, { Component } from 'react';
import GirlImage from "../components/GirlImg.js";
import axios from "../axios";
import NavBar from "../components/navBar.js";

class DetailScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        comment: [],
        newComment: "",
        images: ""
      }

      this.commentText = this.commentText.bind(this);
    }
   
    
    componentDidMount() {
        axios.get(`/api/images/${this.props.match.params.imageId}`)
          .then(data => {
            console.log(data.data);
            this.setState({
              images: data.data,

            })
          })
          .catch(err => console.error(err));
        
      }
    
    onSearchChange = text => this.setState({search: text});

    commentText(e) {
      console.log(e.target.value)
      this.setState({
        comment: e.target.value
      })
    }

    onKeyUp(e) {
      let text = e.target.value;
      if(e.keyCode === 13){
        if(!text) return;
  
        text = text.trim();
        if(!text) return;
  
        axios.post(`/${this.state.images.imageId}/comments`)
      }
    }

    render() {
        return (
            <div className="">
                <NavBar 
                    onSearchChange={this.onSearchChange}
                    username={this.props.username}
                    onLogin={this.props.onLogin}/>
                <div className="main_content container">
                  <div className="row">
                    <div className="col-6 mr-auto ml-auto">
                      {
                        this.state.images ? <GirlImage img={this.state.images} /> : ''
                      }
                      <input 
                        type="text"
                        className="form-control"
                        onChange={this.commentText}
                        onKeyUp={this.addComment}
                      />
                    </div>
                  </div>  
                </div>
            </div>
        );
    }
}

export default DetailScreen;
