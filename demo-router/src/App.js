import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "./components/TopMenu";
import Product from './components/Pages/Product';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />

          <Route path="/products" exact component={Product}></Route>

        </div>
      </Router>
      
    );
  }
}

export default App;
