import React, { Component } from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Home from '../Home/Home'
import Show from '../Show/Show'
import Create from '../Create/Create'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <h1 id='title'>Audubon Society</h1> 
      <Route exact path='/' component={Home} />
      <Route exact path='/show' component={Show} />
      <Route exact path='/create' component={Create} />
      </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
