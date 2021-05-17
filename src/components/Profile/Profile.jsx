import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {


  return (
    <div className={classes.bg}>
        <ProfileInfo />
        <MyPosts profilePage={props.profilePage} 
          newPostText= {props.profilePage.newPostText}
          dispatch = {props.dispatch} />  
    </div>
  )
}
export default Profile;