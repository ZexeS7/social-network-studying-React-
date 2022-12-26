//import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, changeNewPostTextActionCreator } from "../../../../state/profile-reducer";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
  return {
    posts: state.profilePage.postsData,
    newText: state.profilePage.newText
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    changeNewText: (newPostText) => {
      dispatch(changeNewPostTextActionCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;