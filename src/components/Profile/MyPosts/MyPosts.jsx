import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

  let postData = [
    { id: '1', message: "My first day in a new city", likesCount: 78 },
    { id: '2', message: "Friends Please go to the lake", likesCount: 59 },
    { id: '3', message: "My like movie, Ender's Game", likesCount: 68 },
    { id: '4', message: "Good day, my friends called me out on the street", likesCount: 36 },
    { id: '5', message: "Hallo World", likesCount: 24 }
  ]

  let postsElements = postData.map ( posts => <Post massage={posts.message} likesCount={posts.likesCount} /> )

  return (
    <div className={classes.postsBlock}>
      <div className={classes.postInfo}>
        My Posts
      </div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <div className={classes.posts}>
          {
            postsElements
          }
        </div>
      </div>
    </div>
  )
}

export default MyPosts;