import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Heading from './components/Heading';
import Details from './components/Details';
import Lead from './components/Lead';
import About from './components/About';
import Contact from './components/Contact';
import Footing from './components/Footing';

class App extends Component {
  render() {
    return (
      <div id='app' ref={this._handleContextRef}>
        <NavBar />
        <Heading />
        <Details />
        <Lead />
        <About />
        <Contact />
        <Footing />
      </div>
    );
  };
};

export default App;
