import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img className={classes.icon} src="https://070.com.ua/home/catalog/product32648/image/russian/1.jpg" alt="" />
      { props.massage }
      <div>
      <button className = {classes.button} type="button"> <img src="https://www.freeiconspng.com/uploads/youtube-like-png-9.jpg" /> </button>
      { props.likesCount }
      </div>
    </div>
  )
}
export default Post;

