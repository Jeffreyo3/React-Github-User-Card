import React from 'react';



function UserCard(props) {
    return (
      <div className="user-card">
        <img src={props.user.avatar_url} />
        <div className="userCard-body">
          <h1>{props.user.login}</h1>
          <p>{props.user.bio}</p>
          <button href={props.user.html_url}>
            Read more &rarr;
          </button>
        </div>
      </div>
    );
  }
  
  export default UserCard;