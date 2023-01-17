import React from "react";
import { Link } from "react-router-dom";
import item from "./UserItem.module.css";

function UserItem(props) {

  function follow() {
    return props.onFollow(props.id)
  }
  function unfollow() {
    return props.onUnfollow(props.id)
  }
  
  return (
    <div className={item.item} key={props.id}>
      <Link to={'/profile/' + props.id}>
        <img className={item.avatar} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fc6b1238650505.598fa11a29a17.png" alt="avatar" />
      </Link>
      <div className={item.info}>
        <span className={item.info_name}>{props.name}</span>
        <span className={item.info_location}></span>
      </div>
      { (props.follow) 
        ? <button disabled={props.followingInProgress} onClick={unfollow} className={item.btn +' '+ item.off}>Unfollow</button> 
        : <button disabled={props.followingInProgress} onClick={follow} className={item.btn +' '+ item.on}>Follow</button>}
    </div>
  )
}

export default UserItem