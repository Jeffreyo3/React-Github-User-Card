import React from 'react';
import './App.css';

import { CardDeck } from "shards-react";

import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor() {
    super();
    // set state. State can be mutated in class components
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
        // state is an object in class components
        // setState will need to access the specific key-value pair in the object, state
        // make sure to set the data appropriately
        // in this case, response is an object, but we need to keep the value of 'users' as an array
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
        // Since state is mutable we need to once again tell setState to keep users as an array
        // We want to keep our original user info so we will spread in the previous state
        // Our response is an array. In order to prevent the array from nesting inside of our 
        //       users array, we will need to spread that array again.
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
