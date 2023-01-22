import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../../state/users-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../state/users-selectors";
import Users from "./Users";

class UsersC extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage)
  }
  onFollow  = (userId) => {
    return this.props.follow(userId)
  }
  onUnfollow = (userId) => {
    return this.props.unfollow(userId)
  }
  onPageNumber = (numberPage) => {
    this.props.requestUsers(this.props.pageSize, numberPage)
    this.props.setCurrentPage(numberPage)
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
        onUnfollow={this.onUnfollow}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress} />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setTotalUsersCount: (totalUsers) => {
//       dispatch(setTotalUsersCountAC(totalUsers))
//     },
//     setCurentPage: (numberPage) => {
//       dispatch(setCurrentPageAC(numberPage))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      requestUsers
    })(UsersC)