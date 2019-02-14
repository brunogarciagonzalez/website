import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import HeroBlurb from './components/HeroBlurb.js'


class App extends Component {
  render() {
    return (
  
    <div className="App">
      <Navbar />
      <HeroBlurb />
        
    </div>
    );
  }
}

export default App;
