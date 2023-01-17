import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserItem from "./UserItem/UserItem";
import users_style from "./Users.module.css";

function Users(props) {
  let usersItems = props.users.map(u => <UserItem 
    key={u.id} 
    id={u.id} 
    name={u.name} 
    location={u.location} 
    follow={u.followed} 
    onFollow={props.onFollow} 
    onUnfollow={props.onUnfollow}
    followingInProgress={props.followingInProgress}/> )
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  function onPageNumber(number) {
    return props.onPageNumber(number)
  }
  return (
    <div className={users_style.body}>
      {props.isFetching ? <Preloader /> : null}
      {usersItems}
      <div className={users_style.number_page}>
        {pages.map(p => <span 
          className={ props.currentPage === p && users_style.page_active }
          onClick={() => {onPageNumber(p)}} >{p}</span>)} 
      </div>
    </div>
  )
}

export default Users