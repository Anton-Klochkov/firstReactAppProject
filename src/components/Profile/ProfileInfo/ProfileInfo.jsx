import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div className={classes.bg}>
      <div>
        <img src='https://img.howtodowell.com/img/circuits/python-hello-world-9.jpg' />
      </div>
      <div className = {classes.descriptionBlock}>
        ava + description
    </div>
    </div>
  )
}


export default ProfileInfo;