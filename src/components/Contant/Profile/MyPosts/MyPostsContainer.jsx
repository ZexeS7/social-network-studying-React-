//import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../../../state/profile-reducer";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
  return {
    posts: state.profilePage.postsData,
    newText: state.profilePage.newText
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;