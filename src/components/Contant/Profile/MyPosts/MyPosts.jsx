import React from "react";
import Post from "./Post/Post";
import posts from "./MyPosts.module.css";

function MyPosts(props) {
  let postsItem = props.posts.map(post => <Post key={post.id} id={post.id} post={post.post} />)
  let textFromTextarea = React.createRef()
  function addPost() {
    return props.addPost()
  }
  function changeNewText() {
    let newPostText = textFromTextarea.current.value
    return props.changeNewText(newPostText)
  }
  return (
    <div className={posts.posts}>
      <div className={posts.add_post}>
        <textarea className={posts.textarea} ref={textFromTextarea} onChange={changeNewText} value={props.newText} />
        <button onClick={addPost}>Add</button>
      </div>
        {postsItem}
    </div>
  )
}

export default MyPosts;