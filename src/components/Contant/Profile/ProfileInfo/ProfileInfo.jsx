import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import profile from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  if(!props.user) {
    return <Preloader />
  }
  return (
    <div>
      <div className={profile.profile_bg}>
        <img className={profile.profile_img} src='https://images.wallpaperscraft.com/image/single/street_night_wet_155637_1920x1080.jpg' alt='contant-img'/>
      </div>
      <div className={profile.info}>
        <img className={profile.profile_ava} src={props.user.photos.large} alt="ava"></img>
        <div className={profile.profile_user_info}>{props.user.fullName}</div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo