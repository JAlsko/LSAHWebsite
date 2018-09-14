import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import Doctors from './components/Doctors';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/doctors" component={Doctors} />
          <Route exact path = "/services" component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
