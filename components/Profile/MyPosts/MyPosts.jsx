import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  

  let postsElements = 
  props.profilePage.postData.map ( posts => <Post message={posts.message} likesCount={posts.likesCount} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <div className={classes.postInfo}>
        My Posts
      </div>
      <div>
        <textarea onChange={onPostChange} ref={ newPostElement }
           value = { props.newPostText} />
        <button onClick= { addPost }>Add post</button>
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
