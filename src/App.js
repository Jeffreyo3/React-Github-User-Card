import React from 'react';
import './App.css';

import { CardDeck } from "shards-react";

import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor() {
    console.log('Constructor Invoked!');
    super();
    this.state = {
      followers: ["Hello Friends"]
    };
  }

  componentDidMount() {
    // fetch followers data
    fetch('https://api.github.com/users/Shadowborn/followers')
      .then(response => {
        console.log(response, 'Followers response');
        return response.json();
      })
      .then(followers => {
        console.log(followers, '2nd then Followers response')
        this.setState({ followers: followers });
      })
      .catch(error => {
        console.log(error);
      });

    // fetch user data
    fetch('https://api.github.com/users/Shadowborn')
      .then(response => {
        console.log(response, 'User response')
        return response.json();
      })
      .then(user => {
        const current = this.state.followers
        this.setState({ followers: [user, ...current] })
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
          {this.state.followers.map(user => {
            return <UserCard key={user.id} user={user} />
          })}
        </CardDeck>
      </div>
    );
  }


}

export default App;
