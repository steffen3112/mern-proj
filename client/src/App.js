import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'

import { Provider } from 'react-redux';
import {store} from './store'
import Basket from './components/Basket';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <h1>Welcome to React</h1>
            <AppNavbar />
            <Router>
              <Route path="/ShoppingList/" component={ShoppingList} />
            </Router>
            <Router>
              <Route path="/Basket" component={Basket} />
            </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
