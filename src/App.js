import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor() {
    console.log('Constructor Invoked!');
    super();
    this.state = {
      user: ["Hello World"]
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/Shadowborn/followers')
      .then(response => {
        console.log(response, 'response');
        return response.json();
      })
      .then(response => {
        this.setState( { user: response });
      })
      .catch(error => {
        console.log(error);
      });

      fetch('https://api.github.com/users/Shadowborn')
        .then(response => {
          
          return response.json();
        })
        .then(response => {
          this.state.user.push(response);
          this.setState({ user: this.state.user });
          console.log(this.state.user, 'thisStateUser');
        })
        .catch(error => {
          console.log(error);
        });
  }



  render() {return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="cardContainer">
          {this.state.user.map(user => {
            return <UserCard key={user.html_url} user={user} />
          })}
        </div>
        
      </header>
    </div>
    );
  }
}

export default App;