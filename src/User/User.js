import React from 'react';
import './User.css';

const UserIcon = () => {
  return (
    <div className="UserIcon">
      <img src={require("../Images/UserIcon.png")} alt="UserIcon" height="30px" />
    </div>
  )
}

const UserMiniProfile = (props) => {
  return (
    <div className="UserMiniProfile">
      <UserIcon />
      <h3> {props.username} </h3>
    </div>
  )
}

export {
  UserMiniProfile
}
