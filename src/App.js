import React from 'react';
import './App.css';

import { CardDeck } from "shards-react";

import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor() {
    console.log('Constructor Invoked!');
    super();
    this.state = {
      users: ["Hello Friends"]
    };
  }

  componentDidMount() {
    // fetch user data
    fetch('https://api.github.com/users/Shadowborn')
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ users: [response] })
      })
      .catch(err => {
        console.log('Error on user fetch', err)
      })

    // fetch followers data
    fetch('https://api.github.com/users/Shadowborn/followers')
      .then(response => {
        console.log(response, 'Followers response');
        return response.json();
      })
      .then(response => {
        console.log(response, '2nd then Followers response')
        this.setState({ users: [...this.state.users, ...response] });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="header">Shadowborn's followers</h1>
        </header>

        <CardDeck>
          {this.state.users.map(user => {
            return <UserCard key={user.id} user={user} />
          })}
        </CardDeck>
      </div>
    );
  }


}

export default App;
