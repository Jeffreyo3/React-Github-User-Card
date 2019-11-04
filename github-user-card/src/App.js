import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserCard from './components/UserCard.js';

class App extends React.Component {
  render() {return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserCard />
        
      </header>
    </div>
    );
  }
}

export default App;
