import React, { Component } from 'react';
import Geolocation from './components/Geolocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Geolocation/>
      </div>
    );
  }
}

export default App;
