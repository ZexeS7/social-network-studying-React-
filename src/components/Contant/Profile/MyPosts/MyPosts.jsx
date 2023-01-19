import React from "react";
import Post from "./Post/Post";
import posts from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator} from "../../../../utilities/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

function MyPosts(props) {
  let postsItem = props.posts.map(post => <Post key={post.id} id={post.id} post={post.post} />)
  function addPost(value) {
    return props.addPost(value.postNewText)
  }
  return (
    <div className={posts.posts}>
      <div className={posts.add_post}>
        <PostReduxForm onSubmit={addPost} />
      </div>
        {postsItem}
    </div>
  )
}

function PostForm(props) {
  return (
    <form className={posts.form} onSubmit={props.handleSubmit}>
      <Field name={'postNewText'} component={Textarea} validate={[maxLength10]} placeholder='Post message' />
      <button className={posts.btn}>Add</button>
    </form>
  )
}

const PostReduxForm = reduxForm({form:'post'})(PostForm)

export default MyPosts;