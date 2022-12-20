import React from "react";
import profile from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer"

function Profile(props) {
  return (
    <div className={profile.profile}>
      <div className={profile.profile_bg}>
        <img className={profile.profile_img} src='https://images.wallpaperscraft.com/image/single/street_night_wet_155637_1920x1080.jpg' alt='contant-img'/>
      </div>
      <div className={profile.info}>
        <img className={profile.profile_ava} src='https://w0.peakpx.com/wallpaper/237/224/HD-wallpaper-anonymous-anonymous-dont-dragon-logo-mask-touch.jpg' alt="ava"></img>
        <div className={profile.profile_user_info}>Pavel Borisov</div>
      </div>
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;