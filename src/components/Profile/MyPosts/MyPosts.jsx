import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


  let postsElements = 
  props.postData.map ( posts => <Post massage={posts.message} likesCount={posts.likesCount} /> )

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