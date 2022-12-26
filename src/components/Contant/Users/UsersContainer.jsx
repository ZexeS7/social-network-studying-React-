import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setTotalUsersCountAC, setCurrentPageAC } from "../../../state/users-reducer";
import Users from "./Users";
import axios from "axios";

class UsersC extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(respons => {this.props.setUsers(respons.data.items); this.props.setTotalUsersCount(respons.data.totalCount)})
  }
  onFollow  = (userId) => {
    return this.props.follow(userId)
  }
  onUnfollow = (userId) => {
    return this.props.unfollow(userId)
  }
  onPageNumber = (numberPage) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${numberPage}`)
    .then(respons => {this.props.setUsers(respons.data.items)})
    this.props.setCurentPage(numberPage)
  }
  render() {
    return (
      <Users 
        users={this.props.users} 
        onPageNumber={this.onPageNumber} 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        onFollow={this.onFollow}
        onUnfollow={this.onUnfollow} />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
function mapDispatchToProps(dispatch) {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (totalUsers) => {
      dispatch(setTotalUsersCountAC(totalUsers))
    },
    setCurentPage: (numberPage) => {
      dispatch(setCurrentPageAC(numberPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)