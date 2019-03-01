import React, { Component } from 'react';
import PlayerData from './PlayerSection';
import MemoryCards from './MemoryCards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <PlayerData/>
         <MemoryCards/>
      </div>
    );
  }
}

export default App;
