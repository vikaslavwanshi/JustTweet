import React from 'react';
import { Button } from 'react-bootstrap'; 
import './profileinfo.css';

const ProfileInfo = () => {
  const fullName = "Vikas Lavwanshi";
  const username = "vikas";
  const joinDate = "May 01, 2024"; 
  const handle ="justtweet.com/vikas";
  const location ="Perth WA";
  
  return (
    <div>
      <div className="profile-info"> {/* class name is the one used in the css file*/}
        <h1>{fullName}</h1>
        <p>@{username}</p>
        <p>Joined: {joinDate}</p>
        <p>{handle}</p>
        <p>{location}</p>
        {/* using button from react bootstrap here*/}
        <Button variant="primary" >Tweet to {username}</Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
