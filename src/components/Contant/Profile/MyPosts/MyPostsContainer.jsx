import React from "react";
import { addPostActionCreator, changeNewPostTextActionCreator } from "../../../../state/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  let state = props.store.getState()
  function addPost() {
    return props.store.dispatch(addPostActionCreator())
  }
  function changeNewText(newPostText) {
    return props.store.dispatch(changeNewPostTextActionCreator(newPostText))
  }
  return (
    <div >
      <MyPosts posts={state.profilePage.postsData} changeNewText={changeNewText} addPost={addPost} newText={state.profilePage.newText} />
    </div>
  )
}

export default MyPostsContainer;