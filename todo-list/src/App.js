import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/todoItem';
import tick from "./img/tick.svg";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newItem: "",
      currentState: "all",
      todoItems : [
        {title: "Mua bimbim", isComplete: false},
        {title: "da bong", isComplete: false},
        {title: "an", isComplete: false}
      ],
    }

    this.inputElement = React.createRef();

    this.onItemClicked = this.onItemClicked.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showDone = this.showDone.bind(this);
    this.showNotDone = this.showNotDone.bind(this);
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  onItemClicked(item) { 
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
   
  }

  onKeyUp(event) {
    let text = event.target.value;
    if(event.keyCode === 13){
      if(!text) {
        return;
      } 

      text = text.trim();
      if(!text) return;

      this.setState({
        newItem: "",
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  showAll() {
    this.setState({
      currentState: "All"
    })
  }

  showDone() {
    this.setState({
      currentState: "Done"
    })
  }

  showNotDone() {
    this.setState({
      currentState: "Not Done"
    })
  }

  render() {
    const {todoItems, newItem, currentState} = this.state;
    let items = []
    if(currentState === "Done") {
      items = todoItems.filter(item => {
        return item.isComplete === true;
      })
    } else if (currentState === "Not Done") {
      items = todoItems.filter(item => {
        return item.isComplete === false;
      })
    } else items = todoItems;
    if(items.length){
        return (
        <div className="App">
            
            <div className="Header">
              <img src={tick} width={32} height={32} />
              <input 
                type="text" 
                placeholder="Add an item" 
                onKeyUp={this.onKeyUp}
                value = {newItem}
                onChange = {this.onChange}
                ref={this.inputElement}
              />
            </div>
            {
              items.map((item, index) =>  
                <TodoItem 
                  key={index} 
                  item={item} 
                  onClick={this.onItemClicked(item)} 
                />
              )
            }
            <div className="footer">
              <button className="btn" onClick={this.showAll}>All</button>
              <button className="btn" onClick={this.showDone}>Done</button>
              <button className="btn" onClick={this.showNotDone}>Not Done</button>
            </div>
        </div>
        );
    } else {
        return (
          <div className="App">
            <div className="Header">
              <img src={tick} width={32} height={32} />
              <input 
                type="text" 
                placeholder="Add an item" 
                onKeyUp={this.onKeyUp}
                value = {newItem}
                onChange = {this.onChange}
              />
            </div>
            <p>Nothing here</p>
            <div className="footer">
              <button className="btn" onClick={this.showAll}>All</button>
              <button className="btn" onClick={this.showDone}>Done</button>
              <button className="btn" onClick={this.showNotDone}>Not Done</button>
            </div>
          </div>
        );
    }
    
  }
}

export default App;
