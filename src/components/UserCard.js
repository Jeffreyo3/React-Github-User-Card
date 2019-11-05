import React from 'react';



function UserCard(props) {
    return (
      <div className="user-card">
        <img src={props.user.avatar_url} />
        <div className="userCard-body">
          <h1>{props.user.login}</h1>
          <p>{props.user.bio}</p>
          <a href={props.user.html_url}>
            Read More
          </a>
        </div>
      </div>
    );
  }
  
  export default UserCard;