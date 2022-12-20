import React from "react";

function Post(props) {
  return (
    <div className='post' key={props.id}>
      {props.post}
    </div>
  )
}

export default Post;