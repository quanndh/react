import React, { Component } from 'react';
import './App.css';
import Tag from './components/Tag';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newTag: "",
      tag: ["Education",
            "Technology",
            "Inspriration"
      ]
    }

    this.addTag = this.addTag.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  addTag(event){
    let text = this.state.newTag;
    this.setState({
      newTag: "",
      tag: [
        ...this.state.tag,
        text
      ]
    })
  }

  onChange(event) {
    this.setState({
      newTag: event.target.value
    })
  }

  onKeyUp(event) {
    console.log(event.target.value)
    let text = event.target.value;
    if(event.keyCode === 13){
      if(!text) return;

      text = text.trim();
      if(!text) return;

      this.setState({
        newTag: "",
        tag: [
          ...this.state.tag,
          text
        ]
      })
    }
  }

  render() {
    const { tag, newTag } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          className="input"
          value= {newTag}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          />
        <button className="btn" onClick={this.addTag}>Add tag</button>
        {
          tag.map((item, index) => 
              <Tag 
                content={item} 
                key={index}/>
            )
        }
       
      </div>
    );
  }
}

export default App;
