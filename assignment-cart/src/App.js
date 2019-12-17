import React, { Component } from 'react';
import './App.css';
import Header from './Components/header.component';
import Home from './Components/home.component';
import Cart from './Components/cart.component';

import { BrowserRouter as Router } from 'react-router-dom';
const Route = require("react-router-dom").Route;
 
class App extends Component {
  

  render() {
    return (
      <Router>
        <div id="layout-content" className="layout-content-wrapper">
          <Header />
          <section className="container-fluid">
          <div className="row" id="body-row">
            <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
              <aside>
                Aside
                {/* <FilterCard /> */}
              </aside>
            </div>
            <div className="col p-4">
              <Route path="/" exact strict component={Home} />
              <Route path="/cart" exact strict component={Cart} />
            </div>
          </div>
        </section>
        </div>
      </Router>
    );
  }
}

export default App;