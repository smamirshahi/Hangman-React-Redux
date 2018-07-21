import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import FirstPageComponent from './components/FirstPageComponent'
import GamePageComponent from './components/GamePageComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://i.ytimg.com/vi/xbMVOoxtlk0/maxresdefault.jpg"} className="App-logo" alt="logo" />
        </header>
        <main>
          <Route exact path="/" component={FirstPageComponent} />
          <Route exact path="/hangman" component={GamePageComponent} />
        </main>
      </div>
    );
  }
}

export default App;