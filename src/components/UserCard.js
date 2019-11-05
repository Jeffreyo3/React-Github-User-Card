import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    Button
  } from "shards-react";

  


function UserCard(props) {
    return (
        <Card className="user-card" style={{width: '250px', flex: 'auto'}}>
            <CardHeader>
                <CardTitle>{props.user.login}</CardTitle>
            </CardHeader>
            <CardImg src={props.user.avatar_url}/>
            <CardBody className="userCard-body">
            <p>{props.user.bio}</p>
            <Button href={props.user.html_url} target="_blank">
                View GitHub Profile
            </Button>
            </CardBody>
        </Card>
    );
  }
  
  export default UserCard;