import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'

import { Provider } from 'react-redux';
import { store } from './redux-store'
import Basket from './components/Basket';
import LandingPage from './components/LandingPage';
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <h1>Fake Online Shop</h1>
            <BrowserRouter>
              <div>
                  <AppNavbar />
                  <Redirect from="/" to="/Home" />
                  <Route path="/Home" component={LandingPage} />
                  <Route path="/ShoppingList" component={ShoppingList} />
                  <Route path="/Basket" component={Basket} />
              </div>
            </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
